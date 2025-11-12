"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bot, Home, Image, Network, PuzzleIcon } from "lucide-react";

const navigation = [
	{
		href: "/",
		label: "Trang chủ",
		icon: Home,
	},
	{
		href: "/mind-map",
		label: "Mind Map",
		icon: Network,
	},
	{
		href: "/gallery",
		label: "Thư viện ảnh",
		icon: Image,
	},
	{
		href: "/ai-usage",
		label: "AI Usage",
		icon: Bot,
	},
	{
		href: "/puzzle",
		label: "Puzzle",
		icon: PuzzleIcon,
	},
];

export function Header() {
	const pathname = usePathname();

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-md border-b border-border">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					<Link
						href="/"
						className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent hover:from-emerald-700 hover:to-teal-700 transition-all"
					>
						Gia đình 4.0
					</Link>

					<div className="flex items-center gap-6">
						{navigation.map((item) => {
							const isActive = pathname === item.href;
							return (
								<Link
									key={item.href}
									href={item.href}
									className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
										isActive ? "bg-emerald-50 text-emerald-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
									}`}
								>
									<item.icon className="size-4" />
									<span className="inline">{item.label}</span>
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</nav>
	);
}
