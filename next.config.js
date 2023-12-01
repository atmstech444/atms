const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  optimizeFonts: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
