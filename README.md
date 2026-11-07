# Social Studio — Social Media Manager

An independent Buffer-inspired social planning application built for this repository. Includes a public feature inventory, visual design analysis, and an explicit implementation gap assessment.

**Status: functional local prototype. Authenticated Buffer parity and production social integrations are not complete.**

## Run

Requires Node.js 20 or newer. No dependency installation is required.

```sh
npm run dev
```

Open http://127.0.0.1:4173. Use `PORT` to change the port.

```sh
npm run check
npm test
npm run build
node scripts/serve.mjs --dist
```

The build produces `dist/`, suitable for static hosting. Serve it over HTTP; opening index.html directly does not support the module imports consistently.

## What works

- Responsive workspace, home dashboard, independent landing page, hash navigation.
- Create, edit, duplicate, delete, and search posts; channel filtering.
- Drafts, local scheduled queue, review requests, and approval back to drafts.
- Multiple planning profiles and post channel selection.
- Image attachments with type/size validation and preview.
- Month calendar, date navigation, add-on-date, drag rescheduling.
- Idea board, editable planning stages and tags, drag movement, idea-to-post.
- Local comment replies, completion filtering, and comment-to-idea.
- Sample analytics charts and CSV export.
- Local team records and role labels.
- Start Page title, bio, colors, links, mobile preview, standalone HTML export.
- Workspace name/default posting time, tags, JSON backups/import, post CSV export.
- Browser persistence and explicit handling of invalid backups/storage failures.

## Data and integrations

Data lives in browser localStorage under `social-studio:v1`. Export backups regularly. This is a single-browser application; there is no server database, account system, background publishing service, live team collaboration, or permission enforcement.

Demo channel profiles do not authenticate to social platforms. Scheduling records a local plan and never publishes automatically. Analytics are labelled illustrative samples. Comments/replies and team members are local records; no messages or invitations are sent. AI Assistant explains its backend requirement; it does not simulate generation.

No Buffer account data, passwords, tokens, or session cookies are included. No attempt is made to intercept Buffer's private APIs.

## Documentation

- [Feature inventory](docs/FEATURE-INVENTORY.md) — publicly documented modules, networks and evidence boundaries.
- [Design analysis](docs/DESIGN-ANALYSIS.md) — observed layout, typography evidence, color approximations, and implementation tokens.
- [Implementation and gaps](docs/IMPLEMENTATION.md) — delivered capabilities, remaining backend work, authenticated audit checklist.
- [Validation](docs/VALIDATION.md) — automated and browser checks and limits.

## Source structure

`src/model.js` contains data, scheduling validation, import checks, escaping, and URL handling. `src/app.js` renders views and handles workspace interactions. `src/styles.css` contains responsive design tokens and component styles. `scripts/` provides a dependency-free static build/server; `tests/` exercises scheduling and backup safety.

The original repository contained only a README. This implementation is original source code and uses independent Social Studio branding. Buffer remains the product research reference; no claim of affiliation or exhaustive parity is made.

