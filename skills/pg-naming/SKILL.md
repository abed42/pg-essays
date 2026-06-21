---
name: pg-naming
description: >
  A naming principle for coding agents, from Paul Graham's "Change Your Name."
  When naming a new project, repo, product, package, or service: generate many
  candidates, prefer short/pronounceable/spellable, check real availability
  (domain, package registry, handle) instead of assuming it's taken, and don't
  block building on finding the perfect clever name — available + not-bad beats
  clever + taken. USE WHEN naming or renaming a project, product, package,
  service, or repo. Apply it even when not explicitly asked.
---

# PG: Naming (for builders)

Source: Paul Graham — *Change Your Name*.

A **naming constraint**. PG's points: naming is a *separate skill* from building,
the `.com` (and equivalent namespaces) matters more than cleverness, and "almost
any word or word pair that is not an obviously bad name is sufficiently good."
The agent failure mode this counters: **agonizing over a clever name, or picking
one without checking it's actually available.**

## The principle

> Don't optimize for a brilliant name. Generate many decent candidates, take one
> that's available where it matters, and get back to building.

## Apply this when naming

- **Generate many candidates (10+).** Don't fixate on the first idea. Breadth
  beats depth here.
- **Check real availability before committing.** The `.com`, the package-registry
  name (npm/PyPI/crates), the GitHub org/repo, the social handle — whichever
  matter for this thing. Verify; don't assume it's taken.
- **Prefer short, pronounceable, spellable, typeable.** Avoid names that are hard
  to spell, easy to mishear, or collide with well-known projects.
- **Available + decent beats clever + taken.** A perfect name you can't have is
  worthless.
- **Timebox it.** Naming should not block the build. Pick a good-enough available
  name and move on.

## Naming review (STOP and check)

1. **Enough candidates?** Did I generate a real list, or fixate on one?
2. **Actually available?** Verified — not assumed — across the namespaces that
   matter (domain, registry, repo, handle)?
3. **Easy to say/spell/type?** Or will people fumble it?
4. **Collision check?** Does it clash with a known project/package?
5. **Am I overthinking cleverness** when "available + not-bad" is the bar?

## Pushback patterns (apply to yourself)

- "This clever name is perfect" → **is it available?** If the `.com`/package is
  taken, clever is moot. Verify first.
- "I can't think of a good name" → **naming is a separate skill; generate 20** and
  pick a non-bad available one.
- "Let's spend more time on the name" → **timebox it.** Building matters more.

## Red flags

- Blocking the build on finding the perfect name.
- Assuming a domain/package name is taken without checking.
- Hard-to-spell or easily-confused names.
- Ignoring namespace collisions (npm, PyPI, GitHub, etc.).

## Anchor (PG)

- "If you don't have the .com of your name, you should probably change your name."
- "Almost any word or word pair that is not an obviously bad name is sufficiently
  good." — Builder: generate many, verify availability, don't agonize.

---
*Distilled from Paul Graham's essays ([paulgraham.com](https://www.paulgraham.com/articles.html)) for AI coding agents. Not affiliated with or endorsed by Paul Graham. Read the originals.*
