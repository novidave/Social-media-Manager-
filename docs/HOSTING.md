# Hosting status

## Source

The application and reports are merged into `main` through PR #1. No repository was cloned.

## GitHub Pages: prepared, awaiting enablement

The `gh-pages` branch contains the verified static build at its root, with `index.html`, `src/`, and `.nojekyll`.

Open https://github.com/novidave/Social-media-Manager-/settings/pages and choose:

- Source: **Deploy from a branch**
- Branch: **gh-pages**
- Folder: **/(root)**
- Click **Save**

After GitHub reports a successful deployment, use the URL shown in Pages settings. The expected default project URL is https://novidave.github.io/Social-media-Manager-/; it is not a verified live deployment yet.

Reference: [GitHub Pages publishing sources](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

The connected tools can create source branches and upload files but do not expose a GitHub Pages enablement operation. That final repository setting must be applied in GitHub. Future source changes require rebuilding and updating the artifact branch; no automatic deployment workflow has been installed.

## Sites: registered, unpublished

A private Site was registered as `appgprj_6aef61008ec88191b09c24dd147df18c`. Its identity is retained in `.openai/hosting.json`. The Sites source workflow failed with **Unable to start Git** because Git is unavailable in the execution environment. No source was synchronized to that Site and no Site version was deployed.

Reuse this project ID if continuing the Sites workflow. Do not create a duplicate Site. The registration's expected URL is not proof of publication.

## Application scope

The deployed static build will provide the same tested local planning workflows. It stores records in the visitor's browser. It does not introduce a server database, authentication, automatic social publishing, real analytics, real AI, or shared team access.

Those capabilities require server implementation, storage and job infrastructure, provider developer/OAuth credentials, and supported API permissions. Buffer account inspection is still pending. See [implementation scope](IMPLEMENTATION.md) and [validation](VALIDATION.md).
