/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
    appDir: true,
    fontLoaders: [
      {
        loader: '@next/font/google',
        options: { subsets: ['latin'] },
      },
    ],
  },

  // images: {
  //   domains: [""],
  // },

  // allaw all images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

export default nextConfig
