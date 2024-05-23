/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    additionalData: '@import "@/styles/main.scss";'
  },
  images: {
    domains: ['ifh.cc', 'i.ibb.co']
  }
}

export default nextConfig
