/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Emit `route/index.html` instead of flat `route.html`. Next's export also
  // creates a `route/` directory for its segment-data files; without an
  // index.html inside it, Apache's DirectorySlash redirects /route → /route/
  // and serves a bare directory listing ("Index of /route/"). trailingSlash
  // puts index.html in every route folder so DirectoryIndex resolves it.
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  allowedDevOrigins: ["dell-precision-7740.tail76ac79.ts.net"],
};

module.exports = nextConfig;
