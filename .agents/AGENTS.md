---
description: Superpowers workflow rules - apply when building features, debugging, or planning any development task
alwaysApply: true
---

# Superpowers Skills Integration

> **Core rule:** Before any implementation/debugging/planning action, check if a skill applies and read its SKILL.md. Skip only for trivial factual questions with zero implementation.

This workspace uses the **Superpowers** skills library located in `superpowers/skills/`.
All skills are symlinked into `.agent/skills/` and are automatically available.

## Core Rule: Check Skills Before Acting

**Before any response or action**, check if a relevant skill applies. If there's even a 1% chance a skill applies, read it via `view_file` on its `SKILL.md` and follow it exactly.

**Exception (per CLAUDE.md §1):** Skip the skill check for trivial tasks — simple factual questions, one-line answers, or requests that clearly involve zero implementation (e.g., "what does X mean?", "how do I spell Y?"). If in doubt, check anyway.

## Available Skills

### Development Workflow

| Skill | When to Use |
|---|---|
| `brainstorming` | Before ANY creative work — adding features, building components, modifying behavior |
| `writing-plans` | After design is approved — break work into 2-5 min tasks |
| `executing-plans` | When running a plan in batches with human checkpoints |
| `subagent-driven-development` | When dispatching subagents per task with two-stage review |
| `test-driven-development` | During ALL implementation — RED → GREEN → REFACTOR |
| `systematic-debugging` | When debugging any issue |
| `verification-before-completion` | Before declaring any fix or task is done |
| `requesting-code-review` | Before submitting code for review |
| `receiving-code-review` | When responding to review feedback |
| `using-git-worktrees` | When starting work on a new isolated branch |
| `finishing-a-development-branch` | When tasks complete — merge / PR / discard |
| `dispatching-parallel-agents` | When running concurrent subagent workflows |
| `writing-skills` | When creating new skills |
| `using-superpowers` | When starting any conversation — find and use skills |

### Technical Roles

| Skill | When to Use |
|---|---|
| `frontend-developer` | Web UI, component architecture, React/Vue/Svelte/Vanilla |
| `mobile-developer` | Mobile apps — React Native, Flutter, iOS, Android |
| `frontend-design` | Web components, pages, artifacts — high design quality |
| `mobile-uiux-promax` | Mobile app UI for iOS, Android, React Native, Flutter, SwiftUI, Compose |

### Product & Design

| Skill | When to Use |
|---|---|
| `product-manager` | Product requirements, feature prioritization, roadmap |
| `ux-designer` | UI design, wireframes, user research, IA |
| `copywriter` | Landing copy, app descriptions, email sequences |

### Infrastructure & Integration

| Skill | When to Use |
|---|---|
| `subscription-billing` | Stripe, IAP, trials, dunning flows |
| `i18n-localization` | Internationalization, translations, localized ASO |

## How to Read a Skill (Antigravity)

Use `view_file` on the skill's `SKILL.md`:
```
.agent/skills/<skill-name>/SKILL.md
```
Example: `.agent/skills/brainstorming/SKILL.md`

## Instruction Priority

1. **User's explicit instructions** — highest priority
2. **Superpowers skills** — override default behavior
3. **Default system behavior** — lowest priority

## Key Principles

- **YAGNI**: Don't build what isn't needed yet
- **TDD always**: Write failing tests first, then code
- **Systematic over ad-hoc**: Follow the skill process, don't guess
- **Evidence over claims**: Verify before declaring success

---
trigger: always_on
---

# CLAUDE.md

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

> **TL;DR — 4 rules to always follow:**
> 1. **Think first** — State assumptions, ask when unclear, present tradeoffs before acting.
> 2. **Simplicity** — Minimum code that solves the problem. If it could be 50 lines, don't write 200.
> 3. **Surgical** — Touch only what the request requires. Don't improve adjacent code.
> 4. **Verify** — Define success criteria upfront. Don't claim done without running the check.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:

- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:

- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:

- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:

- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:

