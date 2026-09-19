import Header from "@/components/header"
import Footer from "@/components/footer"
import { OutLink } from "@/components/out-link"
import { site, VENDORS_OPEN } from "@/lib/site"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Exhibit — GlitzFair",
  description:
    "Take a stall at GlitzFair. Registration and payment live on the ticketing site. This page is what exhibiting is.",
}

export default function ExhibitPage() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-[4.5rem]">
        <section className="relative min-h-[70dvh] overflow-hidden bg-[var(--night)] text-white">
          <img
            src="/3.jpg"
            alt="A vendor speaking with a customer at a GlitzFair stall"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,18,40,0.88)_0%,rgba(12,18,40,0.45)_100%)]" />
          <div className="wrap relative flex min-h-[70dvh] flex-col justify-end py-16">
            <h1 className="max-w-2xl font-display text-[clamp(2.75rem,7vw,4.75rem)] leading-[0.95]">
              {VENDORS_OPEN ? "Bring the stall. We bring the hall." : "Exhibition registration has ended."}
            </h1>
            <p className="mt-5 max-w-lg text-lg text-white/80">
              {VENDORS_OPEN
                ? "Cubicles and tables for MSMEs. Registration is on the other site — the same place tickets are sold."
                : "Stall booking for this edition is closed. Call or write if you need help with an existing booking."}
            </p>
            <OutLink kind="vendors" className="btn btn-sun mt-8 w-fit">
              Register to exhibit
            </OutLink>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="wrap grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl md:text-4xl">What you get</h2>
              <ul className="mt-8 space-y-5 text-[var(--mute)]">
                <li>A table or cubicle in a hall that already knows how to shop.</li>
                <li>Chairs, covers, and power as listed on the vendor terms for that edition.</li>
                <li>A room that mixes your customers with families who came for the day.</li>
                <li>The GlitzFair name on a decade of Kano billboards, posters, and phones.</li>
              </ul>
            </div>
            <img src="/19.jpeg" alt="A branded booth on the GlitzFair floor" className="w-full object-cover" />
          </div>
        </section>

        <section className="bg-[var(--paper-2)] py-16 md:py-24">
          <div className="wrap max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl">
              {VENDORS_OPEN ? "How stall booking works now" : "Registration is closed"}
            </h2>
            <p className="mt-5 text-[var(--mute)]">
              {VENDORS_OPEN
                ? "We no longer take vendor forms on this website. Choose a stall, pay, and receive your confirmation on the ticketing site. If you need an account opened or have a category question, call or write — then finish registration there."
                : "Exhibition registration for this edition has ended. Existing vendors should keep their confirmation from the ticketing site. For questions, use the contact page."}
            </p>
            <p className="mt-4 text-sm text-[var(--mute)]">Typical home: {site.venue}.</p>
            <OutLink kind="vendors" className="btn btn-brand mt-8">
              Continue to registration
            </OutLink>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
