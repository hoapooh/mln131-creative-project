import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "hoanghamobile.com",
				port: "",
				pathname: "/tin-tuc/**",
			},
			{
				protocol: "https",
				hostname: "maboophoto.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "phunuvietnam.mediacdn.vn",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "congstudio.com.vn",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
