# GlitzFair Landing

Public 10th-anniversary site for GlitzFair (Kano). Marketing and gallery only — tickets and stall registration go to the external ticketing URL.

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

## Env

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_TICKETS_URL` | Ticket sales link |
| `NEXT_PUBLIC_VENDORS_URL` | Vendor registration link (falls back to tickets URL) |
| `NEXT_PUBLIC_TICKETS_END` | Close ticket CTAs after this date, or `closed` / `ended` / `now` |
| `NEXT_PUBLIC_VENDORS_END` | Close exhibition CTAs the same way |

Leave the `*_END` vars empty while sales / registration are open.
