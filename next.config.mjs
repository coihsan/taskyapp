/** @type {import('next').NextConfig} */
// import ("./ngrok.config.js");
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ucarecdn.com",
      },
    ],
  },
};

export default nextConfig;
