/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.punkapi.com"],
    disableStaticImages: true
  }

}


module.exports = withPlugins([[withImages]], nextConfig)
