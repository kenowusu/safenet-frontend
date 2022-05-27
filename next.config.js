/** @type {import('next').NextConfig} */



/* set useFileSystemPublicRoutes to 'false' when using shared hosting' */

module.exports = {
  reactStrictMode: true,
  useFileSystemPublicRoutes: process.env.useFileSystemPublicRoutes,
  typescript: {

    ignoreBuildErrors: true,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}


