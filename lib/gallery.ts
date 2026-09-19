export type GalleryItem = {
  src: string
  alt: string
  year: number | "popup"
  title: string
}

export const galleryItems: GalleryItem[] = [
  {
    src: "/1.jpg",
    alt: "A guest in traditional dress sampling desserts at a GlitzFair stall",
    year: 2016,
    title: "First tastings",
  },
  {
    src: "/2.jpg",
    alt: "Guests in northern dress gathered around a stall table",
    year: 2017,
    title: "At the table",
  },
  {
    src: "/g5.jpg",
    alt: "A vendor team standing together behind handmade goods and foods",
    year: 2018,
    title: "The stall team",
  },
  {
    src: "/34.jpg",
    alt: "Two hosts in matching attire standing in front of the GlitzFair welcome backdrop",
    year: 2019,
    title: "You are welcome",
  },
  {
    src: "/6.jpg",
    alt: "Shoppers looking at jewellery and clothing at the Ramadan popup",
    year: "popup",
    title: "Ramadan popup",
  },
  {
    src: "/7.jpg",
    alt: "Outdoor grill station at the Ramadan popup",
    year: "popup",
    title: "Fire and suya",
  },
  {
    src: "/activity1.jpg",
    alt: "A speaker at the GlitzFair Founders lectern",
    year: 2022,
    title: "Founders stage",
  },
  {
    src: "/25.jpg",
    alt: "The GlitzFair marquee with chandeliers, yellow tablecloths, and the branded stage",
    year: 2021,
    title: "Under the canvas",
  },
  {
    src: "/29.jpg",
    alt: "Mannequins in cream kaftans on a fashion stand",
    year: 2022,
    title: "The rail",
  },
  {
    src: "/3.jpg",
    alt: "A vendor speaking with a customer at a household-goods stand",
    year: 2023,
    title: "On the stand",
  },
  {
    src: "/19.jpeg",
    alt: "Brand ambassadors at a circular product booth",
    year: 2023,
    title: "The booth",
  },
  {
    src: "/22.jpg",
    alt: "Pastries and cakes on a stall table with visitors tasting",
    year: 2023,
    title: "Sweet counter",
  },
  {
    src: "/23.jpeg",
    alt: "A packed GlitzFair hall looking down from the balcony",
    year: 2023,
    title: "The hall",
  },
  {
    src: "/glitzfair-exhibition-booths-vendors.jpg",
    alt: "Rows of exhibition booths with vendors and shoppers",
    year: 2023,
    title: "Aisles",
  },
  {
    src: "/audience-events-2023.jpg",
    alt: "Audience seated for a GlitzFair session",
    year: 2023,
    title: "The room listens",
  },
  {
    src: "/36.jpg",
    alt: "Young people gathered around an ice-pop cart",
    year: 2024,
    title: "After dark treats",
  },
  {
    src: "/f29c7c61-0f96-4be5-85ba-6e64868fbfd8.jpg",
    alt: "Young shoppers choosing jewellery at a fashion stall",
    year: 2024,
    title: "Choosing something",
  },
  {
    src: "/glitzfair-event-stage-excited-crowd.jpg",
    alt: "Crowd facing the GlitzFair stage",
    year: 2024,
    title: "Facing the stage",
  },
  {
    src: "/awards-ceremony-2023.jpg",
    alt: "Award moment on the GlitzFair stage",
    year: 2025,
    title: "A name called",
  },
  {
    src: "/vendor-exhibition-2023.jpg",
    alt: "Vendors arranging products on their stall",
    year: 2025,
    title: "Before doors open",
  },
  {
    src: "/glitzfair-event-exhibition-stage.jpg",
    alt: "Exhibition floor opening toward the main stage",
    year: 2025,
    title: "Floor to stage",
  },
  {
    src: "/creative.jpg",
    alt: "Hand-painted plates and bowls on a craft stall",
    year: 2020,
    title: "Made by hand",
  },
]

export const yearFilters = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025] as const
