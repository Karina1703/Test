/** @type {import('next').NextConfig} */
const nextConfig = {
	async headers() {
    return [
      {
        source: '/next.svg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'max-age=300000',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
