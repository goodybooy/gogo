# CLAUDE.md

## Repository Info

- **Repo**: https://github.com/goodybooy/gogo
- **Branch**: `main`
- **Owner**: HX (huanxiliu99@gmail.com)

## Git Workflow Notes

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
- **Inline long URLs** — use `[text](url)` or reference-style links instead

### Commit message format

Include `Co-Authored-By` trailer when Claude helps author a file:

```
Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>
```

## History

| Date       | Action               | Details                                                                               |
| ---------- | -------------------- | ------------------------------------------------------------------------------------- |
| 2026-04-12 | Created README.md    | Added basic folder info and timestamp, committed as `32c084d`                         |
| 2026-04-12 | Created CLAUDE.md    | Documented git workflow and session notes                                             |
| 2026-04-12 | Added .gitignore     | Excludes `github_token.txt` from commits                                              |
| 2026-04-12 | Token-based push     | Used PAT in remote URL to authenticate pushes from Cowork                             |
| 2026-04-12 | Deleted ~$Items.docx | Removed Word temp file from repo                                                      |
| 2026-04-12 | Added research_1.md  | Deep-dive on tokenized securities, BlackRock BUIDL, and retail investor opportunities |



Research Guidelines

## What to look for when researching stocks and investable securities

### Public Stocks

* **What they do** — one-paragraph business overview
* **Basic company info** — market cap, P/E ratio, sector, headquarters
* **Stock performance** — recent price action, 1Y / YTD returns, line chart
* **Comparable companies** — 3–5 peers with brief descriptions
* **Comparable stock performance** — side-by-side performance metrics and line charts

### ETFs

* **Composition** — top 10 holdings with weights
* **Quick overview** — fund objective, AUM, expense ratio
* **Star holdings** — deeper look at 1–2 top or notable holdings with performance line charts

### Private Companies

* **Background** — founding story, leadership, headquarters
* **Business** — what they do, key products/services, target market
* **Revenue** — latest known revenue figures or range
* **Valuation timeline** — funding rounds, valuations over time, latest known valuation

## Output Format

* All tickers in a single Word document for high-level overview
* Half a page to 1 page per ticker
* Keep it scannable — tables, bullet points, and charts where helpful
