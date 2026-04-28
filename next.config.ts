import type { NextConfig } from 'next'
const config: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'images.unsplash.com' },
      { hostname: 'plus.unsplash.com' },
      { hostname: '2azfdphehc8ufmtf.public.blob.vercel-storage.com' },
    ],
  },
}
export default config
