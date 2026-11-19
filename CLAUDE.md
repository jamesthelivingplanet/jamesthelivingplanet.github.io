# Project notes for Claude

## Drafting articles

When creating a new post, set `draft: true` in the frontmatter by default. Only flip it to `draft: false` (or remove the field) when I explicitly say "publish" for that article. Drafts can still be committed and pushed — the live site filters them out via `!data.draft` in `getCollection`.
