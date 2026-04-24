# CLAUDE.md

## Repository Info

- **Repo**: https://github.com/goodybooy/gogo
- **Branch**: `main`
- **Owner**: HX (huanxiliu99@gmail.com)

## Git Workflow Notes

### Local-first editing rule (IMPORTANT)

When HX asks for any change to a file in this repo:

1. **Always modify the local working-directory file first.** Never edit the remote version directly (e.g., via GitHub API, `git show` redirects into committed state, or pushing a change that wasn't applied locally).
2. **Do not commit or push automatically.** Leave changes uncommitted in the working tree after editing.
3. **Only commit and push when HX explicitly says so** — e.g., "push to git", "commit and push", "push to gogo". Then run the full commit + push flow.

Why: editing remote without touching local leaves the working directory out of sync with `origin/main`, which caused a stuck merge + `index.lock` issue on 2026-04-23. Local is always the source of truth; remote is updated from local on demand.

### Mounted folder limitation

Git operations through the Cowork-mounted folder are unreliable. The workaround is to **clone the repo directly into the Cowork working directory** and operate from there:

```bash
cd /sessions/<session-id>/gogo_repo
```

This cloned copy is used for all git operations (add, commit, push), then the mounted folder stays in sync.

### Authentication

Place a GitHub personal access token in `github_token.txt` at the repo root (this file is in `.gitignore` and will **never** be committed). Then set the remote URL with the token embedded:

```bash
TOKEN=$(cat github_token.txt)
git remote set-url origin https://goodybooy:${TOKEN}@github.com/goodybooy/gogo.git
```

### Commit and push command

Since the working directory doesn't have a global git user configured, pass credentials inline with `-c`:

```bash
cd /sessions/<session-id>/gogo_repo \
  && git -c user.name="HX" -c user.email="huanxiliu99@gmail.com" add <file> \
  && git -c user.name="HX" -c user.email="huanxiliu99@gmail.com" commit -m "commit message" \
  && git push origin main
```

## Markdown Formatting Notes

When writing `.md` files for this repo, follow these conventions so they render well on GitHub:

### Things that work well

- **Mermaid diagrams** instead of ASCII art — GitHub renders ` ```mermaid ` blocks natively; ASCII box-drawing breaks on narrow screens
- **GitHub alert syntax** for callouts: `> [!NOTE]`, `> [!IMPORTANT]`, `> [!CAUTION]` — renders as colored boxes
- **`<br />` spacers** between sections for breathing room
- **Blockquotes (`>`)** for multi-point lists that need visual separation
- **Left-aligned tables** with `:------` — easier to scan than center-aligned
- **Collapsible `<details>` blocks** for long tables of contents
- **Shield badges** via `img.shields.io` for status/metadata at the top
- **`<p align="right">(<a href="#readme-top">back to top</a>)</p>`** for navigation in long docs
- **Reference-style links** at bottom of file to keep the body clean

### Things to avoid

- **`<![CDATA[` wrappers** — breaks all HTML rendering on GitHub
- **ASCII art diagrams** — fragile on mobile/narrow viewports
- **Wide tables with long cells** — compress badly; keep cell text concise
- **Inline long URLs** — use `[text](url)` or 