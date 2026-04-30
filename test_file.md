# Runtime Self-Description

## What am I?

I am **Claude Code** — Anthropic's official CLI for Claude, running within the Claude Agent SDK. Per the user's global preferences, I'm called **Claupy(main)**.

I am **not** Cowork and **not** Dispatch. Cowork is a separate hosted/mounted environment (the project's `CLAUDE.md` references `/sessions/<session-id>/gogo_repo` paths and notes that git through the Cowork-mounted folder is unreliable). Dispatch is a different remote-agent product. This session is the local Claude Code CLI on the user's Windows machine.

## Model

- Powered by **Claude Opus 4.7 (1M context)**
- Exact model ID: `claude-opus-4-7[1m]`
- Knowledge cutoff: January 2026

## Environment

| Field | Value |
| :---- | :---- |
| Platform | `win32` (Windows 11 Home, 10.0.26100) |
| Shell | bash (Unix syntax — forward slashes, `/dev/null`) |
| Secondary shell | PowerShell available via the PowerShell tool |
| Git repository | yes |

## Working directory & worktree

- **cwd**: `E:\Github Go\.claude\worktrees\condescending-banzai-7f9ffe`
- This is a **git worktree**, not the main checkout.
- **Worktree name**: `condescending-banzai-7f9ffe`
- **Worktree path**: `E:\Github Go\.claude\worktrees\condescending-banzai-7f9ffe`
- **Current branch**: `claude/condescending-banzai-7f9ffe`
- **Main branch**: `main`
- The primary repo lives at `E:\Github Go\` (this worktree is under its `.claude\worktrees\` directory).

## Git identity in this session

- Git user (configured): `huanxiliu99`
- User email per project CLAUDE.md: `huanxiliu99@gmail.com`
- Remote: https://github.com/goodybooy/gogo (branch `main`)

## Memory system

I have a persistent file-based memory at:
`C:\Users\Good PC\.claude\projects\E--Github-Go\memory\`

Indexed via `MEMORY.md`. Currently one entry: the local-first git workflow rule.

## Other identifying notes

- Today's date in this session: **2026-04-30**
- Conda is installed at `C:\Acnda` (per global CLAUDE.md).
- This file was created locally only — **not committed, not pushed**, per the repo's local-first editing rule.

## Note on file location

This file was written directly to `E:\Github Go\test_file.md` (the main local repo) rather than to the worktree at `E:\Github Go\.claude\worktrees\condescending-banzai-7f9ffe\`, so the user can inspect it from their normal working checkout.
