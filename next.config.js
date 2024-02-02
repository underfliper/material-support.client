/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/profile', destination: '/profile/about', permanent: true },
      {
        source: '/manage',
        destination: '/manage/categories',
        permanent: true,
      },
      {
        source: '/applications',
        destination: '/applications/under-review',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
