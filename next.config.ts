import { NextConfig } from "next";
import NodePolyfillPlugin from "node-polyfill-webpack-plugin";

const nextConfig: NextConfig = {
  webpack(config) {
    // Adicionando o plugin para lidar com módulos internos do Node.js
    config.plugins.push(new NodePolyfillPlugin());

    // Fallback para desabilitar a resolução de módulos do Node.js no lado do cliente
    config.resolve.fallback = {
      ...config.resolve.fallback,
      child_process: false, // Ignorar o módulo 'child_process'
      fs: false, // Ignorar o módulo 'fs'
      path: false, // Ignorar o módulo 'path'
      os: false, // Ignorar o módulo 'os'
      crypto: false, // Ignorar o módulo 'crypto'
      stream: false, // Ignorar o módulo 'stream'
    };

    return config;
  },
};

export default nextConfig;
