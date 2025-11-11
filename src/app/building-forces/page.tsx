"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import BuildingForces from "@/components/section/building-forces";

export default function BuildingForcesPage() {
	return (
		<div className="min-h-screen">
			<ScrollProgress className="top-[65px]" />
			<Header />
			<BuildingForces />
			<Footer />
		</div>
	);
}
