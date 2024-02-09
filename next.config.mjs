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
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
        // https://res.cloudinary.com/dfsqlevmm/image/upload/v1707251795/testimonail-avatar/ooeeygxhfycvuichccjf.png"
      },
    ],
  },
};

export default nextConfig;