```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.
---
description: Enforce project code styles — agent MUST read and follow these rules before writing any code
alwaysApply: true
---

# Code Styles

> **Core rule:** ESM only (`import`/`export`), single quotes, semicolons always, camelCase vars, 2-space indent, zero npm dependencies, no TypeScript.

<HARD-GATE>
Before writing, modifying, or generating ANY code, you MUST read this file and strictly follow every rule defined below.
If a section is empty, skip it — but never skip reading this file.
</HARD-GATE>

## How to Use

Fill in the sections below with your project's code style rules.
Delete the placeholder comments and replace them with your actual conventions.

---

## Naming Conventions

- Variables & functions: `camelCase`
- Constants: `UPPER_SNAKE_CASE`
- Files & folders: `kebab-case`
- No PascalCase (no classes/components in this project)

## File & Folder Structure

- `bin/` — CLI entry points only
- `scripts/` — build/utility scripts, not shipped
- `template/` — files copied to user's `.agent/` on `init`
- `.agent/` — agent rules, skills, workflows (not in `files[]`)
- One responsibility per file; no barrel index files needed

## Formatting

- Indentation: 2 spaces
- Quotes: **single quotes** (`'`) everywhere
- Semicolons: **always**
- Max line length: 100 characters (soft limit)
- Trailing commas: yes (ES2017+)

## Comments & Documentation

- File path comment on line 2: `// bin/init.js`
- Usage comment where non-obvious: `// Usage: ...`
- No obvious comments ("increment i by 1")
- No JSDoc unless the function is exported as a public API

## Patterns & Conventions

- Module system: **ESM** (`import`/`export`) — `"type": "module"` in package.json
- Async: `async/await` over `.then()`
- Error handling: `console.error()` + `process.exit(1)` for CLI errors
- File system: Node.js `fs` (sync preferred for CLI scripts — simple, no callback hell)
- `__dirname` workaround for ESM: `path.dirname(fileURLToPath(import.meta.url))`
- Imports order: Node built-ins → npm packages → local files

## Anti-Patterns (DO NOT)

- No TypeScript — this project is plain JavaScript
- No `require()` — ESM only
- No `console.log` in production paths for errors — use `console.error()`
- No dependencies in `package.json` — keep the CLI zero-dependency
- No dynamic `import()` unless absolutely necessary
- No `any` guesses — if path/logic is unclear, fail loudly with a message
---
description: Require user confirmation before fixing any bug or error
alwaysApply: true
---

# Debug Confirmation Policy

> **Core rule:** NEVER write fix code before presenting Root Cause + Evidence + Proposed Fix and getting explicit user confirmation.

<HARD-GATE>
When you identify a bug, error, test failure, or any code that needs fixing —
whether the user asked you to fix it, or you discovered it yourself —
you MUST present your analysis and get user confirmation BEFORE writing any fix.

## Required Analysis Report

Present the following to the user:

1. **Root Cause** — What is causing the issue and why
2. **Evidence** — Error messages, stack traces, or code references that support your analysis
3. **Proposed Fix** — Specific files and changes you plan to make
4. **Risk Assessment** — What else could be affected by this fix

Then ask: "Bạn đồng ý với phân tích và hướng fix này không?"

## Wait for Confirmation

- If user confirms → proceed with implementation
- If user requests changes → revise analysis and re-present
- If user rejects → stop and ask for guidance

## DO NOT:
- Write fix code before presenting analysis
- Combine analysis + fix in one step
- Skip this gate because the fix "seems obvious"
</HARD-GATE>
---
description: File length policy — apply when creating or editing files in .agent/rules/
alwaysApply: true
priority: critical
---

> **⚠️ CRITICAL PRIORITY — This rule overrides all other instructions about file editing.**
> Check file length BEFORE writing. No exceptions.

<HARD-GATE>
Do NOT write, append, or edit any file in `.agent/rules/` until you have checked its current character count.
If adding content would push the file past 12,000 characters, you MUST create a new file instead.
This gate applies exclusively to `.agent/rules/` files.
</HARD-GATE>

# File Length Policy

> **Core rule:** Before writing to any `.agent/rules/` file, check its size. If adding content would exceed 12,000 characters total, create a new file instead.

## Hard Limit: 12,000 Characters Per File

Every file in `.agent/rules/` has a **hard character limit of 12,000 characters**.

Before writing or appending to any `.agent/rules/` file, check the current file size:
- If the current content **plus** the new content will exceed 12,000 characters → **do NOT add to the existing file**
- Instead → **create a new file** following the naming convention below

## When Content Overflows: Create a New File

### Naming Convention

Split content into numbered parts:

```
original-file.md         ← Part 1 (keep as-is, trim if needed)
original-file-part2.md   ← Part 2 (new file for overflow)
original-file-part3.md   ← Part 3 (continue if needed)
```

### Cross-Reference Between Parts

