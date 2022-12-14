/** @type {import('next').NextConfig} */
const debug = require("debug");
const { i18n } = require("./next-i18next.config");
const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const repo = "https://mijin6060.github.io/NoFreeLunch";
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: !debug ? `/${repo}/` : "",
  eslint: { ignoreDuringBuilds: true },
  i18n,
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
