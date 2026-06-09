#!/usr/bin/env bash
set -euo pipefail

REPO_NAME="${1:-first-international-memory-game}"

cd "$(dirname "$0")"

if ! gh auth status >/dev/null 2>&1; then
  echo "GitHub CLI is not logged in. Run: gh auth login -h github.com"
  exit 1
fi

OWNER="$(gh api user -q .login)"

if ! gh repo view "$OWNER/$REPO_NAME" >/dev/null 2>&1; then
  gh repo create "$REPO_NAME" --public --source=. --remote=origin --push
else
  if ! git remote get-url origin >/dev/null 2>&1; then
    git remote add origin "https://github.com/$OWNER/$REPO_NAME.git"
  fi
  git push -u origin main
fi

if ! gh api "repos/$OWNER/$REPO_NAME/pages" >/dev/null 2>&1; then
  gh api --method POST "repos/$OWNER/$REPO_NAME/pages" \
    -f source[branch]=main \
    -f source[path]=/
fi

echo
echo "Published:"
echo "https://$OWNER.github.io/$REPO_NAME/"
