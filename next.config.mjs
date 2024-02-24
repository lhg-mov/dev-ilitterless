import {withSentryConfig} from "@sentry/nextjs";
/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/rbbgc18f/production/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/home',
        destination: '/',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/sign-up',
        destination: '/waiting',
        permanent: false,
      },
    ]
    return [
      {
        source: '/sign-up/i-cos',
        destination: '/waiting',
        permanent: false,
      },
    ]
    return [
      {
        source: '/sign-up/pml',
        destination: '/waiting',
        permanent: false,
      },
    ]
    return [
      {
        source: '/sign-up/goes-to-school',
        destination: '/waiting',
        permanent: false,
      },
    ]
    return [
      {
        source: '/sign-up/collaboration',
        destination: '/waiting',
        permanent: false,
      },
    ]
  },
};

export default withSentryConfig(nextConfig, {
// For all available options, see:
// https://github.com/getsentry/sentry-webpack-plugin#options

// Suppresses source map uploading logs during build
silent: true,
org: "ilitterless-indonesia",
project: "ilitterless-indonesia",
}, {
// For all available options, see:
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

// Upload a larger set of source maps for prettier stack traces (increases build time)
widenClientFileUpload: true,

// Transpiles SDK to be compatible with IE11 (increases bundle size)
transpileClientSDK: true,

// Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
tunnelRoute: "/monitoring",

// Hides source maps from generated client bundles
hideSourceMaps: true,

// Automatically tree-shake Sentry logger statements to reduce bundle size
disableLogger: true,

// Enables automatic instrumentation of Vercel Cron Monitors.
// See the following for more information:
// https://docs.sentry.io/product/crons/
// https://vercel.com/docs/cron-jobs
automaticVercelMonitors: true,
});