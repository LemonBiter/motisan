/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/unidoor',
        destination: '/products/unidoor',
        permanent: true,
      },
      {
        source: '/steel-clad-door',
        destination: '/products/unidoor',
        permanent: true,
      },
      {
        source: '/metal-protective-film',
        destination: '/products/metal-protective-film',
        permanent: true,
      },
      {
        source: '/donga-door-outswing',
        destination: '/products/donga-door-outswing',
        permanent: true,
      },
      {
        source: '/donga-door-inswing',
        destination: '/products/donga-door-inswing',
        permanent: true,
      },
      {
        source: '/insulated-sectional-door',
        destination: '/products/insulated-sectional-door',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/contact-2',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/services-2',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service-details',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/about-4',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/gallery',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/portfolio',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/faqs',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/blog-electrician-v1',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
