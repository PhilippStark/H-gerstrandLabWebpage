/*
  Hägerstrand Lab — Current research (rotating panel on the front page)
  ---------------------------------------------------------------------
  This is the ONLY file you need to edit to update the "Current research" panel.

  • Newest first: the first item is shown first.
  • To ADD an item: copy a block, change the fields.
  • To REMOVE an item: delete its { ... } block (mind the comma) or set "hidden": true.
  • With two or more items the panel rotates by itself (pauses on hover).
  • Every item can be linked directly:  index.html#research/<id>

  Fields
    id           short unique slug
    kind         e.g. "Preprint", "Article", "Report", "Dataset", "Software"
    venue        e.g. "arXiv · cs.LG", journal name
    date         "YYYY-MM-DD" (publication / submission date)
    title        full title
    authors      list of names
    summary      2–3 sentences in plain language (shorter than the abstract)
    takeaway     optional one-line key message
    image        path or URL to a figure (a local file in images/research/ is best)
    imageAlt     description of the figure for screen readers
    imageCaption optional short caption shown under the figure
    tags         list of topic tags, e.g. ["Earth observation", "GeoAI"] — each tag gets a link
                 (index.html#research/tag/earth-observation) that shows only items with that tag
    links        list of { "label": "...", "url": "..." } — first one is the main button
*/
window.HL_RESEARCH = [
  {
    "id": "frozen-eo-embeddings-wildfires",
    "kind": "Preprint",
    "venue": "arXiv · cs.LG",
    "date": "2026-09-28",
    "title": "When local gains fail to transfer: Frozen Earth-observation embeddings across wildfires",
    "authors": ["Philipp Stark", "Alexandros Sopasakis", "Ola Hall"],
    "summary": "Earth observation is becoming increasingly important for wildfire monitoring and risk management, offering large-scale information that can support prevention, response and recovery. This study shows both the potential and the limits of the next generation of EO models: across six wildfire events in Greece and Spain, we used foundation-model embeddings from TESSERA and AlphaEarth to distinguish areas that later burned from surrounding unburned areas. TESSERA and AlphaEarth perform strongly locally, but much of their advantage disappears across regions. Crucially, a small amount of local data can restore that advantage, and one mapped fire may help identify susceptibility to a later nearby fire—pointing toward locally adapted EO models that could eventually help target monitoring and preventive resources before future fires occur.",
    "tags": ["Earth observation", "GeoAI", "Wildfire", "Machine learning", "Transferability"],
    "takeaway": "Every evaluation of a frozen embedding should report a held-out region.",
    "image": "images/research/2609.34602-fig3.jpg",
    "imageAlt": "Maps of sampled burned and control pixels, ESA WorldCover land-cover classes and a three-dimensional colour visualisation of TESSERA embeddings for the Rhodes and Evros fires in Greece.",
    "imageCaption": "Two 2023 wildfires in Greece: Rhodes (top) and Evros (bottom). Left: sampled pixels, burned land inside the fire (red) and unburned control land more than 500 m away (grey). Middle: land cover before the fire (ESA WorldCover). Right: three TESSERA embedding dimensions shown as colour, the representation the models learn from.",
    "links": [
      { "label": "Read on arXiv", "url": "https://arxiv.org/abs/2609.34602" },
      { "label": "PDF", "url": "https://arxiv.org/pdf/2609.34602" },
      { "label": "HTML version", "url": "https://arxiv.org/html/2609.34602v1" },
      { "label": "DOI", "url": "https://doi.org/10.48550/arXiv.2609.34602" }
    ]
  }
];
