---
name: pg-always-working-code
description: >
  A build-process principle for coding agents, from Paul Graham's "Design and
  Research" (Worse is Better). Always have working code — refine a running
  prototype in small steps, run it early and often, never end in a broken state,
  and never attempt a "Hail Mary" big-bang build. Also: solve the user's real
  need, not the literal symptom. USE WHEN implementing anything, planning the
  order of work, or tempted to write a large change before running it. Apply it
  even when not explicitly asked.
---

# PG: Always Have Working Code (for builders)

Source: Paul Graham — *Design and Research* ("Worse is Better"; "always have
working code").

A **process constraint**. PG: build by refining a working prototype, not by
attempting the complete product in "one long touchdown pass" — the Hail Mary "is
a recipe for disaster." The agent failure mode this counters: **writing a large
change end-to-end on faith and only running it at the very end, so failures pile
up undiagnosed.**

## The principle

> Always have working code. Get the simplest end-to-end version running, then
> refine it in small steps — each one leaving the system runnable.

A program is "a pruned version of a tree that has had false starts branching off
all over it." Expect false starts; keep the trunk working.

## Apply this when implementing

- **Keep it green.** Make incremental changes that each leave the build runnable.
  Never sit in a broken state longer than necessary.
- **Prototype, then refine.** Get the thinnest end-to-end thing working first;
  improve it from there. Don't build the whole thing before testing any of it.
- **Run it early and often.** Execute after small steps for immediate feedback —
  don't write on faith and discover everything at the end.
- **Solve the need, not the symptom.** Like a doctor: figure out what the request
  is *actually* for and address that, rather than treating the literal words.
- **Expect false starts.** Iterating toward the answer is normal; the working
  trunk is what you protect.

## Process review (STOP and check)

1. **Working code right now?** Or am I deep in a large, unrun change?
2. **Smallest runnable version first?** Can I get something end-to-end working
   before adding more?
3. **Run it recently?** Or am I writing on faith and deferring all feedback?
4. **Real need or literal ask?** Am I treating the symptom, or the actual problem
   behind the request?

## Pushback patterns (apply to yourself)

- "I'll write it all, then test at the end" → **that's the Hail Mary — a recipe
  for disaster.** Keep working code at every step.
- "It should work" → **run it.** Don't ship on faith.
- "They asked for exactly X" → **what's the need behind X?** Treat the disease,
  not the symptom.

## Red flags

- Large changes written before anything is run.
- Long stretches of work with no execution.
- Leaving the build broken between steps.
- Literal instruction-following that misses the real goal.
- Test/run deferred to the very end ("big-bang" integration).

## When NOT to over-apply

"Always working" doesn't forbid brief, contained spikes where you knowingly break
something to explore — just keep them short and return to a working state quickly.
The rule is: don't *drift* into a long broken stretch by default.

## Anchor (PG)

- "Always have working code."
- "Get a prototype in front of users as soon as possible" (Worse is Better);
  the Hail Mary "is a recipe for disaster."
- "You have to figure out what's actually wrong with [the patient], and treat
  that." — solve the need, not the literal symptom.

---
*Distilled from Paul Graham's essays ([paulgraham.com](https://www.paulgraham.com/articles.html)) for AI coding agents. Not affiliated with or endorsed by Paul Graham. Read the originals.*
