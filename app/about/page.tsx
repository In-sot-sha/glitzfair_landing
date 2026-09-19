import Header from "@/components/header"
import Footer from "@/components/footer"
import { OutLink } from "@/components/out-link"
import { decade, site } from "@/lib/site"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The story — GlitzFair",
  description:
    "Bells Nigeria launched GlitzFair in April 2016 as Kano’s first standard family funfair and a marketplace for Northern Nigerian MSMEs.",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-[4.5rem]">
        <section className="bg-[var(--night)] py-20 text-white md:py-28">
          <div className="wrap">
            <p className="text-sm tracking-[0.16em] text-[var(--sun)] uppercase">Since April {site.founded}</p>
            <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.75rem,7vw,5rem)] leading-[0.95]">
              Kano’s first family funfair grew up in public.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/75">
              {site.organizer} built a room where a start-up could take a stall and a family could spend the day. Ten
              years later the brief is the same.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="wrap grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <img
              src="/25.jpg"
              alt="The GlitzFair marquee before the evening fills"
              className="w-full object-cover"
            />
            <div className="max-w-[62ch] space-y-5 text-[1.05rem] text-[var(--mute)]">
              <p>
                GlitzFair opened in April 2016 as a platform for marketing, networking, and capacity-building for
                start-up founders and MSME owners in Northern Nigeria. The design is simple on purpose: exhibition
                tables and cubicles, then a chance to meet the customer who was never going to find you online.
              </p>
              <p>
                It was the first standard family funfair in Kano State. Every edition still keeps a different section
                for products, a business masterclass, and rooms for children and other indoor and outdoor activities.
              </p>
              <p>
                The hall has hosted no fewer than 5,000 start-up founders and MSME owners as vendors. More than 30,000
                people have bought from those stalls during and after the fairs, to the tune of no less than 700
                million naira. Billboards, handbills, posters, and social media have carried the GlitzFair name — and
                its partners — to over 10 million people.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[var(--paper-2)] py-16 md:py-24">
          <div className="wrap">
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)]">A decade, year by year</h2>
            <ol className="mt-12 divide-y divide-[var(--line)]">
              {decade.map((entry) => (
                <li key={entry.year} className="grid gap-3 py-7 md:grid-cols-[6rem_1fr]">
                  <p className="font-display text-2xl text-[var(--brand)]">{entry.year}</p>
                  <div>
                    <h3 className="text-lg font-semibold">{entry.title}</h3>
                    <p className="mt-2 max-w-[65ch] text-[var(--mute)]">{entry.note}</p>
                  </div>
                </li>
              ))}
              <li className="grid gap-3 py-7 md:grid-cols-[6rem_1fr]">
                <p className="font-display text-2xl text-[var(--sun)]">{site.year}</p>
                <div>
                  <h3 className="text-lg font-semibold">{site.edition}</h3>
                  <p className="mt-2 max-w-[65ch] text-[var(--mute)]">
                    Ten years from the first April. Tickets and stall registration are on the other site. The
                    photographs stay here.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="wrap flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)]">Be in the tenth hall.</h2>
            <div className="flex flex-wrap gap-3">
              <OutLink className="btn btn-sun">Get tickets</OutLink>
              <OutLink kind="vendors" className="btn btn-brand">
                Exhibit
              </OutLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
