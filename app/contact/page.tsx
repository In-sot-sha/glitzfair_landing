import Header from "@/components/header"
import Footer from "@/components/footer"
import { OutLink } from "@/components/out-link"
import { site } from "@/lib/site"
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact — GlitzFair",
  description: "Talk to the GlitzFair team in Kano about the tenth anniversary, exhibiting, or press.",
}

const channels = [
  {
    href: site.phoneHref,
    label: "Call",
    value: site.phoneDisplay,
    note: "The fastest way to the organizers.",
    icon: Phone,
    external: false,
  },
  {
    href: site.whatsapp,
    label: "WhatsApp",
    value: site.phoneDisplay,
    note: "Same number. Message when you cannot call.",
    icon: MessageCircle,
    external: true,
  },
  {
    href: `mailto:${site.email}`,
    label: "Email",
    value: site.email,
    note: "Press, partners, and longer notes.",
    icon: Mail,
    external: false,
  },
  {
    href: site.instagram,
    label: "Instagram",
    value: site.instagramHandle,
    note: "Pictures from the hall, as they happen.",
    icon: Instagram,
    external: true,
  },
  {
    href: site.facebook,
    label: "Facebook",
    value: "theglitzfair",
    note: "Event posts and reminders.",
    icon: Facebook,
    external: true,
  },
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-[4.5rem]">
        <section className="relative overflow-hidden bg-[var(--night)] text-white">
          <img
            src="/34.jpg"
            alt="GlitzFair hosts in front of the welcome wall"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(12,18,40,0.78)_0%,rgba(12,18,40,0.42)_48%,rgba(12,18,40,0.18)_100%)]" />
          <div className="wrap relative grid min-h-[62dvh] items-end py-16 md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-24">
            <div>
              <p className="text-sm font-semibold tracking-[0.14em] text-[var(--sun)] uppercase">
                {site.city}
              </p>
              <h1 className="mt-3 max-w-xl font-display text-[clamp(2.75rem,7vw,4.75rem)] leading-[0.95]">
                Find the team behind the fair.
              </h1>
              <p className="mt-5 max-w-md text-lg text-white/80">
                Tickets and stall payments stay on the other site. This page is for the people who run GlitzFair.
              </p>
            </div>
            <p className="mt-8 flex items-start gap-3 text-sm text-white/75 md:mt-0 md:justify-self-end">
              <MapPin size={18} className="mt-0.5 shrink-0 text-[var(--sun)]" aria-hidden />
              <span>{site.venue}</span>
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="wrap grid items-start gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="font-display text-[clamp(1.85rem,3.5vw,2.75rem)] leading-[1.1]">
                Reach us the way that fits.
              </h2>
              <ul className="mt-10 divide-y divide-[var(--line)]">
                {channels.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="group flex items-start gap-4 py-5 text-[var(--ink)]"
                      >
                        <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center bg-[var(--paper-2)] text-[var(--brand)]">
                          <Icon size={20} aria-hidden />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-[var(--mute)]">{item.label}</span>
                          <span className="mt-1 block font-display text-[clamp(1.35rem,2.4vw,1.85rem)] leading-tight group-hover:text-[var(--brand)]">
                            {item.value}
                          </span>
                          <span className="mt-1 block text-sm text-[var(--mute)]">{item.note}</span>
                        </span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="bg-[var(--night)] p-7 text-white md:p-10">
              <h2 className="font-display text-[clamp(1.75rem,3vw,2.35rem)] leading-[1.1]">
                Send a note
              </h2>
              <p className="mt-3 text-sm text-white/70">
                Opens your mail app addressed to {site.email}. For a stall, register on the ticketing site instead.
              </p>
              <form className="mt-8 space-y-5" action={`mailto:${site.email}`} method="get">
                <label className="block">
                  <span className="text-sm font-semibold">Subject</span>
                  <input
                    name="subject"
                    required
                    className="mt-2 min-h-11 w-full border border-white/25 bg-white/10 px-3 py-3 text-white placeholder:text-white/70"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold">Message</span>
                  <textarea
                    name="body"
                    required
                    rows={7}
                    className="mt-2 w-full border border-white/25 bg-white/10 px-3 py-3 text-white placeholder:text-white/70"
                    placeholder="Write to the GlitzFair team"
                  />
                </label>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button type="submit" className="btn btn-sun">
                    Open email
                  </button>
                  <OutLink kind="vendors" className="btn btn-ghost text-white">
                    Exhibit instead
                  </OutLink>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
