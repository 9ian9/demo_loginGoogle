// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//     domains: ['photo.znews.vn'],
//   },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['photo.znews.vn'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://438829722f51.ngrok-free.app/:path*',
      },
    ];
  },
};

export default nextConfig;
