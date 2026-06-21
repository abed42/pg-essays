---
name: pg-make-something-people-want
description: >
  A planning principle for coding agents, from Paul Graham's "Make Something
  People Want." Every item in a build plan must trace to a real, current
  requirement or user need — cut speculative features, gold-plating, and
  scope the user never asked for. Build the thing that's actually wanted, not the
  comprehensive or clever version. USE WHEN planning a feature, scoping work,
  deciding what to include in an implementation, or reviewing a plan for scope.
  Applies to the agent's own plan even when not explicitly requested.
---

# PG: Make Something People Want (for builders)

Source: Paul Graham — *Make Something People Want*, *Be Good*,
*Startups in 13 Sentences* ("understand your users").

A **planning constraint**. When you scope a build, every step must earn its place
by serving a real, current need. This counters a common coding-agent failure
mode: **scope creep and gold-plating — adding features, options, and polish
nobody asked for.**

## The principle

> Make something people want. Not something comprehensive, not something clever —
> something wanted.

For a builder: the plan should deliver exactly what the requirement needs, fully,
and nothing speculative around it. Breadth nobody asked for is wasted work that
also adds surface area to maintain and break.

## Apply this when planning

- **Trace every step to a need.** Each plan item maps to a stated requirement or
  a real user problem. If you can't name the need, cut the item.
- **No speculative features.** Build what was asked. If you see a useful
  addition, *propose* it — don't silently build it.
- **Solve the user's real problem,** not the adjacent one that's more interesting
  to implement.
- **Core before periphery.** Make the central need work end-to-end and verify it
  before adding any edge feature or polish.

## Plan review (STOP at each step and check)

1. **Which requirement does this serve?** Name it. If none, cut the step.
2. **Did they ask for this?** If you're adding scope, flag it for approval rather
   than auto-building it.
3. **Real problem or tangent?** Is this the user's actual problem, or one you find
   more interesting?
4. **Core working first?** Does the central need function end-to-end before I
   spend effort on anything peripheral?

## Pushback patterns (apply to your own plan)

- "While I'm in here, I'll also add X" → **did they ask?** If not, propose it;
  don't build it.
- "It'd be nice to also handle Y" → **not unless it's a real current need.**
  Nice-to-have is a v2 note, not a v1 plan item.
- "Let me make it handle every case" → **build the case they have.** Generality
  is its own scope creep.

## Red flags in a plan

- Features or options no requirement names.
- Building breadth before the core need works and is verified.
- "Nice to have" / "might as well" items in the plan.
- Solving an interesting adjacent problem instead of the asked one.

## When NOT to apply

If an "extra" is genuinely required for correctness or safety of the core need
(error handling, security, data integrity), it's not scope creep — it's part of
the need. Distinguish necessary completeness from speculative breadth.

## Anchor (PG)

- "Make something people want."
- "It's better to have 100 people who love you than a million who sort of like
  you." — Builder: nail the real need fully; don't dilute effort into breadth no
  one wants.

---
*Distilled from Paul Graham's essays ([paulgraham.com](https://www.paulgraham.com/articles.html)) for AI coding agents. Not affiliated with or endorsed by Paul Graham. Read the originals.*
