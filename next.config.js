/** @type {import('next').NextConfig} */
const debug = require("debug");
const { i18n } = require("./next-i18next.config");
const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const repo = "https://cliffclimber-721.github.io/nofreelunch";
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: !debug ? `/${repo}/` : "",
  eslint: { ignoreDuringBuilds: true },
  i18n: {
    locales: ["en", "ko"],
    defaultLocale: "ko",
  },
  images: {
    domains: ["storage.googleapis.com"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = withPlugins([withBundleAnalyzer], nextConfig);
