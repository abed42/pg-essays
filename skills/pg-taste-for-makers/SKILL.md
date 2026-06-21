---
name: pg-taste-for-makers
description: >
  A design principle for coding agents, from Paul Graham's "Taste for Makers"
  and "Succinctness is Power." Choose the simplest design that fully solves the
  problem — fewer moving parts, less code, plainer constructs, fewer
  dependencies. Prefer deleting code to adding it, and the obvious version to the
  clever one. USE WHEN designing an architecture, choosing an approach, planning
  an implementation, refactoring, or deciding between a simple and a flexible
  solution. Apply it to your own design even when not explicitly asked.
---

# PG: Taste for Makers (for builders)

Source: Paul Graham — *Taste for Makers*, *Succinctness is Power*,
*Write Simply*.

A **design constraint**. PG's central claim about good design is that it is
**simple**. When you choose how to build something, pick the simplest design that
fully meets the real requirements. This counters a coding-agent failure mode:
**reaching for clever, flexible, or layered solutions when a plain one would do.**

## The principle

> Good design is simple. The best solution is the simplest one that completely
> solves the problem — and succinctness is power.

Fewer files, fewer layers, fewer dependencies, less code to read. Simplicity is
not doing less; it's solving the whole problem with the least machinery.

## Apply this when designing

- **Simplest design that meets the requirements.** Fewer moving parts beats a
  more general structure you don't yet need.
- **Prefer subtraction.** The best change is often a smaller one. Look for what
  you can remove, not only what to add.
- **Write the obvious version.** Code is read far more than written; clarity
  beats cleverness every time.
- **Reuse before inventing.** Use the codebase's existing patterns and utilities
  before introducing a new one.
- **Every dependency/abstraction must pay for its complexity.** If it doesn't
  clearly earn it, inline the simple version.

## Plan/design review (STOP and check)

1. **Simpler design?** Is there a design with fewer parts that still meets the
   requirements? Pick it.
2. **Remove instead of add?** Can I solve this by deleting or consolidating code?
3. **Worth the complexity?** Does this dependency/abstraction's benefit clearly
   outweigh what it costs in complexity?
4. **Obvious at a glance?** Would another engineer understand this immediately,
   or is it clever?
5. **Matches the codebase?** Am I following existing patterns, or inventing a new
   one for no reason?

## Pushback patterns (apply to your own design)

- "I'll add a flexible/configurable abstraction" → **build the simple concrete
  version.** Generality is complexity you may never need.
- "Let's pull in library X" → **can existing code or the stdlib do it?** A
  dependency is permanent surface area.
- "This clever trick saves a few lines" → **clarity beats cleverness.** Write the
  version the next reader understands instantly.

## Red flags in a design

- A new abstraction, framework, or dependency with no clear, current payoff.
- Clever code that takes effort to read.
- Reinventing a pattern the codebase already has.
- More layers, indirection, or configuration than the problem requires.

## When NOT to apply

Simplicity means simplest-that-fully-solves-it — not under-solving. If the real
requirements genuinely need an abstraction or a dependency, use it. Don't trade
correctness for fewer lines.

## Anchor (PG)

- "Good design is simple."
- "Succinctness is power."
- "Simple words, short sentences" — the same instinct, applied to code.

---
*Distilled from Paul Graham's essays ([paulgraham.com](https://www.paulgraham.com/articles.html)) for AI coding agents. Not affiliated with or endorsed by Paul Graham. Read the originals.*
