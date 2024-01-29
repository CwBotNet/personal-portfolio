/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
          test: /\.glb$/,
          use: {
            loader: 'file-loader',
            options: {
              outputPath: 'static/models', // Adjust output path if needed
            },
          },
        });
    
        return config;
    }
}

module.exports = nextConfig
