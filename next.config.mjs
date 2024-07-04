const isProd = process.env.NODE_ENV === 'production'

export default {
  assetPrefix: isProd ? '/my-next-app/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
}