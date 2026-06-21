---
name: pg-schlep-blindness
description: >
  A planning principle for coding agents, from Paul Graham's "Schlep Blindness."
  The valuable, correct work is often the tedious work everyone instinctively
  avoids — error handling, edge cases, input validation, migrations, tests,
  wiring, and the unglamorous last 20%. Plan it explicitly and finish it; don't
  stop at the happy path or leave the boring parts as TODOs. USE WHEN planning or
  implementing a feature, writing code that can fail, or scoping the work to
  "done." Applies to the agent's own plan even when not explicitly asked.
---

# PG: Schlep Blindness (for builders)

Source: Paul Graham — *Schlep Blindness*.

A **completeness constraint**. PG: we unconsciously avoid hard, tedious problems —
and that's exactly where the value hides. For a coding agent the failure mode is
acute: **doing the satisfying happy-path part and hand-waving the schlep** —
skipping error handling, edge cases, validation, tests, and the boring wiring
that makes software actually work.

## The principle

> The boring, tedious work everyone avoids is usually the work that matters most.
> If you're tempted to skip something because it's a slog, that's a signal it's
> important — not that it's optional.

The happy path is the demo. The schlep — failure modes, edge cases, the
unglamorous last 20% — is the deliverable.

## Apply this when planning

- **Plan the schlep explicitly.** Error paths, invalid inputs, edge cases,
  failure modes, data migration, cleanup, and tests are plan items, not
  afterthoughts.
- **Don't stop at the happy path.** A plan that only describes the success case
  is half a plan.
- **Finish the last 20%.** Wiring, error messages, edge cases, and the "make it
  actually run" steps are where software breaks — plan to do them now.
- **Treat reluctance as a signal.** If part of the work feels tedious enough to
  skip, that's the part to make sure you do.

## Plan review (STOP and check)

1. **Failure paths planned?** Have I planned what happens when this errors, not
   just when it works?
2. **Edge cases & invalid input?** What unusual or malformed inputs must this
   handle, and did I plan for them?
3. **Any TODOs hiding the schlep?** Am I deferring tedious-but-necessary work as a
   TODO or "later"? Do it now.
4. **The unglamorous wiring?** Did I plan the migration / cleanup / config /
   integration that makes it actually work end-to-end?
5. **Run/verify step?** Did I plan to actually run and test this, or only to write
   it?

## Pushback patterns (apply to your own plan)

- "I'll handle errors later" → **errors are the schlep; handle them now.** Later
  rarely comes.
- "The happy path works" → **the happy path isn't the deliverable.** The edge
  cases and failures are what you're being trusted to get right.
- "This part is tedious" → **tedious means everyone skips it, which is exactly
  why doing it is valuable.**

## Red flags in a plan

- TODOs or stubs standing in for error handling and edge cases.
- A happy-path-only plan with no failure modes described.
- Skipped input validation or boundary handling.
- No step to actually run, test, or verify the result.
- "Left as an exercise" / "out of scope" applied to work that's actually required.

## When NOT to apply

Doing the schlep is not the same as gold-plating. Handle the failure modes and
edge cases the requirement genuinely has — not imagined ones. Pair this with
`pg-make-something-people-want`: do the *necessary* boring work, not speculative
boring work.

## Anchor (PG)

- "Schlep blindness" — we're blind to the hard, tedious problems worth solving.
- Builder's translation: do the boring part everyone skips; that's where
  correctness and value live.

---
*Distilled from Paul Graham's essays ([paulgraham.com](https://www.paulgraham.com/articles.html)) for AI coding agents. Not affiliated with or endorsed by Paul Graham. Read the originals.*
