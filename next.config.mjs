/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["avatars.githubusercontent.com"],

    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
