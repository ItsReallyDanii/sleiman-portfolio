## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Portfolio identity

The site at `sleiman.dev` is the public portfolio of Daniel Sleiman. Its initial design language is `The Architect's Notebook`: pen and pencil sketches, warm paper, handwritten display headings, readable body type, and the user's original geometric, winged hard-hat character. Preserve its distinctive line-art identity rather than replacing it with stock imagery or generic generated graphics.

## Content integrity

Ground project and research content in public repository documentation or explicitly approved sources. Clearly label simulations, proxies, exploratory sandboxes, and experimental readiness. Never imply hardware validation or professional qualifications not supported by evidence. Do not expose personal email or resume source files just because they are available as agent context.

## Frontend quality

Build responsive, semantic, keyboard-accessible Astro pages with good contrast, visible focus styles, and reduced-motion support. Prioritize static-first pages, optimize local imagery, and avoid gratuitous JavaScript or new services. Verify `npm run build` and preview desktop and mobile layouts when tooling permits.

## Deployment safety

Cloudflare Pages deploys this static Astro site from `main` using `npm run build` to `dist/`. Preserve `.node-version` and do not change domain, DNS, hosting settings, or the production branch for routine UI work. Prefer reviewable feature branches or pull requests before live updates.
