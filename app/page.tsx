import Header from "@/components/header"
import Footer from "@/components/footer"
import { OutLink } from "@/components/out-link"
import Link from "next/link"
import { impact, site, decade } from "@/lib/site"
import { galleryItems } from "@/lib/gallery"

const preview = galleryItems.filter((item) =>
  ["/23.jpeg", "/34.jpg", "/22.jpg", "/g5.jpg", "/29.jpg", "/36.jpg"].includes(item.src),
)

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-[var(--night)] text-white">
          <img
            src="/23.jpeg"
            alt="A packed GlitzFair hall seen from the balcony"
            className="absolute inset-0 h-full w-full object-cover object-[center_72%]"
          />
          <div className="absolute inset-0 bg-black/15" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,12,32,0.78)_0%,rgba(8,12,32,0.28)_40%,rgba(8,12,32,0.08)_100%)]" />

          <div className="wrap relative flex min-h-[22rem] flex-col justify-end pb-8 pt-24 md:min-h-[40rem] md:pb-14 md:pt-28 lg:min-h-[44rem]">
            <div className="max-w-xl">
              <img
                src="/anniversary-logo-on-dark.png"
                alt="GlitzFair Anniversary Edition"
                className="settle h-auto w-[min(14.5rem,68vw)] drop-shadow-[0_10px_22px_rgba(0,0,0,0.45)]"
                width={1024}
                height={586}
              />
              <h1 className="settle settle-2 mt-5 font-display text-[clamp(1.6rem,3.4vw,2.35rem)] leading-[1.12]">
                Ten years of the Kano fair.
              </h1>
              <p className="settle settle-3 mt-3 max-w-md text-[1.05rem] leading-relaxed text-white/90">
                Kano’s first family funfair. A hall of MSMEs, a day for families, and a decade of people who came back.
              </p>
              <div className="settle settle-3 mt-6 flex flex-wrap gap-3">
                <OutLink className="btn btn-sun">Get tickets</OutLink>
                <Link href="/gallery" className="btn btn-ghost text-white">
                  Gallery
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--night)] text-white">
          <div className="wrap flex gap-6 overflow-x-auto py-5 text-sm text-white/60 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {decade.map((entry, i) => (
              <span key={entry.year} className="flex shrink-0 items-baseline gap-6">
                <span className={i === decade.length - 1 ? "text-[var(--sun)]" : ""}>{entry.year}</span>
                {i < decade.length - 1 && <span aria-hidden className="text-white/25">—</span>}
              </span>
            ))}
            <span className="flex shrink-0 items-baseline gap-6">
              <span aria-hidden className="text-white/25">
                —
              </span>
              <span className="font-display text-xl text-[var(--sun)]">{site.year}</span>
            </span>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="wrap grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] text-[var(--ink)]">
                A stall. A shopper. A family day.
              </h2>
              <p className="mt-6 max-w-[62ch] text-[var(--mute)]">
                Bells Nigeria built GlitzFair so start-up founders and MSME owners in Northern Nigeria could meet
                customers in one room. Exhibition cubicles sit beside masterclasses, fashion rails, food, and space for
                children. It was the first standard family funfair in Kano. It is still the one people name.
              </p>
              <Link href="/about" className="mt-8 inline-block font-semibold text-[var(--brand)]">
                Read the story
              </Link>
            </div>
            <figure className="overflow-hidden">
              <img
                src="/34.jpg"
                alt="Hosts in front of the GlitzFair welcome wall"
                className="aspect-[4/5] w-full object-cover"
              />
            </figure>
          </div>
        </section>

        <section className="bg-[var(--paper-2)] py-20 md:py-28">
          <div className="wrap">
            <h2 className="max-w-xl font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05]">
              What fills the marquee
            </h2>
            <div className="mt-12 grid gap-px bg-[var(--line)] md:grid-cols-2">
              {[
                {
                  title: "The stalls",
                  copy: "Tables and cubicles for MSMEs to show product, take orders, and meet the person who will come back next week.",
                  image: "/g5.jpg",
                  alt: "Vendor team behind their stall",
                },
                {
                  title: "The stage",
                  copy: "Business masterclasses and founder talks in the same building as the shopping — capacity-building with a queue outside.",
                  image: "/activity1.jpg",
                  alt: "Speaker at the GlitzFair Founders lectern",
                },
                {
                  title: "The rail",
                  copy: "Designers and cloth sellers share the floor with jewellery, crafts, and the brands that grew up at this fair.",
                  image: "/29.jpg",
                  alt: "Fashion mannequins in cream kaftans",
                },
                {
                  title: "The table",
                  copy: "Cooking, tasting, and the outdoor grill. Families come for the day and leave with bags and a full stomach.",
                  image: "/22.jpg",
                  alt: "Pastry stall at GlitzFair",
                },
              ].map((item) => (
                <article key={item.title} className="grid bg-[var(--paper)] sm:grid-cols-2">
                  <img src={item.image} alt={item.alt} className="h-56 w-full object-cover sm:h-full" />
                  <div className="flex flex-col justify-center p-7">
                    <h3 className="font-display text-2xl">{item.title}</h3>
                    <p className="mt-3 text-[0.95rem] text-[var(--mute)]">{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--night)] py-20 text-white md:py-24">
          <div className="wrap">
            <p className="text-sm text-[var(--sun)]">From the first seven years, still true</p>
            <ul className="mt-10 grid gap-10 sm:grid-cols-2">
              {impact.map((item) => (
                <li key={item.value} className="border-t border-white/15 pt-5">
                  <p className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-none text-[var(--sun)]">
                    {item.value}
                  </p>
                  <p className="mt-3 max-w-sm text-[0.95rem] text-white/70">{item.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="wrap flex items-end justify-between gap-6">
            <h2 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05]">
              Gallery · 10 years
            </h2>
            <Link href="/gallery" className="hidden shrink-0 font-semibold text-[var(--brand)] sm:inline">
              Open gallery
            </Link>
          </div>
          <div className="wrap-wide mt-10 grid grid-cols-2 gap-2 md:grid-cols-3">
            {preview.map((item) => (
              <Link key={item.src} href="/gallery" className="group relative overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="crop-hover aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <span className="absolute bottom-3 left-3 text-xs font-medium text-white drop-shadow">
                  {item.year === "popup" ? "Popup" : item.year} · {item.title}
                </span>
              </Link>
            ))}
          </div>
          <div className="wrap mt-8 sm:hidden">
            <Link href="/gallery" className="font-semibold text-[var(--brand)]">
              Open gallery
            </Link>
          </div>
        </section>

        <section className="border-t border-[var(--line)] py-20 md:py-24">
          <div className="wrap grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05]">
                {site.edition}. Come for the day.
              </h2>
              <p className="mt-5 max-w-[50ch] text-[var(--mute)]">
                Tickets and stall bookings live on our ticketing site. This page is the invitation. That page is the
                door.
              </p>
              <p className="mt-4 text-sm text-[var(--mute)]">{site.venue}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <OutLink className="btn btn-sun">Get tickets</OutLink>
              <OutLink kind="vendors" className="btn btn-brand">
                Register to exhibit
              </OutLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
