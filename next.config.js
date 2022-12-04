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

  images: {
      // for mock images
    domains: ['api.lorem.space']
  },
}

module.exports = nextConfig
