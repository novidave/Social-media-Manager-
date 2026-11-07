# Buffer design analysis and reconstruction notes

Research date: 2026-11-07.

## What was observed

A controlled browser capture of https://buffer.com/publish at 1280 × 720 showed:

- A full-width light header with a brand at left, centered product navigation, and account/primary actions on the right.
- Generous white space between navigation and the main product introduction.
- A small uppercase section label, a large two-line heading aligned left, supporting copy below, and a rounded green action.
- An embedded application preview below the introduction, combining a left navigation rail with a light main panel and calendar controls.
- A restrained palette: nearly white surfaces, dark desaturated text, pale borders, and bright light green actions.
- Thin outline controls, modest panel rounding, and small colored channel identifiers.

This is public marketing/product-preview evidence. It does not establish every authenticated app screen or responsive state.

Evidence: REA `ev_5952ce3b0a7a22a4b5f7ce55c8f74376053586a69fe2ea75956fabd0eed063f1`, Chromium capture, 2026-11-07.

## Typography

The rendered Buffer authentication document explicitly linked the Google Fonts Inter family with weights 100–900 and italic support:

`https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap`

That confirms Inter loading on the login surface, not the exact computed font on every Buffer route. The exact marketing heading family was not measured and should not be inferred solely from the screenshot.

The reconstruction uses Inter with system sans-serif fallbacks. Original illustrative content uses Georgia italic for an editorial accent. This serif accent is a reconstruction design choice, not a claim about Buffer's font system.

Authentication evidence: REA `ev_0b6b5990ffe6c5ee95529d678c093ababa460ee0770f369ddfd1d807859f6739`.

## Color analysis

The source screenshot supports approximate visual matches, not authoritative CSS tokens. The following are the implementation's chosen values:

| Role | Reconstruction token | Purpose |
| --- | --- | --- |
| Page background | `#fcfcfa` | Warm light workspace |
| Panel/header | `#ffffff` | Primary surface |
| Main text | `#242824` | Headings and body |
| Green action | `#b0ec95` | Primary calls to action |
| Action text | `#233a2c` | Contrast on light green |
| Deep green | `#2d553c` | Selected states and accents |
| Selected navigation | `#edf2e8` | Soft active item background |
| Border | `#e8eae4` | Low-emphasis divisions |
| Supporting copy | `#596650` | Legible secondary text |
| Art surface | `#e8ecdc` | Original content illustration |

Network badges use familiar platform-associated colors for scanning; these are implementation choices, not an extracted brand specification.

## Workspace layout

The reconstruction converts the public product preview into an independently branded planning workspace:

- Desktop: 248 px fixed sidebar, 69 px top bar, 42 px main horizontal padding.
- Main content: page title and actions, status tabs, search/filter row, then grouped post cards.
- Queue: content capped at 850 px, chronological day groups, channel metadata, post text/media, tags, and edit controls.
- Calendar: seven columns with date navigation, day-level add controls, and rescheduling targets.
- Create: four horizontally arranged planning columns; each card contains content, a tag, and editing/conversion actions.
- Composer: centered native dialog, channel choices, body, media preview, planning time, tag, and status actions.
- Start Page: editor beside a phone-shaped preview.

These dimensions are chosen reconstruction values. They were not extracted from private Buffer CSS.

## Spacing and components

A small spacing family—roughly 4, 8, 12, 16, 24, 32, and 40 px—keeps related controls visually connected. Controls use 6–8 px rounding; cards use approximately 10–12 px. Primary actions carry the strongest color. Metadata and dividers have lower visual weight.

Native form controls and dialogs retain labels, keyboard focus, and Escape-to-close behavior. Text content is escaped; link protocols are checked. Reduced-motion preferences remove transitions. This is not a completed accessibility certification; contrast and assistive-technology testing should accompany a production release.

## Responsive behavior

The implementation adapts at 1150, 900, and 650 px. The sidebar narrows, then becomes a menu on small screens. Forms stack, the Start Page editor moves above its preview, and calendars/boards scroll horizontally within their own containers. A 390 × 844 browser capture verified the mobile queue visually.

Mobile evidence: REA `ev_40978dbb33e2951d7c2e1d62acc29753b8b4a3249265197e4cf93b62907195f0`.

## Fidelity and remaining work

The result recreates the broad information architecture and visual character with original content and Social Studio branding. It is not a pixel-exact copy. Authenticated screens, computed styles across routes, exact icons, full font deployment, platform-specific editors, and all empty/loading/error states still require account-level inspection.

Reference: [Buffer Publish](https://buffer.com/publish).

