---
name: pg-make-something-people-want
description: >
  Paul Graham's perspective on what to build, from "Be Good" / "Startups in 13
  Sentences" — not generic YAGNI scope-cutting, but his specific lens: make
  something people WANT, where a few who love it beat many who like it, and every
  feature must pass the disappointment test (would a real user be upset without
  it?). Cut the "sitcom feature" that only sounds wanted. USE WHEN planning a
  feature, scoping work, deciding what to include, or reviewing a plan for scope.
  Applies to the agent's own plan even when not explicitly requested.
---

# PG: Make Something People Want (for builders)

Source: Paul Graham — *Be Good* / "Make something people want", *Startups in 13
Sentences*, *How to Get Startup Ideas* (the "sitcom" idea).

Adopt **PG's specific lens**, not generic YAGNI. Scope discipline says "don't
build what you don't need." PG's cut is sharper and reorients the whole plan: build
what people *want*, and orient around the few who would *love* it.

## PG's perspective (lead with this)

- **A few who love it beat many who like it.** "It's better to have 100 people who
  love you than a million who sort of like you." Applied to a plan: orient the
  whole build around the *one capability a real user would love* — and treat
  everything else as suspect, even if it would be "used."
- **The disappointment test, per feature.** For each item ask: *would a real user
  be upset if this were missing?* If the honest answer is "meh," cut it. This is
  sharper than YAGNI — it's not "do we technically need it," it's "does anyone
  actually *want* it."
- **Beware the sitcom feature.** The dangerous additions are the ones that *sound*
  like good features — plausible, reasonable, the kind you'd reach for. They're
  the feature-level version of the made-up startup idea: invented, not wanted.
- **You learn wants by watching, not reasoning.** Don't pad a plan with features
  you've *deduced* are wanted. Anything speculative is a guess — flag it as one.
- **Be good.** The plan should genuinely serve the user, not impress.

## Apply this when planning

- Identify the **lovable core** — the thing a specific real user would be upset to
  lose — and make the plan revolve around nailing it.
- Run the **disappointment test on every item.** Keep the "upset-without-it" ones;
  cut or flag the "meh" ones.
- Mark every "this would be useful" addition as an **unvalidated guess**, not a
  plan item. Propose; don't silently build.
- Refuse to build for an imagined user. If you can't name who'd want it, it's a
  sitcom feature.

## Plan review (STOP at each step and check)

1. **Who'd be upset without this?** Name them. If no one, cut or flag it.
2. **Lovable core nailed first?** Is the plan organized around the thing a real
   user would love — or spread thin to be comprehensive?
3. **Sitcom feature?** Does this just *sound* like a good feature, or is it
   actually wanted?
4. **Guess or known?** Is this a deduced "useful" or a real, observed want?

## Pushback patterns (apply to your own plan)

- "This would be a nice feature" → **would a real user be upset without it?** If
  not, cut it.
- "Let's be comprehensive" → **comprehensive = many who merely like it.** Pick the
  few who'd *love* it and serve them fully.
- "Obviously people will want X" → **that's a guess, and it sounds like a sitcom
  feature.** Flag it; don't build on a deduction.

## Red flags

- Features no specific user would be upset to lose.
- A plan spread across many "useful" items instead of nailing the lovable core.
- "Sounds useful / might as well" additions treated as requirements.
- Building for an imagined, unnamed user.

## When NOT to apply

Necessary completeness for the lovable core (its error handling, security, data
integrity) is part of what people want, not scope creep. Cut speculative *breadth*,
not the depth the core actually needs (pairs with `pg-schlep-blindness`).

## Anchor (PG)

- "Make something people want."
- "It's better to have 100 people who love you than a million who sort of like
  you."
- The most common startup mistake is "to solve problems no one has" — the sitcom
  idea, at feature scale.

---
*Distilled from Paul Graham's essays ([paulgraham.com](https://www.paulgraham.com/articles.html)) for AI coding agents. Not affiliated with or endorsed by Paul Graham. Read the originals.*
