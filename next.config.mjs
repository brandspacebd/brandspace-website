/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    experimental: {
        turbopackFileSystemCacheForDev: true,
    },
};

export default nextConfig;
