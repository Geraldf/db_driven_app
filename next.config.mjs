/** @type {import('next').NextConfig} */
import nextTranslate from "next-translate-plugin"

const nextConfig = {
  reactStrictMode: false,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false,
  },
}

export default nextConfig
