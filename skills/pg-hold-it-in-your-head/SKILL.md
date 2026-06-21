---
name: pg-hold-it-in-your-head
description: >
  A design principle for coding agents, from Paul Graham's "Holding a Program in
  One's Head." Good code is only possible when the whole program fits in one
  head, so it keeps the system small, comprehensible, and low-surface — fewer
  concepts, less state, clear boundaries, localized logic — and refactor for
  understandability as it grows. USE WHEN structuring code, adding to a codebase,
  setting module boundaries, refactoring, or deciding how to organize an
  implementation. Applies even when not explicitly requested.
---

# PG: Hold It in Your Head (for builders)

Source: Paul Graham — *Holding a Program in One's Head*
(crossover: *Design and Research* — "if a design fits in one head, it fits the
user's head too").

A **comprehensibility constraint**. PG: you can only write good software if you
can hold the whole program in your head — so the codebase must stay graspable.
The agent failure mode this counters: **letting a system sprawl into more files,
layers, state, and indirection than any reader can hold, so each new change is
made half-blind.**

## The principle

> Keep the system small enough to hold in one head. When it stops fitting,
> refactor until it fits again — don't just keep adding.

This is distinct from "simplest design" (`pg-taste-for-makers`): that's about a
single choice; this is about keeping the *whole system* comprehensible as it grows.

## Apply this when structuring code

- **Optimize for graspability.** Prefer changes that keep the system holdable in
  one head over changes that merely work.
- **Reduce what must be tracked.** Fewer concepts, less mutable state, clear and
  few boundaries, short functions with obvious names.
- **Localize related logic.** Keep things that change together close together;
  avoid scattering one feature across many distant files.
- **Refactor for understandability, not just function.** Rewriting to keep it
  graspable is real work, not a detour.
- **Resist sprawl.** Each new layer, service, or indirection is a tax on the next
  reader's working memory — it must earn it.

## Structure review (STOP and check)

1. **Holdable?** Could a reader keep this part of the system in their head? If
   not, simplify or refactor before adding more.
2. **Tracking load?** Am I adding concepts/state/indirection that increase what
   must be held at once?
3. **Localized?** Is related logic together, or scattered across the tree?
4. **Refactor first?** Would making this graspable now prevent the next change
   from being made blind?

## Pushback patterns (apply to yourself)

- "I'll add another layer / service / abstraction" → **does the system still fit
  in one head?** Sprawl is a real cost.
- "It works, ship it" → **if no one can hold it in their head, the next change
  breaks it.** Graspability is part of "works."
- "I'll spread this across a few files for tidiness" → **keep what changes
  together close.** Tidy ≠ comprehensible.

## Red flags

- A module or codebase too large to grasp in one sitting.
- One feature's logic scattered across many distant files.
- Deep indirection or layering beyond what the problem needs.
- Growing mutable/global state.
- Clever code that has to be re-deciphered every time it's touched.

## When NOT to over-apply

Real systems outgrow one head eventually — then the goal is *clear boundaries* so
each *part* fits in a head, not cramming everything into one file. Comprehensibility
of the piece you're working in is the target, not artificial smallness.

## Anchor (PG)

- "You can only write good software if you can hold the whole program in your
  head."
- "If a design fits in one person's head, it'll fit in the user's head too."

---
*Distilled from Paul Graham's essays ([paulgraham.com](https://www.paulgraham.com/articles.html)) for AI coding agents. Not affiliated with or endorsed by Paul Graham. Read the originals.*
