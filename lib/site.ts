/**
 * Single place to point tickets and vendor signup at the other site.
 * Set NEXT_PUBLIC_TICKETS_URL (and optionally NEXT_PUBLIC_VENDORS_URL).
 *
 * End sales / registration with NEXT_PUBLIC_TICKETS_END and NEXT_PUBLIC_VENDORS_END:
 * - leave empty while open
 * - ISO date/datetime (e.g. 2026-03-20 or 2026-03-20T18:00:00+01:00) to close after that moment
 * - closed | ended | now | true | 1 to close immediately
 */
export const TICKETS_URL =
  process.env.NEXT_PUBLIC_TICKETS_URL ?? ""

export const VENDORS_URL =
  process.env.NEXT_PUBLIC_VENDORS_URL ?? TICKETS_URL

function parseEnd(value: string | undefined): Date | null {
  if (!value?.trim()) return null
  const v = value.trim().toLowerCase()
  if (v === "closed" || v === "ended" || v === "now" || v === "true" || v === "1") {
    return new Date(0)
  }
  const date = new Date(value.trim())
  return Number.isNaN(date.getTime()) ? null : date
}

function isOpen(endEnv: string | undefined) {
  const end = parseEnd(endEnv)
  if (!end) return true
  return Date.now() < end.getTime()
}

export const TICKETS_OPEN = isOpen(process.env.NEXT_PUBLIC_TICKETS_END)
export const VENDORS_OPEN = isOpen(process.env.NEXT_PUBLIC_VENDORS_END)

export const site = {
  name: "GlitzFair",
  tagline: "Business · Family · Fun",
  edition: "Anniversary Edition",
  year: 2026,
  founded: 2016,
  organizer: "Bells Nigeria",
  city: "Kano, Nigeria",
  venue: "Afficent Grand Marquee, Magajin Rumfa, Nassarawa, Kano",
  email: "info@glitzfair.com",
  phoneDisplay: "0806 259 9299",
  phoneHref: "tel:+2348062599299",
  whatsapp: "https://wa.me/2348062599299",
  instagram: "https://www.instagram.com/theglitzfair",
  facebook: "https://www.facebook.com/theglitzfair",
  instagramHandle: "@theglitzfair",
} as const

export const impact = [
  { value: "5,000+", label: "start-up founders and MSME owners hosted as vendors" },
  { value: "30,000+", label: "people who have shopped the stalls" },
  { value: "₦700m+", label: "in trade during and after the fairs" },
  { value: "10m+", label: "people reached across billboards, print, and social" },
] as const

export const decade = [
  {
    year: 2016,
    title: "The first fair",
    note: "Bells Nigeria launches GlitzFair in April. Kano gets its first standard family funfair — stalls for MSMEs, and a day out for families.",
  },
  {
    year: 2017,
    title: "A date on the calendar",
    note: "Vendors return. Shoppers start asking when the next fair is. The mix holds: business, family, fun.",
  },
  {
    year: 2018,
    title: "The hall fills",
    note: "More cubicles, more categories, more children in the aisles. GlitzFair becomes a Northern Nigerian habit.",
  },
  {
    year: 2019,
    title: "Masterclass years",
    note: "The floor still sells. The stage starts teaching — business sessions beside the stalls.",
  },
  {
    year: 2020,
    title: "Held, then held again",
    note: "A hard year everywhere. The fair keeps a light on for vendors who need a room full of customers.",
  },
  {
    year: 2021,
    title: "Back in the marquee",
    note: "Crowds return. Fashion rails, food counters, and founder talks share the same evening.",
  },
  {
    year: 2022,
    title: "Founders on stage",
    note: "The GlitzFair Founders programme sits beside the exhibition. Capacity-building is no longer a side room.",
  },
  {
    year: 2023,
    title: "Two hundred stalls",
    note: "The 8th edition lands at Afficent Grand Marquee, Magajin Rumfa. Talks, shopping, and a packed hall.",
  },
  {
    year: 2024,
    title: "Still the first, still improving",
    note: "A three-day October edition. Same promise: a stall, a shopper, a family day in Kano.",
  },
  {
    year: 2025,
    title: "The ninth chapter",
    note: "Nine fairs in. The archive is long enough to fill a wall. The tenth year is already in view.",
  },
] as const
