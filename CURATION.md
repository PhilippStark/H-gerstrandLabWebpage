# Calls & Conferences — curation guide

The page `calls.html` renders everything from **one file: `data/opportunities.js`**.
Nothing on the site updates itself; every item is added by hand after checking the official page.

## Quick edits (by hand)

- **Remove** an item: delete its `{ ... }` block in `data/opportunities.js` (mind the comma), or set `"hidden": true`.
- **Add** an item: copy an existing block, change the fields, keep the date format `YYYY-MM-DD`.
- Update `window.HL_UPDATED` to today's date after a review.
- Past deadlines move to the collapsed "Past deadlines" section automatically; clean them out every few months.

## With Claude

- **Add from a link:** paste the call/conference URL and say "add this to the calls page". Claude reads the official page, fills in the fields, shows you the entry, and pushes once you confirm.
- **Remove:** "remove the ICWSM item" (or several at once).
- **Weekly scan:** a scheduled task searches for new candidates every week and posts a shortlist. You reply with what to keep (e.g. "keep 1, 3, 5"); only then is the file updated and pushed.

## What fits the list

The lab does not define "computational" narrowly — anything with a family resemblance to computational work in human geography and the social sciences belongs here. Typical anchors:

- computational social science, GeoAI, GIScience, spatial data science
- satellite / remote sensing for social science (SESAC), mobility and register data
- AI-supported text analysis (quantitative, qualitative, mixed methods), media analysis
- regional / economic geography, industrial change, knowledge spillovers, urban analytics
- Swedish and Lund-specific funders (VR, Forte, Formas, RJ, WASP-HS, Crafoord, Pufendorf, AI Lund), ERC and EU partnerships
- Nordic and European meetings (CS2Nordics, AGILE, NGM, RSA, ERSA), plus AAG, IC2S2, GIScience, ICWSM

Always link the **official** page, not an aggregator. If a deadline is only found on an aggregator, say so in the summary.

## Fields

| field | notes |
|---|---|
| `id` | short unique slug, e.g. `aag-2027` |
| `type` | `call`, `conference`, `special-issue` |
| `status` | `open`, `upcoming` (opens later), `rolling`, `watch` (not yet announced) |
| `title`, `organizer`, `url` | required |
| `deadline` | next relevant deadline `YYYY-MM-DD`, or `null` |
| `deadlineLabel` | what the deadline is for ("Abstracts", "Pre-proposals"), or a text like "Expected Jan–Feb 2027" when `deadline` is null |
| `otherDates` | `[{ "label": "...", "date": "YYYY-MM-DD" }]` |
| `opens` | date the call opens (for `upcoming`) |
| `eventDates`, `location` | conferences |
| `amount`, `eligibility` | calls (for special issues, `eligibility` holds the guest editors) |
| `summary` | 1–2 sentences: what it is + why it fits the lab |
| `tags`, `added`, `hidden` | optional |

---

# Current research (front page)

The rotating "Current research" panel above *01 — About the Lab* reads from **`data/research.js`**. Newest item first; with two or more items it rotates every 9 seconds and pauses on hover.

- **Add:** copy the existing block, change the fields (title, authors, date, a 2–3 sentence plain-language summary, optional one-line takeaway, links). Put the figure in `images/research/` and point `image` at it.
- **Remove:** delete the block or set `"hidden": true`.
- **Tags & links:** give each item a few `tags`. Every tag is clickable and has its own link, e.g. `index.html#research/tag/earth-observation`, which shows only items with that tag. Each item also has a permanent link, `index.html#research/<id>` (the "Copy link" button), handy for news posts, emails or slides. Keep the `id` unchanged once shared.
- **With Claude:** paste an arXiv/journal link (and ideally the PDF) and say "add this to current research". Claude writes the short summary, picks a figure from the paper, and shows you the entry before it goes in.
