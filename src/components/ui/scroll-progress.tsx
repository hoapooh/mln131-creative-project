"use client";

import { motion, MotionProps, useScroll } from "motion/react";

import { cn } from "@/lib/utils";

interface ScrollProgressProps extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {
	ref?: React.Ref<HTMLDivElement>;
}

export function ScrollProgress({ className, ref, ...props }: ScrollProgressProps) {
	const { scrollYProgress } = useScroll();

	return (
		<motion.div
			ref={ref}
			className={cn(
				"fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-gradient-to-r from-red-500 via-red-400 to-yellow-500",
				className
			)}
			style={{
				scaleX: scrollYProgress,
			}}
			{...props}
		/>
	);
}
