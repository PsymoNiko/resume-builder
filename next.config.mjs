/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Ensure this property is supported in your Next.js version
  allowedDevOrigins: [
    'http://192.168.50.11:3000', // Replace with your actual development URL
    'http://localhost:3000',
    'http://localhost:8000',
  ],
}

export default nextConfig;
