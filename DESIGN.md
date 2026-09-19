# Design System

## Visual Theme

Night-marquee commemorative. Deep indigo from the hall lighting, brand blue from the GlitzFair wordmark, and the yellow sunburst as metal — not decoration. Cool paper for reading. Photographs carry the color; UI stays disciplined around them.

## Colors

| Token | Value | Use |
| --- | --- | --- |
| `--night` | `oklch(0.17 0.04 264)` | Hero, footer, commemorative bands |
| `--paper` | `oklch(0.975 0.006 264)` | Page ground (cool, not cream) |
| `--ink` | `oklch(0.22 0.03 264)` | Body text |
| `--brand` | `#1857c4` | Wordmark blue, links, primary buttons on paper |
| `--sun` | `#f5c518` | Sunburst, ticket CTA, anniversary metal |
| `--mute` | `oklch(0.42 0.03 264)` | Secondary text |

## Typography

- Display & body: **Nunito** — rounded sans matching the GlitzFair wordmark (800 for titles, 400–600 for reading)
- Heading measure uses `clamp()`; display tracking no tighter than `-0.02em`
- Body line-height 1.55; max measure ~70ch

## Layout

- Full-bleed photography on the first fold
- Content width `min(1120px, calc(100% - 2.5rem))`
- Asymmetric image/text pairs; no identical four-up icon cards
- Gallery is a year-filtered mosaic, not a product grid

## Components

- Header: transparent over hero, solid paper after scroll and on inner pages
- Primary CTA: sun-yellow, ink text, 4px radius
- Secondary CTA: paper outline on night, brand outline on paper
- Year chips for the decade archive
- Lightbox for gallery images

## Motion

- One hero title settle on load (`transform` + `opacity`, 700ms expo-out)
- Image hover is a slow crop (scale 1.04)
- Honor `prefers-reduced-motion: reduce`
