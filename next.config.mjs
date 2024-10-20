import svgsConfig from "./svgs.config.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        api: process.env.NODE_ENV === "development" ? "http://localhost:5026/api" : "FILL_ME_IN",
        authApi:
            process.env.NODE_ENV === "development" ? "http://localhost:5027/auth" : "FILL_ME_IN",
        domain: "FILL_ME_IN",
    },
    images: {
        domains: ["localhost"],
    },
    webpack: svgsConfig,
};

export default nextConfig;
