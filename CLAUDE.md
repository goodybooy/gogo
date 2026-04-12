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

### Commit and push command

Since the working directory doesn't have a global git user configured, pass credentials inline with `-c`:

```bash
cd /sessions/<session-id>/gogo_repo \
  && git -c user.name="HX" -c user.email="huanxiliu99@gmail.com" add <file> \
  && git -c user.name="HX" -c user.email="huanxiliu99@gmail.com" commit -m "commit message" \
  && git push origin main
```

### Commit message format

Include `Co-Authored-By` trailer when Claude helps author a file:

```
Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>
```

## History

| Date | Action | Details |
|------|--------|---------|
| 2026-04-12 | Created README.md | Added basic folder info and timestamp, committed as `32c084d` |
| 2026-04-12 | Created CLAUDE.md | Documented git workflow and session notes |
