import { TICKETS_OPEN, TICKETS_URL, VENDORS_OPEN, VENDORS_URL } from "@/lib/site"

type Props = {
  children: React.ReactNode
  className?: string
  kind?: "tickets" | "vendors"
}

export function OutLink({ children, className, kind = "tickets" }: Props) {
  const href = kind === "vendors" ? VENDORS_URL : TICKETS_URL
  const open = kind === "vendors" ? VENDORS_OPEN : TICKETS_OPEN
  const ready = Boolean(href)

  if (!open) {
    return (
      <span
        className={`${className ?? ""} cursor-not-allowed opacity-70`.trim()}
        aria-disabled="true"
        title={kind === "vendors" ? "Exhibition registration has ended" : "Ticket sales have ended"}
      >
        {kind === "vendors" ? "Exhibition has ended" : "Ticket sales have ended"}
      </span>
    )
  }

  if (!ready) {
    return (
      <a href="#ticket-url-needed" className={className}>
        {children}
      </a>
    )
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  )
}
