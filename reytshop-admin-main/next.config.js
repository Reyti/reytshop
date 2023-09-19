/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devServer: {
    hot: false,
  },
  babel: {
    presets: ["@babel/preset-react"], // Add this line
  },
};

module.exports = nextConfig;
