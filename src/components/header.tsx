"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigation = [
	{
		href: "/",
		label: "Trang chủ",
	},
	{
		href: "/mind-map",
		label: "Mind Map",
	},
	{
		href: "/quiz",
		label: "Q&A - Quiz",
	},
	{
		href: "/ai-usage",
		label: "AI Usage",
	},
];

export function Header() {
	const pathname = usePathname();

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-md border-b border-border">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					<Link href="/" className="font-serif text-xl font-bold">
						KTMT
					</Link>

					<div className="flex items-center gap-6">
						{navigation.map((item) => {
							const isActive = pathname === item.href;
							return (
								<Link
									key={item.href}
									href={item.href}
									className={cn(
										"text-sm font-medium transition-colors hover:text-primary",
										isActive ? "text-primary" : "text-muted-foreground"
									)}
								>
									{item.label}
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</nav>
	);
}
