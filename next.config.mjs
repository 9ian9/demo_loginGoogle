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
<<<<<<< HEAD
        destination: 'https://3b1544049805.ngrok-free.app/:path*',
=======
        destination: 'https://438829722f51.ngrok-free.app/:path*',
>>>>>>> 4ce212e7a867e5de64ef945e383e32ae0f213826
      },
    ];
  },
};

export default nextConfig;
