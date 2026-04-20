---
name: github-push-gogo
description: >
  Push files to HX's GitHub repo (goodybooy/gogo) on the `main` branch. Use this
  skill whenever the user asks to commit, push, or sync files to their GitHub
  repo, or mentions "push to GitHub", "commit to gogo", "push to gogo",
  "git push", or wants to save work to their remote repository. Also triggers
  when the user says "push it" after creating or editing a file that belongs in
  the repo. This skill handles authentication via PAT, cloning, committing with
  correct user config, and pushing — even when working from a Cowork-mounted
  folder where direct git operations are unreliable.
allowed-tools: Bash(git *) Bash(cat *) Bash(cp *) Bash(mkdir *) Bash(ls *) Bash(pwd *) Bash(cd *)
---

# GitHub Push to Gogo Repo

## Why this skill exists

Git operations through Cowork-mounted folders are unreliable. The workaround is
to **clone the repo into the Cowork working directory** (`/sessions/<session-id>/`),
copy the target file(s) there, commit, and push from the clone. This skill
captures that workflow so you don't have to rediscover it each time.

## Repository details

- **Repo**: `https://github.com/goodybooy/gogo.git`
- **Branch**: `main`
- **Owner**: HX
- **User config**: `user.name="HX"`, `user.email="huanxiliu99@gmail.com"`

## Authentication

The repo uses a GitHub Personal Access Token (PAT) stored in `github_token.txt`
at the root of the mounted **Github Go** folder (typically
`/sessions/<session-id>/mnt/Github Go/github_token.txt`). This file is in
`.gitignore` and must **never** be committed.

Read the token from that file and embed it in the remote URL:

```bash
TOKEN=$(cat "<path-to-mounted-Github-Go>/github_token.txt")
```

## Workflow

### 1. Clone the repo (if not already cloned this session)

```bash
git clone https://goodybooy:${TOKEN}@github.com/goodybooy/gogo.git /sessions/<session-id>/gogo_repo
```

If `/sessions/<session-id>/gogo_repo` already exists, pull latest instead:

```bash
cd /sessions/<session-id>/gogo_repo && git pull origin main
```

### 2. Copy the file(s) into the clone

The file could come from anywhere — something you just created in the working
directory, something the user manually placed in a mounted folder, or an edited
file. Copy it into `gogo_repo/` at the appropriate path.

```bash
cp "<source-path>" /sessions/<session-id>/gogo_repo/<desired-filename>
```

If the user specifies a subdirectory within the repo, create it first with
`mkdir -p`.

### 3. Commit and push

Since the working directory doesn't have a global git user configured, pass
credentials inline with `-c`:

```bash
cd /sessions/<session-id>/gogo_repo \
  && git -c user.name="HX" -c user.email="huanxiliu99@gmail.com" add <file-or-files> \
  && git -c user.name="HX" -c user.email="huanxiliu99@gmail.com" commit -m "$(cat <<'EOF'
<commit message>

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)" \
  && git push origin main
```

### 4. Commit message format

- Keep it concise (1-2 lines).
- Include the `Co-Authored-By` trailer when Claude helped author or prepare the file.
- Use conventional style: `Add ...`, `Update ...`, `Fix ...`, etc.

## Important notes

- **Never commit `github_token.txt`** — it's in `.gitignore` for a reason.
- **Always use inline `-c` flags** for `user.name` and `user.email` on every git
  command that needs them (add doesn't strictly need it, but commit does).
- **Token in remote URL** is the auth mechanism — no SSH keys are configured in
  this environment.
- **The mounted Github Go folder** will stay in sync after pushes, but always do
  git operations from the cloned `gogo_repo/` directory, not the mount.
- **Confirm with the user before pushing** if the commit includes more than what
  they just asked for — since this pushes directly to `main`, there's no PR
  review step.
