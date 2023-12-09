/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build',
    images: {
        domains: ["cdn-icons-png.flaticon.com", "cloud.appwrite.io"],
        unoptimized: true
    },
}

module.exports = nextConfig
