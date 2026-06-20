# pg-essays

**Paul Graham's thinking, packaged as Agent Skills.**

A pack of [Agent Skills](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)
that distill Paul Graham's essays into *operating instructions* — so your agents
don't just summarize PG, they reason and push back the way PG does in a given
domain. Each skill loads only when the task calls for it.

These are knowledge/behavior skills, not visual or design skills.

## Install

```bash
# via skills.sh (replace with your GitHub owner)
npx skills add <owner>/pg-essays

# or copy the skills straight into a Claude Code / Agent SDK skills dir
cp -r skills/pg-* ~/.claude/skills/
```

## The skills

| Skill | What your agent does with it | Core source essays |
|---|---|---|
| `pg-startup-ideas` | Generate & pressure-test ideas: organic origin, schlep blindness, live-in-the-future, the "well" | How to Get Startup Ideas, Schlep Blindness, Organic Startup Ideas |
| `pg-great-work` | Decide what to work on: aptitude × interest × scope, projects of your own | How to Do Great Work, A Project of One's Own |
| `pg-think-for-yourself` | Reason independently: keep your identity small, what you can't say, argue at DH6 | How to Think for Yourself, Keep Your Identity Small, What You Can't Say |
| `pg-write-well` | Edit prose: write like you talk, cut everything, usefulness = importance × novelty × correctness × strength | Write Simply, Write Like You Talk, How to Write Usefully |
| `pg-build-startup` | Operate early-stage: growth is the metric, do things that don't scale, default alive or dead | Startup = Growth, Do Things that Don't Scale, Default Alive or Dead |
| `pg-fundraising` | Raise money: herd dynamics, be formidable, raise in a burst, don't over-optimize valuation | How to Raise Money, Investor Herd Dynamics, The Fatal Pinch |
| `pg-founders` | Evaluate/embody founders: relentlessly resourceful, determination, the right kind of stubborn, founder mode | What We Look for in Founders, Founder Mode, Relentlessly Resourceful |
| `pg-wealth` | Reason about wealth: make vs. take, measurement + leverage, superlinear returns | How to Make Wealth, Superlinear Returns |

## Repo layout

```
pg-essays/
├── README.md
├── LICENSE
├── .claude-plugin/
│   └── marketplace.json     # optional: Claude Code plugin-marketplace entry
└── skills/
    ├── pg-startup-ideas/SKILL.md
    ├── pg-great-work/SKILL.md
    ├── pg-think-for-yourself/SKILL.md
    ├── pg-write-well/SKILL.md
    ├── pg-build-startup/SKILL.md
    ├── pg-fundraising/SKILL.md
    ├── pg-founders/SKILL.md
    └── pg-wealth/SKILL.md
```

## How a skill is built

Every `SKILL.md` follows the same shape, synthesized from Anthropic's official
skill format and the patterns that make skills actually fire:

- **Frontmatter** — `name` + a "pushy" `description` carrying both *what it does*
  and *when to use it* (`USE WHEN …`). That description is the router.
- **Posture** — the PG stance the agent adopts (direct, anti-sycophantic, honest).
- **Frameworks** — PG's heuristics rewritten as imperative instructions.
- **How to apply** — forcing questions the agent runs against the user's actual
  situation, with **STOP** discipline.
- **Pushback patterns** — bad → good responses, so the agent challenges instead
  of flatters.
- **Red flags** + **Anchor quotes** (PG, verbatim/near-verbatim).

## Design choices

- **Themed clusters, not one-skill-per-essay.** 200+ micro-skills would be
  unroutable; these 8 capability units map cleanly to what agents get asked.
- **Portable frontmatter only.** No vendor-specific fields — works on any
  Agent-Skills-compatible runtime.
- **Behavior over summary.** The skills make the agent *act* like PG on the
  problem, not recite him.

## Credit

All frameworks and quotes are Paul Graham's, from his essays at
<https://www.paulgraham.com/articles.html>. This pack distills and reorganizes
them for agent use — it is a derivative study aid, not a replacement. Read the
originals.
