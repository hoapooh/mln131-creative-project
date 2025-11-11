"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import HistoricalSignificance from "@/components/section/historical-significance";

export default function HistoricalSignificancePage() {
	return (
		<div className="min-h-screen">
			<ScrollProgress className="top-[65px]" />
			<Header />
			<HistoricalSignificance />
			<Footer />
		</div>
	);
}
