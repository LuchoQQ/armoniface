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

    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["via.placeholder.com"],
    },
    // add next bundle analyzer
    //...withBundleAnalyzer({}),
};

module.exports = nextConfig;
