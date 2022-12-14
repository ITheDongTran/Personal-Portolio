/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        loader: "akamai",
        path: "",
    },
    basePath: "/nextjs-pages",
    assestPrefix: "/nextjs-pages",
};

module.exports = nextConfig;