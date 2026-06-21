const $ = (id) => document.getElementById(id);
const out = $("out");

// Load saved key into the field.
chrome.storage.local.get("apiKey", ({ apiKey }) => {
  if (apiKey) $("key").value = apiKey;
});

$("save").addEventListener("click", () => {
  chrome.storage.local.set({ apiKey: $("key").value.trim() }, () => {
    out.textContent = "Key saved.";
  });
});

// Pull readable text from the active tab.
function extractPageText() {
  const clone = document.body.cloneNode(true);
  clone.querySelectorAll("script,style,noscript,nav,footer,header").forEach((n) => n.remove());
  return (clone.innerText || "").replace(/\s+\n/g, "\n").trim();
}

$("go").addEventListener("click", async () => {
  out.classList.add("muted");
  out.textContent = "Reading page...";

  const { apiKey } = await chrome.storage.local.get("apiKey");
  if (!apiKey) {
    out.textContent = "Set your OpenAI API key in Settings first.";
    return;
  }

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  let pageText = "";
  try {
    const [res] = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: extractPageText,
    });
    pageText = res.result || "";
  } catch (e) {
    out.textContent = "Cannot read this page (try a normal http/https tab).";
    return;
  }

  if (!pageText) {
    out.textContent = "No readable text found on this page.";
    return;
  }
  pageText = pageText.slice(0, 12000); // keep request small

  out.textContent = "Summarizing...";
  try {
    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "Summarize the webpage in 5 concise bullet points." },
          { role: "user", content: `Title: ${tab.title}\n\n${pageText}` },
        ],
        temperature: 0.3,
      }),
    });
    const data = await r.json();
    if (!r.ok) throw new Error(data.error?.message || r.statusText);
    out.classList.remove("muted");
    out.textContent = data.choices?.[0]?.message?.content?.trim() || "(empty response)";
  } catch (e) {
    out.textContent = "Error: " + e.message;
  }
});
