/** @type {import('next').NextConfig} */
// create nextconfig with next bundle analyzer
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

/* const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["via.placeholder.com"],
    },
    // add next bundle analyzer
    ...withBundleAnalyzer({}),
}; */

const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "http://armoniface.com/:path*",
            },
        ];
    },
    async headers() {
        return [
            {
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    {
                        key: "Access-Control-Allow-Methods",
                        value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
                    },
                    {
                        key: "Access-Control-Allow-Headers",
                        value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
                    },
                ],
            },
        ];
    },
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["via.placeholder.com"],
    },
    // add next bundle analyzer
    //...withBundleAnalyzer({}),
};

module.exports = nextConfig;
