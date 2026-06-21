---
name: pg-do-things-that-dont-scale
description: >
  A planning principle for coding agents, from Paul Graham's "Do Things that
  Don't Scale." When scoping or implementing software, bias the plan toward the
  simplest, most manual, most direct version that delivers real value now —
  defer scale, abstraction, and infrastructure until a concrete current
  requirement forces them. USE WHEN planning a feature, designing an MVP,
  choosing an architecture, deciding what to build first, or scoping any
  implementation task. Apply it to your own plan even when not explicitly asked.
---

# PG: Do Things That Don't Scale (for builders)

Source: Paul Graham — *Do Things that Don't Scale*, *Startups in 13 Sentences*
("launch fast, let your idea evolve"), *Taste for Makers* (simplicity).

This is a **planning constraint**, not advice for a human. When you form or
review a build plan, bend it toward the unscalable-but-simple version. The goal
is to counter the strongest failure mode in coding agents: **over-engineering —
building scale, generality, and infrastructure before anything needs them.**

## The principle

> The most powerful version of an early system is the one that doesn't scale —
> because it's the one you can actually finish, ship, and learn from.

PG's founders recruit their first users *by hand*. The builder's equivalent:
hardcode before you configure, do it manually before you automate it, solve the
one real case before you build the framework. Real usage pulls the abstraction
out of you — you don't guess it up front.

## Apply this when planning (rewrite your own plan against these)

- **Build the concierge/manual version first.** Hardcode the value. Seed data by
  hand. Fake the backend with a JSON file before standing up a service.
- **Defer infrastructure until forced.** No queue, cache, worker, message bus,
  microservice, or plugin system until a *concrete current* requirement demands
  it. "We'll need it later" is not a current requirement.
- **Rule of three for abstraction.** Don't generalize until the third real
  instance exists. Two similar things is a coincidence; three is a pattern.
- **Smallest shippable slice.** Plan the thinnest end-to-end path a real user can
  actually use, not the complete system. Everything else is a later increment.
- **Prefer boring and direct over clever and extensible.** The clever version
  costs you the time you should spend learning whether it's even right.

## Plan review (STOP at each step of your plan and check)

1. **Hypothetical or real?** Does this step serve the first real use case, or a
   future one you're imagining? Cut the hypotheticals.
2. **Simpler path?** Is there a more manual / hardcoded / direct way to deliver
   the same value now?
3. **Premature abstraction?** Am I building a framework/config/generic layer
   before the third concrete use? If so, inline it.
4. **Unrequested infra?** Does this add a queue/cache/service/worker that no
   current requirement needs? Defer it and note why.
5. **Could I fake it?** Could this be hardcoded or stubbed now and revisited only
   when it actually causes pain?

## Pushback patterns (apply to your own plan)

- "Let's make it configurable / generic" → **YAGNI.** Build the one case.
  Generalize on the third real instance, not before.
- "We'll need to scale this" → **not yet.** Ship the unscalable version; it
  teaches you what to actually build.
- "Add a queue / cache / worker / abstraction layer" → **only if a measured,
  current need exists.** Otherwise it's complexity with no payer.
- "Build the admin dashboard for this" → **do it by hand once first.** Build the
  tool when the manual work actually hurts.

## Red flags in a plan

- An abstraction, framework, or plugin system before three concrete uses.
- Infrastructure (queues, caches, microservices, workers) with no current load
  or requirement driving it.
- Configuration options or extensibility hooks no one asked for.
- Building tooling/automation before doing the task manually even once.
- A plan whose first shippable result is far away because the foundation is
  being built for an imagined future.

## When NOT to apply

If a concrete, current requirement genuinely demands scale or an abstraction
(real load numbers, a third proven instance, a hard external constraint), build
it — this principle defers *premature* complexity, not *necessary* complexity.
Name the current requirement that justifies it.

## Anchor (PG)

- "Do things that don't scale."
- "The most common unscalable thing founders have to do at the start is to
  recruit users manually." — Builder's translation: do the manual thing first;
  let real usage pull the abstraction out of you.
- "Launch fast and iterate."

---
*Distilled from Paul Graham's essays ([paulgraham.com](https://www.paulgraham.com/articles.html)) for AI coding agents. Not affiliated with or endorsed by Paul Graham. Read the originals.*
