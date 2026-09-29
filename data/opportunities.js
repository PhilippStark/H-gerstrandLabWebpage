/*
  Hägerstrand Lab — Calls, conferences & special issues
  ------------------------------------------------------
  This is the ONLY file you need to edit to update calls.html.

  • To REMOVE an item: delete its { ... } block (and the comma after it),
    or keep it but set  "hidden": true.
  • To ADD an item: copy an existing block and change the fields.
  • Items whose deadline has passed move to "Past deadlines" automatically —
    no need to delete them right away.

  Fields
    id          short unique slug (used for #links)
    type        "call" | "conference" | "special-issue"
    status      "open" | "upcoming" (opens later) | "rolling" | "watch" (not yet announced)
    title       name of the call / conference / special issue
    organizer   funder, society or journal
    url         official page (always link the source, never an aggregator)
    deadline    "YYYY-MM-DD" of the next relevant deadline, or null
    deadlineLabel  what the deadline is for, e.g. "Abstracts", "Pre-proposals"
    otherDates  optional list of further dates: [{ "label": "...", "date": "YYYY-MM-DD" }]
    opens       optional "YYYY-MM-DD" when the call opens
    eventDates  conferences: human-readable dates, e.g. "8–12 Feb 2027"
    location    conferences: city, country
    amount      calls: funding amount / scale
    eligibility who can apply (short)
    summary     1–2 sentences on what it is and why it fits the lab
    tags        a few keywords
    added       "YYYY-MM-DD" when it was added to this list
    hidden      optional true to hide without deleting
*/
window.HL_UPDATED = "2026-09-29";

