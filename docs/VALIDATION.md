# Validation and evidence

Validated on 2026-11-07 using Node.js 24 and a Chromium browser.

## Automated checks

- `npm run check`: JavaScript syntax checks passed.
- `npm test`: 7 tests passed.
- `npm run build`: static build succeeded.

Tests cover future-date scheduling, required content/channels, draft dates, JSON backup round trips, malformed state and unknown channel references, executable-media/art/color injection, invalid posting times, URL protocol checks, output escaping, and local calendar date keys.

## Browser checks

| Check | Result | REA evidence |
| --- | --- | --- |
| Initial desktop render/composer | Passed | `ev_32738e6adcc1c4338b39e9fad9e7940be8090cf72db3141a31eaad07bbb4655c` |
| Create and save a draft | Passed; draft count/content updated | `ev_c411086bb37632c5fff9f20e929bb9f50784548b274fe6f0cd79f034e0b38aff` |
| Full page reload | Passed; created draft persisted | `ev_f7934fd123476c6c13c0e50fbba917f9b54827cbe43ee6bc42c4fc9427e55cc2` |
| Calendar, ideas, idea creation, home, community, insights, team, Start Page | Rendered; new idea visible | `ev_1c33d9805a4fdf26065008efe76eea3d25f6cc4d4527bf491059c9830f9c3629` |
| Settings | Passed with a unique navigation locator | `ev_34924ab89680dae2bb7cdff079be61f0ccd9bb823c79f60881982a8e2919fdad` |
| Mobile queue, 390 × 844 | Screenshot inspected; rendered without page errors | `ev_40978dbb33e2951d7c2e1d62acc29753b8b4a3249265197e4cf93b62907195f0` |
| Final desktop render | No console or page-error events | `ev_8af3ccc3ccd1e59a8066ac0dbc416ee4d821796aebd126b4682d25fd3376e267` |

The multi-route scenario's final Settings click initially matched two controls. It failed in the test locator, with no application error. A follow-up selected the navigation item uniquely and passed. The initial missing favicon was fixed.

## Verification limits

Drag/drop, file upload/import/download, quota exhaustion, keyboard-only use, all mobile views, and all mutation combinations were not exercised end-to-end. The browser checks do not establish production readiness or complete accessibility compliance. Import/scheduling validation has separate automated coverage.

No real publishing, external analytics, OAuth, AI call, invitation, subscription, or social-network reply was tested; those integrations are not implemented. The Buffer account was not authenticated. The product research is public evidence only.

## Repository delivery

GitHub initially rejected writes with HTTP 403, `Resource not accessible by integration`. After the user restored access, branch creation succeeded and source delivery proceeded through the GitHub connector on `codex/social-studio`, without cloning. Source and static build ZIPs are also available locally. Authenticated Buffer inspection remains incomplete.

Shell network access returned EACCES, dependency installation could not complete, and Git was unavailable. No hosted deployment is claimed.

