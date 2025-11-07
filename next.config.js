/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "images.unsplash.com",
        }, ],
    },
    reactStrictMode: true, // ✅ recommended for better dev checks
};

module.exports = nextConfig;