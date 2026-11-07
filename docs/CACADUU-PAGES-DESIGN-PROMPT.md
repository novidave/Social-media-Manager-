# Design prompt for Cacaduu Pages

Copy everything inside the box below into Cacaduu Pages. It describes Social Studio's
fonts, colours and component style, and fixes the layout so it stays as it is now.
All values come from `src/styles.css`.

````text
Design a social media planning workspace called "Social Studio".
Use the exact font, style and layout below. Do not rearrange, add or remove layout regions.

━━ FONTS ━━
- Interface font: Inter (Google Fonts, weights 400–800), fallback -apple-system, "Segoe UI", sans-serif.
- Editorial accent font: Georgia, serif. Use it ONLY for illustration headlines, the home
  welcome heading, the Insights "takeaway" heading, the Start Page name and the italic
  word in the landing hero. Illustration headlines are Georgia italic.
- Base text 14px, line-height 1.5; paragraphs line-height 1.65.
- Page title (h1): 29px, weight 650, letter-spacing -1.1px, line-height 1.25.
- Section title (h2): 17px, weight 600, letter-spacing -0.4px.
- Body/post text 13px. Navigation 13px. Metadata 10–12px.
- Small uppercase labels: 10px, weight 600, letter-spacing 0.8px, muted sage grey.
- Logo wordmark "social studio": lowercase, 20px, weight 750, letter-spacing -1px, followed by
  a 7px round green dot (#749458). Logo mark: three stacked dark-green bars (#2d4137).

━━ COLOURS ━━
- Page background #fcfcfa (warm off-white). Panels, cards, sidebar, top bar #ffffff.
- Main text #242824. Secondary text #596650. Muted text #737972.
- Borders #e8eae4 (cards #e4e7dd), always 1px.
- Primary button: light green #b0ec95, 1px border #a8df91, dark-green text #233a2c, no shadow.
- Deep green accent #2d553c; selected tab underline #557c43; selected tab text #354e30.
- Selected nav item background #edf2e8, text #2f4932.
- Soft sage surfaces: #f4f5f0 (board columns), #f2f5eb (info banners), #eaf0dd (welcome banner).
- Status badges: queued #edf2e6 / #5a7146, draft #f1efea / #9a8c74, approval #fff3db / #967432.
- Illustration tiles: sage #e8ecdc with text #46563b; peach #f1e0d6 / #805e48; blue #dae4e8 / #4a6573.
- Channel icons: small filled rounded squares in the platform's colour with a white glyph.
- Focus ring: 3px #9aae7c, offset 3px.

━━ SHAPE AND DEPTH ━━
- Radius: buttons and inputs 6–7px, cards 9–10px, banners and dialogs 12–14px, tags 4px.
- Shadows almost invisible (e.g. 0 2px 4px rgba(42,61,26,0.01)). Separation comes from borders.
- Spacing scale: 4, 8, 12, 16, 24, 32, 40px. Calm, airy, generous white space.
- Buttons: min-height 38px, padding 9px 16px, weight 550. Secondary buttons white with a
  1px #dedfd8 border. Icons are thin outline glyphs.

━━ LAYOUT (keep exactly) ━━
Desktop shell:
1. Left sidebar, fixed, 248px wide, white, 1px right border, padding 28px 17px. Top to bottom:
   logo · workspace switcher card (square avatar, "My workspace" / "Personal workspace", chevron)
   · full-width "+ New post" primary button · nav: Your workspace, Create, Publish (with count),
   Community, Insights · "CHANNELS 3 +" label · "All channels" and one row per channel
   (icon, name, network, count) · "+ Add a demo channel" · pinned to bottom: Collaborate,
   Start Page, Settings, then a small note with a green dot.
2. Top bar, 69px high, white, 1px bottom border, padding 0 42px: breadcrumbs left
   ("Workspace / Publish"); right side: "Demo mode" pill, round "?" icon button, round avatar.
3. Main area, padding 37px 42px, max-width 1500px, centred.
   Page header row: h1 + one-line subtitle left; secondary + primary actions right.

Pages (same shell on every page):
- Publish: tabs Queue / Drafts / For approval / Sent, each with a small count chip; List | Calendar
  segmented toggle on the right; below, a search field ("Search content or tags") left and
  "All channels" select + "UTC" right. Queue column max-width 850px, centred: day heading
  ("Sunday, November 8" left, time right) then post cards. Post card: channel avatar + name +
  network, status badge top-right; post text; full-width illustration tile 258px high;
  tags; footer row with actions, separated by a 1px top border.
- Calendar view: 7-column month grid with a weekday header row, 125px-tall day cells,
  today shown as a filled green circle, posts as small sage chips with a green left border.
- Your workspace (home): large sage welcome banner (Georgia 36px heading, small uppercase
  eyebrow, tilted card illustration on the right), then a row of 3 equal stat cards.
- Create: idea board, 4 equal columns on sage #f4f5f0, white idea cards inside.
- Community: tabs, then a list of comment cards (round avatar, author + network, text, actions).
- Insights: two columns 2.3fr / 1fr: chart panel left, sage "takeaway" panel right; table below.
- Start Page: editor form left (1.2fr), phone-shaped preview right (1fr, 36px radius, white frame).
- Settings: two-column grid of white panels.
- Composer: centred modal dialog, max 660px wide, 32px padding, blurred backdrop.
- Landing page: nav row, centred sage hero with a very large Inter headline (up to 74px, weight 550,
  letter-spacing -3px) containing one Georgia italic word, then 4 feature cards.

Responsive (same structure, only narrower):
- ≤1150px: sidebar 220px, main padding 27px.
- ≤900px: sidebar 190px; Insights, Settings and Start Page become one column.
- ≤650px: sidebar hidden behind a menu button in the top bar (58px high); content full width
  with 19px side padding; calendar and board scroll horizontally inside their containers.

Tone: calm, editorial, friendly. Sentence case everywhere. Light theme only.
````

## Notes

- The prompt keeps the current layout and only describes styling that already exists in
  `src/styles.css`. If you change a token there, update this prompt to match.
- No Cacaduu brand assets were used. If you want Cacaduu's own fonts and colours instead,
  share them (or allow `cacaduu.com` in this session's network settings) and the FONTS and
  COLOURS sections can be swapped while LAYOUT stays the same.
