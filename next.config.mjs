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
        destination: 'https://3b1544049805.ngrok-free.app/:path*',
      },
    ];
  },
};

export default nextConfig;
