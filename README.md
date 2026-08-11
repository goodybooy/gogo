# gogo

Personal working repo (notes, reading list, and the sector tracker).

- **Repo**: https://github.com/goodybooy/gogo
- **Branch**: `main`
- [!NOTE]
  Agent workflow and push instructions live in `CLAUDE.md` (local-only, gitignored). This README carries the git-hygiene rules that are worth keeping visible on GitHub.

## Avoiding git lock conflicts

Only one tool touches this repo's git at a time. Stale `.lock` files come from two tools writing `.git` at once, or from a git operation that couldn't clean up after itself.

- **Before an agent commits/pushes** (Cowork sandbox, token push, or Claude Code), make sure GitHub Desktop is idle — not mid-commit, fetch, or push. When in doubt, close GitHub Desktop first.
- **Before pushing in GitHub Desktop**, make sure no agent is mid git command against `E:\Github Go`.
- **Prefer the host path** (Claude Code or GitHub Desktop on `E:\Github Go`) over the Cowork sandbox mount for commits. The sandbox mount blocks file deletion, so git can create lock files but can't remove them — that leaves stale `.lock` files that block the next push.
- **If a stale lock appears:** confirm no git process is running, then delete `.git/index.lock` (and any `.git/**/*.lock`, `.git/HEAD.lock`) from the host — File Explorer or `del` — and run `git status` to confirm. Do not delete a lock while an operation is actually running.
