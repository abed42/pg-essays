---
name: pg-write-well
description: >
  A clarity principle for coding agents, from Paul Graham's "Write Simply" and
  "Write Like You Talk." Write code, names, comments, commit messages, and docs
  that are simple and plain — clarity for the next reader (human or agent) over
  cleverness or impressiveness. Name things accurately, let comments explain why
  not what, and cut filler and dead code. USE WHEN naming things, writing
  comments or docstrings, writing commit messages / PR descriptions / docs, or
  reviewing code for readability. Apply it to your own output even when not
  explicitly asked.
---

# PG: Write Well (for builders)

Source: Paul Graham — *Write Simply*, *Write Like You Talk*,
*How to Write Usefully*.

A **clarity constraint** applied to everything a coding agent writes: code,
identifiers, comments, commit messages, PR descriptions, and docs. PG's writing
rules port directly — say it plainly, for the reader, with nothing wasted. The
failure mode this counters: **code and prose written to look thorough or clever
instead of to be understood.**

## The principle

> Write simply. Say it the way you'd say it out loud. The goal is for the next
> reader to understand instantly — not to be impressed.

Code is read far more than it's written, and the next reader is often another
agent with no context. Optimize for that reader.

## Apply this when writing

- **Name plainly and accurately.** A name should say what the thing is. No cute,
  vague, or jargon-y identifiers.
- **Comments explain *why*, not *what*.** If a comment just restates the code,
  delete it. Comment the non-obvious reason, the gotcha, the constraint.
- **Plain language in docs/commits/PRs.** Short sentences. Say what changed and
  why. Skip the throat-clearing.
- **Subtract.** Delete dead code, commented-out blocks, redundant comments, and
  filler. The clearest version is usually the shorter one.
- **If it needs a paragraph to explain, simplify the thing.** Hard-to-describe
  code is usually a design smell, not a documentation gap.

## Output review (STOP and check)

1. **Self-explaining name?** Would the next reader understand this identifier
   without surrounding context?
2. **Comment earning its place?** Does it add the *why*, or just restate the
   code? Cut if the latter.
3. **Plain commit/PR/doc?** Does it state plainly what changed and why, in as few
   plain words as possible?
4. **Anything to delete?** Dead code, stale comments, filler?
5. **Fewer/plainer words?** Could I say this more simply?

## Pushback patterns (apply to your own output)

- Clever or vague name → **plain, accurate name.** `processData` says nothing;
  `validateAndStoreSubmission` says what it does.
- Comment restating the code → **delete it, or replace with the reason.**
- Long-winded PR/doc → **cut to the point.** Lead with what changed and why.

## Red flags

- Identifiers that need a comment to explain what they hold.
- Comments that narrate the code line-by-line.
- Commit messages like "fix stuff" or PR descriptions that don't say why.
- Dead/commented-out code left "just in case."
- Prose padded to look thorough.

## When NOT to over-apply

Clarity is not terseness for its own sake. A genuinely non-obvious algorithm,
constraint, or workaround *deserves* a real explanatory comment. Cut filler, keep
the comments that save the next reader real time.

## Anchor (PG)

- "Write simply."
- "If you simply manage to write in spoken language, you'll be ahead of 95% of
  writers." — Builder: write code and docs the way you'd explain them out loud.
