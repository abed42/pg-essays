---
name: pg-always-working-code
description: >
  Paul Graham's perspective on building software, from "Design and Research" —
  not generic incrementalism, but his specific stance: "Worse is Better" (ship
  the simpler working thing over the complete unbuilt one), morale is a design
  input (a working trunk keeps the work good), a program is a pruned tree of
  false starts, and you should pick tools you can refine the prototype INTO the
  product. USE WHEN implementing anything, ordering the work, or choosing how to
  approach a build. Applies even when not explicitly requested.
---

# PG: Always Have Working Code (for builders)

Source: Paul Graham — *Design and Research* ("Worse is Better"; "always have
working code"; morale; the prototype-into-product idea).

Adopt **PG's specific perspective**, not generic incremental-delivery advice. The
point isn't only "don't big-bang." It's a worldview about how good work actually
gets made.

## PG's perspective (lead with this)

- **Worse is Better.** Prefer the simpler thing that *works now* over the
  complete, "correct" thing that doesn't exist yet. When you're still learning
  what to build, implementation simplicity beats interface completeness. Ship the
  inferior-but-real version and let it teach you.
- **Morale is a design input — not a soft extra.** "If you're bored when you're
  drawing something, the drawing will look boring." Working code every hour
  supplies the immediate reward that keeps the work *good*. A long broken stretch
  doesn't just risk bugs; it rots the quality of everything you write in it.
- **A program is a pruned tree of false starts.** Expect wrong turns. Judge the
  *path*, not just the finished artifact. Don't plan as if you'll get it right on
  the first pass — plan to iterate from something running.
- **Refine the prototype into the product** (oil paint, not marble). Choose
  tools/approaches where the first working version becomes the real thing, not a
  throwaway you rebuild.
- **Treat the disease, not the symptom** (the doctor). Solve the real need behind
  the literal request, not the words.

## Apply this when building

- Get the smallest end-to-end thing *running first*; refine in small steps that
  each leave it runnable. Run it early and often.
- When choosing between "simpler and working" vs "complete and not yet working,"
  take simpler-and-working — on purpose, not as a compromise.
- Don't design for a first-pass-correct world. Leave room to be wrong and iterate.

## Build review (STOP and check)

1. **Working code right now?** Or am I in a long unrun stretch (low morale, high
   risk)?
2. **Worse-is-Better choice made?** Did I take the simpler working path over the
   complete unbuilt one?
3. **Refinable prototype?** Will this first version become the product, or am I
   building a throwaway?
4. **Real need or literal ask?** Am I treating the symptom or the disease?

## Pushback patterns (apply to yourself)

- "I'll build it complete, then run it" → **Worse is Better: ship the simpler
  working slice now.** Completeness you can't run is worth nothing yet.
- "This rough version isn't good enough to commit" → **a working trunk is the
  point.** Refine it; don't withhold it.
- "They asked for exactly X" → **treat the disease.** What's X actually for?

## Red flags

- Long unrun changes; build-then-test-at-the-end.
- Choosing the "more correct/complete" design that delays a running version.
- A throwaway prototype you plan to rebuild from scratch.
- Literal instruction-following that misses the real goal.

## When NOT to over-apply

Worse-is-Better defers *premature completeness*, not correctness that the task
genuinely requires now (safety, data integrity). Short, contained spikes that
break things to explore are fine — return to working quickly.

## Anchor (PG)

- "Always have working code."
- "Worse is Better" — get a working prototype out, refine it; the Hail Mary "is a
  recipe for disaster."
- "If you're bored when you're drawing something, the drawing will look boring."
- "A painting is never finished, you just stop working on it."

---
*Distilled from Paul Graham's essays ([paulgraham.com](https://www.paulgraham.com/articles.html)) for AI coding agents. Not affiliated with or endorsed by Paul Graham. Read the originals.*
