import { randomBytes } from 'crypto';
import type { NextConfig } from "next";

const generateCsp = () => {
  const isDev = process.env.NODE_ENV === 'development';
  const nonce = randomBytes(16).toString('hex');
  
  const csp = [
    `default-src 'self';`,
    `script-src 'self' ${isDev ? "'unsafe-inline' 'unsafe-eval'" : `'nonce-${nonce}'`} https:;`,
    `style-src 'self' 'unsafe-inline' https: data:;`,
    `img-src 'self' data: https:;`,
    `font-src 'self' data:;`,
    `connect-src 'self' https:;`,
    `frame-src 'self';`,
    `media-src 'self' data:;`,
    `object-src 'none';`,
    `base-uri 'self';`,
    `form-action 'self';`,
    `frame-ancestors 'none';`,
    `upgrade-insecure-requests;`
  ];

  return {
    nonce,
    csp: csp.join(' ')
  };
};

const nextConfig: NextConfig = {
  async headers() {
    const { csp } = generateCsp();
    
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: csp
          }
        ]
      }
    ];
  },
  // Adiciona o nonce ao documento
  async generateBuildId() {
    return process.env.BUILD_ID || randomBytes(16).toString('hex');
  },
  // Adiciona o nonce ao documento HTML
  async generateStaticParams() {
    return {
      props: {
        cspNonce: generateCsp().nonce,
      },
    };
  },
  // Configura o middleware para injetar o nonce
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify/browser'),
        path: require.resolve('path-browserify'),
      };
    }
    return config;
  },
};

export default nextConfig;
