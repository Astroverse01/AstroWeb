import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'astro-ways.s3.ap-south-1.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 's3.ap-south-1.amazonaws.com',
        // this one shows up in your payload:
        // https://s3.ap-south-1.amazonaws.com/astro-ways.ai/UAT/ASTRO/...
        pathname: '/astro-ways.ai/**',
      },
    ],
    // OPTIONAL: if you’re doing a full static export and don’t want optimization
    // unoptimized: true,
  },
};

export default withNextIntl(nextConfig);