window.HL_OPPORTUNITIES = [
  {
    "id": "aag-geoai-sessions-2027",
    "type": "conference",
    "status": "open",
    "title": "AAG 2027 GeoAI Symposium — call for sessions",
    "organizer": "American Association of Geographers · GeoAI Symposium organisers",
    "url": "https://giscience.psu.edu/2026/09/23/2027-aag-geoai-symposium-call-for-sessions/",
    "deadline": "2026-10-05",
    "deadlineLabel": "Session proposals",
    "eventDates": "8–12 Feb 2027",
    "location": "New York City, USA",
    "summary": "Organise a session within the GeoAI Symposium at AAG: foundation models, autonomous GIS, spatial bias, reproducibility and societal applications. Session descriptions go by email to the lead organisers.",
    "tags": ["GeoAI", "sessions", "AAG"],
    "added": "2026-09-29"
  },
  {
    "id": "erc-stg-2027",
    "type": "call",
    "status": "open",
    "title": "ERC Starting Grant 2027",
    "organizer": "European Research Council",
    "url": "https://erc.europa.eu/apply-grant/starting-grant",
    "deadline": "2026-10-14",
    "deadlineLabel": "Full proposals",
    "amount": "Up to €1.5M over 5 years",
    "eligibility": "Early-career PIs, typically 2–7 years after PhD (check the 2027 Work Programme)",
    "summary": "Europe's flagship frontier-research grant for early-career PIs. Contact LU Research Services at least one month before the deadline.",
    "tags": ["ERC", "early career", "EU"],
    "added": "2026-09-29"
  },
  {
    "id": "aag-2027",
    "type": "conference",
    "status": "open",
    "title": "AAG Annual Meeting 2027",
    "organizer": "American Association of Geographers",
    "url": "https://www.aag.org/events/aag2027/",
    "deadline": "2026-10-15",
    "deadlineLabel": "Abstracts",
    "otherDates": [
      { "label": "Session organising", "date": "2026-11-05" },
      { "label": "Abstract/session edits", "date": "2026-12-17" }
    ],
    "eventDates": "8–12 Feb 2027",
    "location": "New York City, USA",
    "summary": "The largest annual geography meeting, with strong GIScience, GeoAI and urban/computational tracks. Abstracts not placed in a session by 17 Dec become posters.",
    "tags": ["geography", "GIScience", "GeoAI"],
    "added": "2026-09-29"
  },
  {
    "id": "rj-research-initiation-2026",
    "type": "call",
    "status": "open",
    "title": "RJ Research Initiation 2026",
    "organizer": "Riksbankens Jubileumsfond",
    "url": "https://www.rj.se/en/funding/rj-research-initiation-2026/",
    "deadline": "2026-10-30",
    "deadlineLabel": "Final deadline",
    "amount": "From SEK 50,000",
    "eligibility": "Researchers in the humanities and social sciences with a Swedish connection",
    "summary": "Supports scholarly meetings — workshops, networks — that aim to generate new research. A natural fit for a lab workshop on computational human geography.",
    "tags": ["workshop", "networking", "Sweden"],
    "added": "2026-09-29"
  },
  {
    "id": "wasp-hs-ddls-initiation-2026",
    "type": "call",
    "status": "open",
    "title": "WASP-HS Research Initiation Grants: Data-Driven Life Sciences and Society 2026",
    "organizer": "WASP-HS",
    "url": "https://wasp-hs.org/open-call-research-initiation-grants-for-data-driven-life-sciences-and-society-2026/",
    "deadline": "2026-11-04",
    "deadlineLabel": "Applications",
    "amount": "SEK 2–4M per project (2–4 projects), 12 or 24 months",
    "eligibility": "PhD holders at a Swedish university",
    "summary": "Visionary projects on how AI, autonomous systems and data-driven approaches affect life sciences, medicine and society. Joint teams with data-driven life science researchers encouraged but not required.",
    "tags": ["AI and society", "WASP-HS", "data-driven"],
    "added": "2026-09-29"
  },
  {
    "id": "pufendorf-asg-2026",
    "type": "call",
    "status": "open",
    "title": "Pufendorf Institute — Advanced Study Groups",
    "organizer": "Pufendorf Institute for Advanced Studies, Lund University",
    "url": "https://pi.lu.se/en/about-pufendorf-ias/call-applications/call-applications-advanced-study-groups",
    "deadline": "2026-11-10",
    "deadlineLabel": "Applications (Feb start)",
    "otherDates": [ { "label": "Next round (Sept start)", "date": "2027-05-10" } ],
    "amount": "SEK 50,000 for activities; two semesters of monthly meetings",
    "eligibility": "Lund University PhD holders; interdisciplinary groups of 5–10",
    "summary": "A low-threshold way to gather an interdisciplinary group around a computational question — e.g. what 'computation' means across disciplines.",
    "tags": ["Lund", "interdisciplinary", "network"],
    "added": "2026-09-29"
  },
  {
    "id": "wasp-hs-postdocs-us-2026",
    "type": "call",
    "status": "open",
    "title": "WASP-HS Postdoctoral Scholarships at Stanford and MIT",
    "organizer": "WASP-HS",
    "url": "https://wasp-hs.org/calls/",
    "deadline": "2026-11-16",
    "deadlineLabel": "Applications",
    "eligibility": "Early-career researchers in the humanities and social sciences (see each call)",
    "summary": "Several postdoc scholarships at Stanford and MIT on AI and society themes — agentic AI, autonomous systems in society, AI futures of culture and memory. Worth passing on to recent PhDs.",
    "tags": ["postdoc", "WASP-HS", "mobility"],
    "added": "2026-09-29"
  },
  {
    "id": "dut-call-2026",
    "type": "call",
    "status": "open",
    "title": "Driving Urban Transitions (DUT) Call 2026",
    "organizer": "DUT Partnership (European co-funded partnership)",
    "url": "https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/opportunities/competitive-calls-cs/15122",
    "deadline": "2026-11-17",
    "deadlineLabel": "Pre-proposals",
    "otherDates": [ { "label": "Full proposals", "date": "2027-04-15" } ],
    "amount": "Transnational consortia; national funders cover their own partners",
    "eligibility": "Consortia from ≥ 3 participating countries (Sweden eligible — check which Swedish funder takes part)",
    "summary": "Research and innovation on urban transitions: 15-minute city, circular urban economies and positive energy districts. Relevant for mobility data and urban analytics work.",
    "tags": ["urban", "mobility", "EU partnership"],
    "added": "2026-09-29"
  },
  {
    "id": "rspp-future-of-cohesion",
    "type": "special-issue",
    "status": "open",
    "title": "Special issue: The Future of Cohesion",
    "organizer": "Regional Science Policy & Practice",
    "url": "https://www.sciencedirect.com/special-issue/336587/the-future-of-cohesion",
    "deadline": "2027-01-14",
    "deadlineLabel": "Manuscripts",
    "eligibility": "Guest editors: Andrés Rodríguez-Pose, Andrea Caragliu",
    "summary": "How cohesion policy can address territorial inequalities and resilience. A home for register-data and regional-disparity work, including policy implementation analysis.",
    "tags": ["regional inequality", "policy", "journal"],
    "added": "2026-09-29"
  },
  {
    "id": "icwsm-2027",
    "type": "conference",
    "status": "open",
    "title": "ICWSM 2027 — International AAAI Conference on Web and Social Media",
    "organizer": "AAAI",
    "url": "https://www.icwsm.org/2027/submit/",
    "deadline": "2027-01-15",
    "deadlineLabel": "Papers (final cycle)",
    "eventDates": "2027 (dates TBA)",
    "location": "Edinburgh, UK",
    "summary": "Core computational social science venue for text, media and platform data — fits the lab's large-scale media analysis. Deadline taken from a deadline tracker; confirm on the official page.",
    "tags": ["CSS", "text analysis", "social media"],
    "added": "2026-09-29"
  },
  {
    "id": "rsa-2027",
    "type": "conference",
    "status": "open",
    "title": "Regional Studies Association Annual Conference 2027",
    "organizer": "Regional Studies Association",
    "url": "https://www.regionalstudies.org/events/2027ac/",
    "deadline": "2027-01-28",
    "deadlineLabel": "Abstracts",
    "otherDates": [ { "label": "Special session proposals", "date": "2027-01-14" } ],
    "eventDates": "8–11 Jun 2027",
    "location": "Madrid, Spain",
    "summary": "\"Connecting Regions, Bridging Knowledge\" — innovation, digitalisation, regional inequalities and transitions. Good venue for knowledge-spillover and industrial-change work.",
    "tags": ["regional studies", "economic geography", "Europe"],
    "added": "2026-09-29"
  },
  {
    "id": "giscience-2027",
    "type": "conference",
    "status": "open",
    "title": "GIScience 2027",
    "organizer": "International Conference on Geographic Information Science",
    "url": "https://geods.github.io/GIScience2027/",
    "deadline": "2027-01-29",
    "deadlineLabel": "Full papers",
    "otherDates": [
      { "label": "Workshop proposals", "date": "2027-02-12" },
      { "label": "Short papers", "date": "2027-04-02" },
      { "label": "Abstracts & demos", "date": "2027-05-14" }
    ],
    "eventDates": "18–22 Oct 2027",
    "location": "Shanghai, China (Tongji University)",
    "summary": "Theme: \"GeoAI and Multi-Sensing for a Sustainable Future\". The main biennial GIScience conference, held in Asia for the first time.",
    "tags": ["GIScience", "GeoAI", "remote sensing"],
    "added": "2026-09-29"
  },
  {
    "id": "crafoord-research-2027",
    "type": "call",
    "status": "upcoming",
    "title": "Crafoord Foundation — scientific research grants",
    "organizer": "Crafoordska stiftelsen",
    "url": "https://www.crafoord.se/ansok/ansok-nu/vetenskaplig-forskning/",
    "opens": "2026-12-15",
    "deadline": "2027-02-04",
    "deadlineLabel": "Applications",
    "amount": "Mainly 1-year projects (some 2-year)",
    "eligibility": "Researchers at Lund University and other southern Swedish HEIs",
    "summary": "Regional foundation with a comparatively high success rate — suited to seed funding for pilots, data acquisition or a first computational project.",
    "tags": ["Lund", "seed funding", "Sweden"],
    "added": "2026-09-29"
  },
  {
    "id": "vr-hs-project-2027",
    "type": "call",
    "status": "upcoming",
    "title": "Swedish Research Council — Project grant, humanities & social sciences",
    "organizer": "Vetenskapsrådet (VR)",
    "url": "https://www.vr.se/english/applying-for-funding/calls.html",
    "deadline": null,
    "deadlineLabel": "Expected Jan–Feb 2027",
    "amount": "SEK 0.4–1.7M per year, 1–4 years (last round)",
    "eligibility": "PhD holders at Swedish HEIs",
    "summary": "The main national project call. Last round ran 7 Jan – 10 Feb 2026; the 2027 dates are not published yet — start planning now.",
    "tags": ["VR", "project grant", "Sweden"],
    "added": "2026-09-29"
  },
  {
    "id": "agile-2027-lund",
    "type": "conference",
    "status": "upcoming",
    "title": "AGILE 2027 — hosted in Lund",
    "organizer": "AGILE (Association of Geographic Information Laboratories in Europe) & ISDE",
    "url": "https://agile-gi.eu/conference-2027/call-for-papers-2027/call-for-papers-2027",
    "deadline": null,
    "deadlineLabel": "Deadlines TBA (see Important Dates)",
    "eventDates": "21–24 Jun 2027",
    "location": "Lund, Sweden (Lund University)",
    "summary": "Europe's GIScience conference comes to Lund: \"Spatial Intelligence and Digital Earth for Sustainable Future\". Full/short papers, posters, published-article and education tracks. A chance to host a lab workshop at home.",
    "tags": ["GIScience", "Lund", "workshop"],
    "added": "2026-09-29"
  },
  {
    "id": "wasp-hs-project-initiation",
    "type": "call",
    "status": "rolling",
    "title": "WASP-HS Project Initiation Grants",
    "organizer": "WASP-HS",
    "url": "https://wasp-hs.org/open-call-for-wasp-hs-project-initiation-grants/",
    "deadline": null,
    "deadlineLabel": "Rolling",
    "amount": "SEK 50,000–500,000 for six months",
    "eligibility": "At least two applicants from two different disciplines",
    "summary": "Small, fast grants to lay the groundwork for larger applications in AI, autonomous systems and society.",
    "tags": ["seed funding", "WASP-HS", "AI and society"],
    "added": "2026-09-29"
  },
  {
    "id": "vr-explorative-breakthrough-2027",
    "type": "call",
    "status": "watch",
    "title": "Swedish Research Council — Exploratory grant for breakthrough research",
    "organizer": "Vetenskapsrådet (VR)",
    "url": "https://www.vr.se/5.370d38eb19e634f163a9069.html",
    "deadline": null,
    "deadlineLabel": "Next call expected spring 2027 (2026 round closed 29 Sep)",
    "amount": "SEK 1M per year for 2 years; best projects can apply for a longer continuation grant",
    "eligibility": "PhD 2–12 years; must have won ≥ SEK 2M external funding as PI (ongoing or ended from 2024). Up to 6 co-researchers",
    "summary": "Lets researchers test a potentially transformative idea over a short period — all fields, with scientific risk-taking explicitly welcomed. Rolling submission while the call is open; applications in English.",
    "tags": ["VR", "high-risk", "Sweden"],
    "added": "2026-09-29"
  },
  {
    "id": "ic2s2-2027",
    "type": "conference",
    "status": "watch",
    "title": "IC2S2 2027 — International Conference on Computational Social Science",
    "organizer": "ISCSS",
    "url": "https://ic2s2-2026.org/",
    "deadline": null,
    "deadlineLabel": "Not yet announced (abstracts usually due Feb–Mar)",
    "eventDates": "Usually July",
    "location": "TBA",
    "summary": "The main international CSS meeting (2025 was in Norrköping). We will add dates as soon as the 2027 call is out.",
    "tags": ["CSS", "international"],
    "added": "2026-09-29"
  },
  {
    "id": "cs2nordics-2027",
    "type": "conference",
    "status": "watch",
    "title": "CS2Nordics 2027 — Nordic Conference on Computational Social Science",
    "organizer": "Nordic Society for Computational Social Science",
    "url": "https://nosocss.org/conference.html",
    "deadline": null,
    "deadlineLabel": "Not yet announced",
    "location": "Nordics (TBA)",
    "summary": "The Nordic CSS community's own conference — the first edition ran in Copenhagen in September 2026.",
    "tags": ["CSS", "Nordic", "community"],
    "added": "2026-09-29"
  }
];
