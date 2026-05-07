# Kuha — content schema reference

This file explains the frontmatter fields for each content type.
Copy the relevant template when creating a new entry.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FRAGMENT ENTRY  →  src/content/fragments/your-entry-name.md
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

---
title:    "Your title"
type:     "your type"
date:     "yyyy-MM-dd"
update:     "yyyy-MM-dd" # for sourcing website update info
excerpt:  "One sentence shown in listings."
region:   "region-name"
period:   "period-name"
composed: "composed-period"
tags:
  - your-tag
related:
  - other-fragment-slug
journalPost:
  slug:  "journal-post-slug"
  title: "Journal post title"
image:   "./image-name.jpg"
---

Your text here. Full Markdown supported.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REGIONS  →  src/content/world/your-entry-name.md
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


---
title:        "Your title"
type:         "region"        # region, geography, civilisation, timeline etc.
date:         "2026-03-15"
update:     "yyyy-MM-dd" # for sourcing website update info
excerpt:      "One sentence shown in listings."
parentRegion: "urath-delta"   # id of parent region entry — omit for world-level entries
image:        "./image.jpg"
icon: "/images/your-icon.png"   # small 70px symbol or emblem
tags:
  - your-tag
---

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WORLD ENTRY  →  src/content/world/your-entry-name.md
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

---
title:    "The Northern Reaches"
type:     "region"                        # region, timeline, map
date:     "2025-03-01"
update:     "yyyy-MM-dd" # for sourcing website update info
excerpt:  "A short description for listings."
tags:
  - geography
  - north
---

Your text here.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
JOURNAL POST  →  src/content/journal/your-post-name.md
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

---
title:   "On designing the river clans"
date:    "2025-03-10"                     # publication date
update:     "yyyy-MM-dd" # for sourcing website update info
excerpt: "A short sentence shown in the journal listing."
relatedFragments:
  - the-oath-of-the-river-clans           # slugs of fragments you mention
  - river-clan-territories
---

Your post here. This is the one place your authorial voice appears.
