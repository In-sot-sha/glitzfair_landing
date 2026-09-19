/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/vendors", destination: "/exhibit", permanent: true },
      { source: "/vendor-registration", destination: "/exhibit", permanent: true },
      { source: "/vendor-dashboard", destination: "/exhibit", permanent: true },
      { source: "/find-tickets", destination: "/", permanent: false },
      { source: "/checkout", destination: "/", permanent: false },
      { source: "/my-ticket", destination: "/", permanent: false },
      { source: "/event-details", destination: "/", permanent: false },
      { source: "/events", destination: "/", permanent: false },
      { source: "/events/:id", destination: "/", permanent: false },
    ]
  },
}

export default nextConfig
