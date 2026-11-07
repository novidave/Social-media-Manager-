# Buffer feature inventory

Research date: 2026-11-07. Source: Buffer's public product pages, public product illustrations, and pricing. “Documented” means publicly advertised, not implemented here or confirmed inside the supplied account. Account entitlements, error states, and integration outcomes remain unverified.

## Create

Public documentation describes an idea library with editable content, categorization through tags, board/gallery presentation, planning stages, templates, and conversion into channel content. It also describes media imports, RSS gathering, browser-extension capture, and AI-assisted ideation and repurposing.

This repository implements a local board, tags, stage movement, text editing, and idea-to-post conversion. Gallery, templates, imports from external tools, RSS, and extension capture remain gaps.

Source: [Create](https://buffer.com/create).

## Publish

The public presentation includes a shared composition workflow, channel-specific content, recurring slots, channel time zones, next-slot or custom-date scheduling, and draft management. Calendar examples include week/month views, channel/tag/type filtering, dragging to reschedule, and direct editing. Some formats use notifications to complete posting on the native network.

The broader comparison lists queue rearrangement, duplication/shuffle, shortened links, groups, reusable hashtags, threads, first comments, and video covers; support differs by platform and plan.

This repository implements local drafts/queue, multiple channel selection, editing/duplication, image preview, text search, channel filtering, and a draggable month calendar. It uses the browser time zone; it has no recurring queue worker or automatic publishing.

Source: [Publish](https://buffer.com/publish), [feature comparison](https://buffer.com/pricing).

## Community

The product page describes a central comment workspace, channel/date filtering, unanswered sorting, notifications, direct or native-network responses, saved replies, suggested replies, and conversion of conversations into content. A comment score presents response habits.

The page explicitly labels **Comment insights as “Coming soon.”** That is an announcement, not proof of released functionality.

The local implementation has sample conversations, local reply editing, completion filters, and comment-to-idea conversion. Real ingestion, delivery, saved reply management, scoring, and suggestions are not implemented.

Source: [Community](https://buffer.com/community).

## Insights

The public page describes combined and channel-specific performance views, post comparisons, audience changes, metric explanations, export/report controls, synchronization information, and recommendations tied to content decisions. Metrics and access vary by network and account.

The local view uses fixed, clearly labelled sample metrics and chart data with a sample CSV export. No data is retrieved from a social platform.

Source: [Insights](https://buffer.com/insights).

## Collaboration

The public workflow includes team invitations, permissions, content review, approval/return for revision, notes, and shared planning. The repository supplies local team records and review-state transitions. No invitations, shared storage, enforced roles, or real-time updates exist.

Source: [Collaborate](https://buffer.com/collaborate).

## Start Page

The public product describes a mobile-oriented destination with customizable themes, colors, typography, content blocks, links, embedded content, and traffic/click reporting. The local builder supports text, colors, links, a preview, and a standalone HTML download. Hosted pages, form handling, media/embed blocks, and analytics remain unimplemented.

Source: [Start Page](https://buffer.com/start-page).

## AI Assistant

Documented operations include generating ideas/copy, rewriting, shortening/expanding, tone adjustment, and platform adaptation. Their internal prompts, model, latency, and account limits were not observed. This repository does not invoke an AI service.

Source: [AI Assistant](https://buffer.com/ai-assistant).

## Channels, integrations, and developer access

The public navigation lists Instagram, Facebook, TikTok, LinkedIn, X, YouTube, Threads, Pinterest, Google Business Profile, Bluesky, Mastodon, and Substack. A network appearing here does not establish uniform format, analytics, or comment support.

The directory includes design/media services, automation tools, and agent connections. Examples include Canva, Dropbox, Google services, Zapier, n8n, ChatGPT, and Claude. Developer documentation provides supported API authentication and reference material.

The local channel picker includes these network names as planning profiles only.

Sources: [Buffer](https://buffer.com/), [integrations](https://buffer.com/integrations), [developer documentation](https://developers.buffer.com/).

## Plans and account features

The public pricing page lists Free, Essentials, and Team. Its Free summary describes three channels, ten queued posts per channel, a hundred ideas, and a single user. Paid plans expand capacity; Team includes approval/access workflows. The comparison also references analytics/reporting, link parameters, account security, and content utilities. Exact prices, quotas, and entitlements must be rechecked before implementing billing.

The repository implements no subscriptions, billing, entitlement enforcement, two-factor authentication, or account administration.

Source: [Pricing](https://buffer.com/pricing).

## Coverage boundary

This is a broad public inventory, not an exhaustive extraction of every private Buffer feature. Further verification requires an authenticated browser session, account/plan inspection, platform-specific composers, upload errors, account settings, onboarding, empty states, and permission boundaries.

