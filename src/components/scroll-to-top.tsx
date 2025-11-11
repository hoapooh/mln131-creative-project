"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			// Show button when page is scrolled down 300px
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<Button
			onClick={scrollToTop}
			className={cn(
				"fixed bottom-6 right-24 z-50 rounded-full size-16 shadow-lg transition-all duration-300",
				isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none"
			)}
			aria-label="Scroll to top"
		>
			<ArrowUp className="size-8" />
		</Button>
	);
}
