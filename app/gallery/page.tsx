"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { galleryItems, yearFilters } from "@/lib/gallery"
import { useEffect, useMemo, useState, type ReactNode } from "react"
import { X } from "lucide-react"

type Filter = "all" | "popup" | number

export default function GalleryPage() {
  const [filter, setFilter] = useState<Filter>("all")
  const [open, setOpen] = useState<number | null>(null)

  const items = useMemo(() => {
    if (filter === "all") return galleryItems
    return galleryItems.filter((item) => item.year === filter)
  }, [filter])

  const active = open !== null ? items[open] : null

  useEffect(() => {
    if (open === null) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-[4.5rem]">
        <section className="bg-[var(--night)] py-16 text-white md:py-24">
          <div className="wrap">
            <p className="font-display text-[clamp(3.5rem,12vw,5.5rem)] leading-none text-[var(--sun)]">
              10 years
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.02]">
              Gallery
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/75">
              2016 — 2026. Filter by year, or stay with the whole archive — including the Ramadan popup.
            </p>
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="wrap">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Gallery years">
              <FilterChip active={filter === "all"} onClick={() => setFilter("all")}>
                All years
              </FilterChip>
              {yearFilters.map((year) => (
                <FilterChip key={year} active={filter === year} onClick={() => setFilter(year)}>
                  {year}
                </FilterChip>
              ))}
              <FilterChip active={filter === "popup"} onClick={() => setFilter("popup")}>
                Ramadan popup
              </FilterChip>
            </div>

            <div className="mt-10 columns-1 gap-2 sm:columns-2 lg:columns-3">
              {items.map((item, index) => (
                <button
                  key={`${item.src}-${item.title}`}
                  type="button"
                  className="group mb-2 block w-full cursor-pointer overflow-hidden text-left"
                  onClick={() => setOpen(index)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="crop-hover w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <span className="mt-2 flex justify-between text-sm text-[var(--mute)]">
                    <span>{item.title}</span>
                    <span>{item.year === "popup" ? "Popup" : item.year}</span>
                  </span>
                </button>
              ))}
            </div>

            {items.length === 0 && (
              <p className="py-16 text-[var(--mute)]">No frames for that year yet. Try another chapter.</p>
            )}
          </div>
        </section>
      </main>
      <Footer />

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center text-white"
            onClick={() => setOpen(null)}
            aria-label="Close"
          >
            <X size={26} />
          </button>
          <figure className="max-h-[90vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={active.alt} className="max-h-[80vh] w-full object-contain" />
            <figcaption className="mt-4 text-center text-white">
              {active.title}
              <span className="text-white/60">
                {" "}
                · {active.year === "popup" ? "Ramadan popup" : active.year}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  )
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`min-h-11 cursor-pointer px-3 text-sm font-medium ${
        active ? "bg-[var(--night)] text-white" : "bg-[var(--paper-2)] text-[var(--ink)] hover:bg-[var(--line)]"
      }`}
      aria-pressed={active}
    >
      {children}
    </button>
  )
}
