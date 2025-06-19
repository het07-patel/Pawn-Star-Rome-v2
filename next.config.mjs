/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        turbo: {
            rules: {
                "*.mp4": {
                    loaders: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "[name].[hash].[ext]",
                            },
                        },
                    ],
                },
            },
        },
    },
    reactStrictMode: false,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
