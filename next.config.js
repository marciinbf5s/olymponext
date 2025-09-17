const { randomBytes } = require('crypto');

const generateCsp = () => {
  const isDev = process.env.NODE_ENV === 'development';
  const nonce = randomBytes(16).toString('hex');
  
  const csp = [
    `default-src 'self';`,
    `script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval'" : ''} https: data:;`,
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

/** @type {import('next').NextConfig} */
const nextConfig = {
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
  generateBuildId() {
    return process.env.BUILD_ID || randomBytes(16).toString('hex');
  },
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Disable React DevTools in production
  productionBrowserSourceMaps: false,
  
  // Enable static exports for static site generation
  output: 'export',
  
  // Configure images
  images: {
    unoptimized: true, // Disable default Image Optimization API
  },
  
  // Webpack configuration
  webpack: (config, { isServer, dev }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      };
    }
    
    // Add support for .mjs files
    config.module.rules.push({
      test: /\.m?js$/,
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false,
      },
    });
    
    // Add fallback for Node.js core modules
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
    
    return config;
  }
};

module.exports = nextConfig;
