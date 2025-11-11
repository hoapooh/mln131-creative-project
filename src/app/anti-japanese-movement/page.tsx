import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import AntiJapaneseMovement from "@/components/section/anti-japanese-movement";

export default function AntiJapaneseMovementPage() {
	return (
		<div className="min-h-screen">
			<ScrollProgress className="top-[65px]" />
			<Header />
			<AntiJapaneseMovement />
			<Footer />
		</div>
	);
}