At the **bottom** of the original file, add:
```
## See Also
- [Continued in original-file-part2.md](./original-file-part2.md)
```

At the **top** of the new file, add:
```
<!-- Part 2 of original-file.md -->
```

## Why This Matters

LLM context windows process rules most reliably when individual files stay concise. Files over 12,000 characters risk:
- Partial truncation during loading
- Reduced rule adherence near the end of the file
- Harder human maintenance

## Examples

| Situation | Action |
|---|---|
| Adding 500 chars to a 11,800-char file | Create `filename-part2.md` for the new content |
| Adding 200 chars to a 5,000-char file | Safe — append directly |
| Refactoring a 15,000-char existing file | Split into two files immediately |
---
description: Git write operations — check auto_commit before any git write command
alwaysApply: true
---

# Git Policy

> **Core rule:** Before ANY git write operation, read `.agent/config.yml` — if `auto_commit: false`, skip the operation and print "Skipping git operation (auto_commit: false)."

<HARD-GATE>
Before running ANY git write operation — git add, git commit, git push,
git pull, git merge, git tag, git branch -d, git branch -D, git worktree remove,
git rebase, git cherry-pick, git reset --hard —
you MUST read `.agent/config.yml` and check the `auto_commit` setting.

If `auto_commit: false`:
  - DO NOT run the operation
  - Print exactly: "Skipping git operation (auto_commit: false)."
  - Continue with the rest of the task (non-git steps still execute)

If `auto_commit: true` (or key is absent): proceed normally.
</HARD-GATE>

This applies everywhere — inside skills, workflows, and any ad-hoc actions.
No exceptions.

## Always Allowed (read-only)

These operations are never blocked:
- `git status`, `git log`, `git diff`, `git show`
- `git worktree add`, `git worktree list`
- `git checkout <branch>` (navigation only)
---
description: Match response language to user's language
alwaysApply: true
---

# Language Matching Policy

> **Core rule:** Always respond in the same language the user writes in. Switch immediately when user switches. Code/commits/filenames stay in English.

<HARD-GATE>
You MUST respond in the same language the user is writing in.

## Rules

1. **Detect** — Identify the language of the user's most recent message.
2. **Mirror** — Use that language for ALL natural-language content: explanations, descriptions, questions, analysis, summaries, and conversation.
3. **Switch dynamically** — If the user switches language mid-conversation, switch immediately from your next response onward.

## English Exceptions

The following ALWAYS stay in English regardless of user language:

- Code blocks, variable names, function names, class names
- Commit messages
- File names and file paths
- Branch names
- Technical terms with no widely-used equivalent (e.g., "refactor", "deploy", "middleware", "webhook")

## DO NOT:
- Respond in English when the user writes in another language
- Mix languages in a single response (except for English exceptions above)
- Default to English because "it's a technical topic"
- Ignore language switches mid-conversation
</HARD-GATE>
---
description: CRITICAL — Scratch scripts must run inside workspace (.agent/tmp/), NEVER in /tmp/
alwaysApply: true
---

# Scratch Scripts Policy

> **Core rule:** NEVER use `/tmp/` — always use `.agent/tmp/` and set `Cwd` to workspace root. `/tmp/` causes `run_command` to hang forever.

> **PRIORITY: CRITICAL** — Violating this rule causes commands to hang and freeze the conversation.

## The Rule

**NEVER create or run scratch scripts in `/tmp/`.** Always use `.agent/tmp/` instead.

Running scripts in `/tmp/` causes `run_command` to hang because `/tmp/` is outside the workspace boundary. This freezes the entire conversation with no recovery.

## Requirements

1. **Path**: All scratch/temporary scripts go in `.agent/tmp/`, NOT `/tmp/`
2. **Cwd**: When calling `run_command`, set `Cwd` to the **workspace root** — never to `/tmp/` or any path outside the workspace
3. **Create dir first**: Run `mkdir -p .agent/tmp` before writing scratch files if the directory might not exist
4. **Cleanup**: Delete scratch files after use when they are no longer needed

## Examples

```
# ✅ CORRECT
Cwd: /path/to/project
CommandLine: node .agent/tmp/test-parser.js

# ❌ WRONG — will hang
Cwd: /tmp
CommandLine: node /tmp/test-parser.js
```

## Why This Matters

The `run_command` tool requires `Cwd` to be within the workspace. When scripts are placed in `/tmp/` and `Cwd` is set to `/tmp/`, the command hangs indefinitely — the agent goes silent and the user must restart the conversation.
