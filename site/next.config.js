/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Kasm-Workspaces',
    description: 'Third party Kasm Workspaces registry for general use.',
    icon: 'https://masseysan.github.io/Kasm-Workspaces/1.1/icon_shell.png',
    listUrl: 'https://masseysan.github.io/Kasm-Workspaces/',
    contactUrl: 'https://github.com/masseysan/Kasm-Workspaces/issues',
  },
  reactStrictMode: true,
  basePath: '/Kasm-Workspaces/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
