"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ExternalLink, Gamepad2, Brain, Sparkles } from "lucide-react";

const QuizPage = () => {
	const handlePadletClick = () => {
		window.open("https://padlet.com/hoaapse183311/vnr202-nh-m-6-6udkop8tvf8da16w", "_blank");
	};

	const handleGameKitClick = () => {
		window.open("https://www.gimkit.com/join", "_blank");
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
			<ScrollProgress className="top-[65px]" />
			<Header />
			<div className="max-w-4xl mx-auto py-20">
				{/* Header Section */}
				<div className="text-center mb-16">
					<div className="flex items-center justify-center gap-3 mb-4">
						<Brain className="w-8 h-8 text-indigo-600" />
						<h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
							Trung Tâm Học Tập Tương Tác
						</h1>
						<Sparkles className="w-8 h-8 text-purple-600" />
					</div>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Khám phá những trải nghiệm học tập tương tác được thiết kế để nâng cao kiến thức và kỹ
						năng của bạn
					</p>
				</div>

				{/* Main Content Grid */}
				<div className="grid md:grid-cols-2 gap-8">
					{/* Padlet Section */}
					<div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
						<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
						<div className="relative p-8">
							<div className="flex items-center gap-3 mb-6">
								<div className="p-3 rounded-2xl bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300">
									<ExternalLink className="w-6 h-6 text-blue-600" />
								</div>
								<h2 className="text-2xl font-semibold text-gray-800">Bảng Padlet Cộng Tác</h2>
							</div>

							<div className="mb-8">
								<h3 className="text-lg font-medium text-gray-700 mb-3">
									Tham Gia Bảng Thảo Luận Tương Tác
								</h3>
								<p className="text-gray-600 leading-relaxed">
									Tham gia học tập cộng tác thông qua không gian làm việc Padlet chung của chúng
									tôi. Chia sẻ ý tưởng, đặt câu hỏi và tương tác với bạn bè trong các cuộc thảo luận
									thời gian thực.
								</p>
							</div>

							<div className="space-y-4 mb-8">
								<div className="flex items-center gap-3 text-sm text-gray-600">
									<div className="w-2 h-2 bg-green-400 rounded-full"></div>
									<span>Cộng tác thời gian thực</span>
								</div>
								<div className="flex items-center gap-3 text-sm text-gray-600">
									<div className="w-2 h-2 bg-blue-400 rounded-full"></div>
									<span>Chia sẻ nội dung đa phương tiện</span>
								</div>
								<div className="flex items-center gap-3 text-sm text-gray-600">
									<div className="w-2 h-2 bg-purple-400 rounded-full"></div>
									<span>Thảo luận tương tác</span>
								</div>
							</div>

							<InteractiveHoverButton
								onClick={handlePadletClick}
								className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white border-0"
							>
								Truy Cập Bảng Padlet
							</InteractiveHoverButton>
						</div>
					</div>

					{/* GameKit Section */}
					<div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
						<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
						<div className="relative p-8">
							<div className="flex items-center gap-3 mb-6">
								<div className="p-3 rounded-2xl bg-purple-100 group-hover:bg-purple-200 transition-colors duration-300">
									<Gamepad2 className="w-6 h-6 text-purple-600" />
								</div>
								<h2 className="text-2xl font-semibold text-gray-800">Học Tập GameKit</h2>
							</div>

							<div className="mb-8">
								<h3 className="text-lg font-medium text-gray-700 mb-3">
									Trải Nghiệm Học Tập Game Hóa
								</h3>
								<p className="text-gray-600 leading-relaxed">
									Nâng cao việc học tập của bạn thông qua các trò chơi và thử thách tương tác. Kiểm
									tra kiến thức của bạn trong khi vui chơi với nền tảng giáo dục game hóa của chúng
									tôi.
								</p>
							</div>

							<div className="space-y-4 mb-8">
								<div className="flex items-center gap-3 text-sm text-gray-600">
									<div className="w-2 h-2 bg-green-400 rounded-full"></div>
									<span>Câu hỏi trắc nghiệm & trò chơi tương tác</span>
								</div>
								<div className="flex items-center gap-3 text-sm text-gray-600">
									<div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
									<span>Theo dõi tiến độ</span>
								</div>
								<div className="flex items-center gap-3 text-sm text-gray-600">
									<div className="w-2 h-2 bg-purple-400 rounded-full"></div>
									<span>Hệ thống thành tựu</span>
								</div>
							</div>

							<InteractiveHoverButton
								onClick={handleGameKitClick}
								className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white border-0"
							>
								Khởi Động GameKit
							</InteractiveHoverButton>
						</div>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="mt-16 text-center">
					<div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200">
						<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
						<span className="text-sm font-medium text-gray-700">
							Chọn cuộc phiêu lưu học tập của bạn ở trên
						</span>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default QuizPage;
