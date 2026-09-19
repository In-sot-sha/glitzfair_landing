"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { OutLink } from "@/components/out-link"

const nav = [
  { href: "/about", label: "The story" },
  { href: "/gallery", label: "Gallery" },
  { href: "/exhibit", label: "Exhibit" },
  { href: "/contact", label: "Contact" },
]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="fixed top-0 z-40 w-full bg-[var(--paper)] shadow-[0_1px_0_var(--line)]">
      <div className="wrap flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
        <Link href="/" className="relative flex h-7 w-[5.75rem] shrink-0 items-center" aria-label="GlitzFair home">
          <img
            src="/logo.png"
            alt="GlitzFair"
            className="h-full w-full object-contain object-left"
            width={92}
            height={28}
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium text-[var(--ink)] ${
                pathname === item.href ? "opacity-100" : "opacity-70 hover:opacity-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <OutLink className="btn btn-sun">Get tickets</OutLink>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center text-[var(--ink)] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="wrap flex flex-col gap-1 pb-5 md:hidden" aria-label="Mobile">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="py-3 text-base font-medium text-[var(--ink)]">
              {item.label}
            </Link>
          ))}
          <OutLink className="btn btn-sun mt-2 w-full">Get tickets</OutLink>
        </nav>
      )}
    </header>
  )
}
