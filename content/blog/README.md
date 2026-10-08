# Blog content

Each `YYYY-MM-DD.json` file is one daily batch: 10–20 posts, every post written in both English and Slovak.
Only dated files count toward that target. The build warns if a dated batch has fewer than 10 or more than 20 posts.

After editing any file here, run:

```bash
npm run blog:build
```

It validates the content, writes `src/app/[locale]/blog/posts.generated.json`, and renders a cover image for each post into `public/blog/`. Commit the JSON together with the generated files.

## Post format

```json
{
  "date": "2026-10-08",
  "author": "Omnicode",
  "posts": [
    {
      "slug": "lowercase-hyphen-slug",
      "cover": { "icon": "Bot", "label": "AI agents" },
      "sources": [{ "name": "TechCrunch", "url": "https://techcrunch.com/..." }],
      "en": { "title": "...", "description": "...", "content": ["<p>...</p>", "<h2>...</h2>"] },
      "sk": { "title": "...", "description": "...", "content": ["<p>...</p>"] }
    }
  ]
}
```

- `slug` is used in both languages: `/en/blog/<slug>` and `/sk/blog/<slug>`. Use plain ASCII (no Slovak letters).
- `cover.icon` is a [lucide](https://lucide.dev/icons) icon name in PascalCase. `cover.label` is the short text on the cover (max 40 characters).
- `sources` are listed at the bottom of the post. Link only the articles you actually used, and write the post in your own words. Do not paste copied text.
- `content` is HTML: `<p>`, `<h2>`, `<h3>`, `<ul>`, `<li>`, `<strong>`, `<code>`, and `<a href='...'>`. Use single quotes inside attributes. Scripts and event attributes are rejected.
- A post's own `date` overrides the batch `date`. `author` defaults to the batch `author`.
