import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const beVietnamPro = Be_Vietnam_Pro({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800", "900"],
	variable: "--font-be-vietnam-pro",
	display: "swap",
});

/* const lacoFont = localFont({
	src: "../fonts/La-Co-1.0-Demo.ttf",
	variable: "--font-laco",
	display: "swap",
}); */

export const metadata: Metadata = {
	title: "Gia đình Việt Nam 4.0",
	description: "Nền tảng kiến thức và công cụ hỗ trợ phát triển kỹ năng số cho gia đình Việt Nam trong thời đại 4.0.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${beVietnamPro.variable} antialiased font-sans`}>
				<ScrollProgress className="top-[65px]" />
				<Header />
				{children}
				<Footer />
				<ScrollToTop />
				{/* eslint-disable-next-line @next/next/no-sync-scripts */}
				<script src="https://cdn.botpress.cloud/webchat/v3.3/inject.js"></script>
				<script src="https://files.bpcontent.cloud/2025/09/15/03/20250915030247-R30TMPXR.js" defer></script>
			</body>
		</html>
	);
}
