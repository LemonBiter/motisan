/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/unidoor',
        destination: '/products/unidoor',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig