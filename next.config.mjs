/** @type {import('next').NextConfig} */
// import { withHydrationOverlay } from "@builder.io/react-hydration-overlay/next";
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

// export default withHydrationOverlay({
//   /**
//    * Optional: `appRootSelector` is the selector for the root element of your app. By default, it is `#__next` which works
//    * for Next.js apps with pages directory. If you are using the app directory, you should change this to `main`.
//    */
//   appRootSelector: "main",
// })(nextConfig);
export default nextConfig;
