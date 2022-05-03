/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/my',
        destination: '/my/dashboard',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
