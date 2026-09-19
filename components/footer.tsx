import Link from "next/link"
import { OutLink } from "@/components/out-link"
import { site } from "@/lib/site"

export default function Footer() {
  return (
    <footer className="bg-[var(--night)] text-white">
      <div className="wrap grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <img
            src="/logo-on-dark.png"
            alt="GlitzFair"
            className="h-12 w-auto"
            width={200}
            height={64}
          />
          <p className="mt-5 max-w-sm text-[0.95rem] text-white/75">
            Kano’s first family funfair. Ten years of stalls, masterclasses, and a hall that still fills.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <OutLink className="btn btn-sun">Get tickets</OutLink>
            <OutLink kind="vendors" className="btn btn-ghost text-white">
              Exhibit
            </OutLink>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold">In this house</p>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li>
              <Link href="/about" className="hover:text-white">
                The story
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-white">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/exhibit" className="hover:text-white">
                Exhibit
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold">Find us</p>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li>{site.city}</li>
            <li>
              <a href={site.phoneHref} className="hover:text-white">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {site.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap flex flex-col gap-2 border-t border-white/15 py-6 text-xs text-white/50 sm:flex-row sm:justify-between">
        <p>
          © {site.year} GlitzFair · {site.organizer}
        </p>
        <p>{site.tagline}</p>
      </div>
    </footer>
  )
}
