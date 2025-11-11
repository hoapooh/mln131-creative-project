"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import { ArrowLeft, Star, Globe, BookOpen, Trophy } from "lucide-react";
import VN from "country-flag-icons/react/3x2/VN";

export default function HistoricalSignificance() {
	const handleBackButtonClick = () => {
		window.history.back();
	};
	return (
		<div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
			{/* Header */}
			<div className="relative bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white py-20 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-green-600/90 via-blue-600/90 to-purple-600/90"></div>
				<div className="absolute -right-40 -top-40 w-80 h-80 bg-white/10 rounded-full"></div>
				<div className="absolute -left-20 -bottom-20 w-60 h-60 bg-white/5 rounded-full"></div>
				<div className="absolute right-20 bottom-10 w-40 h-40 bg-white/5 rounded-full"></div>

				<div className="relative z-10 max-w-6xl mx-auto px-6">
					<Button
						variant="ghost"
						className="mb-8 text-white hover:bg-white/20 border-white/30"
						onClick={handleBackButtonClick}
					>
						<ArrowLeft className="w-4 h-4 mr-2" />
						Quay lại
					</Button>

					<div className="text-center space-y-6">
						<div className="flex items-center justify-center gap-6 mb-6">
							<VN className="w-20 h-14 rounded shadow-2xl animate-pulse" />
							<div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
								<Star className="w-10 h-10 text-white" />
							</div>
							<VN className="w-20 h-14 rounded shadow-2xl animate-pulse" />
						</div>
						<h1 className="text-5xl md:text-6xl font-bold mb-4">Ý nghĩa Lịch sử</h1>
						<h2 className="text-3xl md:text-4xl font-semibold text-white/90">
							và Bài học Kinh nghiệm
						</h2>
						<p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
							Của Cách mạng Tháng Tám 1945
						</p>

						<div className="flex items-center justify-center gap-8 mt-8">
							<div className="flex flex-col items-center w-48">
								<div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-2">
									<Globe className="w-8 h-8 text-white" />
								</div>
								<span className="text-white/80 text-sm">Tầm quan trọng toàn cầu</span>
							</div>
							<div className="flex flex-col items-center w-48">
								<div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-2">
									<BookOpen className="w-8 h-8 text-white" />
								</div>
								<span className="text-white/80 text-sm">Bài học kinh nghiệm</span>
							</div>
							<div className="flex flex-col items-center w-48">
								<div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-2">
									<Trophy className="w-8 h-8 text-white" />
								</div>
								<span className="text-white/80 text-sm">Di sản lịch sử</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
				{/* Historical Significance */}
				<Card className="overflow-hidden shadow-2xl bg-gradient-to-br from-white to-green-50 border-0 pt-0">
					<CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white relative overflow-hidden">
						<div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-emerald-600/90"></div>
						<div className="absolute -right-20 -top-20 w-40 h-40 bg-white/10 rounded-full"></div>
						<div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full"></div>
						<CardTitle className="text-3xl font-bold flex items-center gap-3 relative z-10 h-16">
							<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
								<Star className="w-6 h-6" />
							</div>
							Ý nghĩa Lịch sử
						</CardTitle>
					</CardHeader>
					<CardContent className="p-8 space-y-12">
						{/* For Vietnam */}
						<div className="space-y-6">
							<div className="text-center">
								<Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 px-6 py-2 text-lg">
									<VN className="w-6 h-4 mr-2" /> Đối với Việt Nam
								</Badge>
							</div>
							<div className="grid gap-6">
								{[
									{
										icon: "⛓️",
										title: "Phá tan xiềng xích",
										content:
											"Đập tan xiềng xích nô lệ gần một thế kỷ của đế quốc và chế độ quân chủ chuyên chế ngót nghìn năm.",
										color: "from-red-100 to-pink-100",
									},
									{
										icon: "🏛️",
										title: "Lập nền nhà nước mới",
										content:
											"Lập nên nước Việt Nam Dân chủ Cộng hòa, nhà nước của nhân dân đầu tiên ở Đông Nam Á.",
										color: "from-blue-100 to-indigo-100",
									},
									{
										icon: "👥",
										title: "Thay đổi địa vị",
										content:
											"Đưa nhân dân Việt Nam từ thân phận nô lệ lên địa vị người chủ đất nước.",
										color: "from-green-100 to-emerald-100",
									},
									{
										icon: "🌅",
										title: "Mở kỷ nguyên mới",
										content:
											"Mở ra một kỷ nguyên mới trong lịch sử dân tộc: kỷ nguyên độc lập, tự do và hướng tới chủ nghĩa xã hội.",
										color: "from-yellow-100 to-orange-100",
									},
								].map((item, index) => (
									<div
										key={index}
										className={`group bg-gradient-to-r ${item.color} rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}
									>
										<div className="flex items-start gap-4">
											<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
												{item.icon}
											</div>
											<div className="flex-1">
												<h4 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h4>
												<p className="text-gray-700 leading-relaxed">{item.content}</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Separator */}
						<div className="flex items-center justify-center">
							<div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
							<div className="px-6">
								<div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center">
									<Globe className="w-6 h-6 text-white" />
								</div>
							</div>
							<div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
						</div>

						{/* For the World */}
						<div className="space-y-6">
							<div className="text-center">
								<Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 px-6 py-2 text-lg">
									🌍 Đối với Thế giới
								</Badge>
							</div>
							<div className="grid gap-6">
								{[
									{
										icon: "🥇",
										title: "Đầu tiên thành công",
										content:
											"Là cuộc cách mạng giải phóng dân tộc lần đầu tiên giành thắng lợi ở một nước thuộc địa.",
										color: "from-yellow-100 to-amber-100",
									},
									{
										icon: "💥",
										title: "Phá vỡ hệ thống",
										content:
											"Đột phá một khâu quan trọng trong hệ thống thuộc địa của chủ nghĩa đế quốc, mở đầu thời kỳ suy sụp, tan rã của chủ nghĩa thực dân cũ.",
										color: "from-red-100 to-rose-100",
									},
									{
										icon: "🔥",
										title: "Cổ vũ phong trào",
										content: "Cổ vũ mạnh mẽ phong trào giải phóng dân tộc trên thế giới.",
										color: "from-orange-100 to-red-100",
									},
									{
										icon: "📚",
										title: "Phong phú lý luận",
										content:
											"Góp phần làm phong phú kho tàng lý luận của chủ nghĩa Mác-Lênin về cách mạng giải phóng dân tộc.",
										color: "from-purple-100 to-indigo-100",
									},
								].map((item, index) => (
									<div
										key={index}
										className={`group bg-gradient-to-r ${item.color} rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}
									>
										<div className="flex items-start gap-4">
											<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
												{item.icon}
											</div>
											<div className="flex-1">
												<h4 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h4>
												<p className="text-gray-700 leading-relaxed">{item.content}</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Lessons Learned */}
				<Card className="overflow-hidden shadow-2xl bg-gradient-to-br from-white to-purple-50 border-0 pt-0">
					<CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white relative overflow-hidden">
						<div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-indigo-600/90"></div>
						<div className="absolute -right-20 -top-20 w-40 h-40 bg-white/10 rounded-full"></div>
						<div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full"></div>
						<CardTitle className="text-3xl font-bold flex items-center gap-3 relative z-10 h-16">
							<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
								<BookOpen className="w-6 h-6" />
							</div>
							Các Bài học Kinh nghiệm
						</CardTitle>
					</CardHeader>
					<CardContent className="p-8 space-y-8">
						<div className="grid gap-8">
							{[
								{
									number: "1",
									title: "Về chỉ đạo chiến lược",
									content:
										"Phải giương cao ngọn cờ giải phóng dân tộc, đặt nhiệm vụ này lên hàng đầu và giải quyết đúng đắn mối quan hệ với nhiệm vụ cách mạng ruộng đất.",
									gradient: "from-red-500 to-pink-500",
									bgGradient: "from-red-50 to-pink-50",
									icon: "🎯",
								},
								{
									number: "2",
									title: "Về xây dựng lực lượng",
									content:
										"Trên cơ sở liên minh công nông, tập hợp mọi lực lượng yêu nước trong một mặt trận dân tộc thống nhất rộng rãi (như Mặt trận Việt Minh).",
									gradient: "from-green-500 to-emerald-500",
									bgGradient: "from-green-50 to-emerald-50",
									icon: "🤝",
								},
								{
									number: "3",
									title: "Về phương pháp cách mạng",
									content:
										"Kết hợp đấu tranh chính trị với đấu tranh vũ trang, tiến hành khởi nghĩa từng phần, tiến lên chớp đúng thời cơ phát động tổng khởi nghĩa ở cả nông thôn và thành thị.",
									gradient: "from-blue-500 to-cyan-500",
									bgGradient: "from-blue-50 to-cyan-50",
									icon: "⚔️",
								},
								{
									number: "4",
									title: "Về xây dựng Đảng",
									content:
										"Xây dựng một Đảng cách mạng tiên phong, vững mạnh về tư tưởng, chính trị và tổ chức; có đường lối đúng đắn, sáng tạo; liên hệ chặt chẽ với quần chúng; và phát huy được tính chủ động của các cấp bộ Đảng.",
									gradient: "from-orange-500 to-amber-500",
									bgGradient: "from-orange-50 to-amber-50",
									icon: "🏛️",
								},
							].map((lesson, index) => (
								<div
									key={index}
									className={`group relative bg-gradient-to-r ${lesson.bgGradient} rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}
								>
									{/* Number Badge */}
									<div className="flex items-start gap-6">
										<div className="relative flex-shrink-0">
											<div
												className={`w-16 h-16 bg-gradient-to-r ${lesson.gradient} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
											>
												<span className="text-white font-bold text-xl">{lesson.number}</span>
											</div>
											<div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
												<span className="text-lg">{lesson.icon}</span>
											</div>
										</div>

										{/* Content */}
										<div className="flex-1 min-w-0">
											<h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
												{lesson.title}
											</h4>
											<p className="text-gray-700 leading-relaxed">{lesson.content}</p>
										</div>
									</div>

									{/* Decorative Elements */}
									<div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full opacity-50"></div>
									<div className="absolute bottom-4 right-8 w-6 h-6 bg-white/30 rounded-full opacity-30"></div>
								</div>
							))}
						</div>
					</CardContent>
				</Card>

				{/* Legacy and Impact */}
				<Card className="overflow-hidden shadow-2xl bg-gradient-to-br from-white to-amber-50 border-0 pt-0">
					<CardHeader className="bg-gradient-to-r from-amber-600 to-orange-600 text-white relative overflow-hidden">
						<div className="absolute inset-0 bg-gradient-to-r from-amber-600/90 to-orange-600/90"></div>
						<div className="absolute -right-20 -top-20 w-40 h-40 bg-white/10 rounded-full"></div>
						<div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full"></div>
						<CardTitle className="text-3xl font-bold flex items-center gap-3 relative z-10 h-16">
							<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
								<Trophy className="w-6 h-6" />
							</div>
							Di sản và Tầm ảnh hưởng
						</CardTitle>
					</CardHeader>
					<CardContent className="p-8 space-y-8">
						{/* Long-term Impact */}
						<div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-6 border-l-4 border-amber-400 shadow-lg">
							<div className="flex items-center gap-3 mb-6">
								<span className="text-2xl">🌟</span>
								<h4 className="font-bold text-amber-800 text-xl">Tầm ảnh hưởng lâu dài:</h4>
							</div>
							<div className="grid gap-4">
								{[
									"Tạo tiền đề cho các cuộc đấu tranh giải phóng dân tộc trên thế giới",
									"Khẳng định vai trò lãnh đạo của giai cấp công nhân và Đảng Cộng sản",
									"Chứng minh sức mạnh của khối đại đoàn kết dân tộc",
									'Để lại di sản tinh thần "Độc lập - Tự do - Hạnh phúc"',
									"Mở đường cho con đường đổi mới và phát triển đất nước",
								].map((impact, index) => (
									<div
										key={index}
										className="flex items-center gap-4 text-amber-700 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
									>
										<span className="text-amber-500 text-xl">✨</span>
										<span>{impact}</span>
									</div>
								))}
							</div>
						</div>

						{/* Final Message */}
						<div className="text-center space-y-6">
							<div className="relative inline-block">
								<div className="bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
									<div className="absolute inset-0 bg-gradient-to-r from-red-500/90 via-yellow-500/90 to-red-500/90 rounded-2xl"></div>
									<div className="relative z-10 flex items-center justify-center gap-4 text-white">
										<span className="text-4xl animate-pulse">🎉</span>
										<div className="text-center">
											<h3 className="text-2xl font-bold mb-2">Cách mạng Tháng Tám</h3>
											<p className="text-xl">Niềm tự hào của dân tộc Việt Nam</p>
										</div>
										<VN className="w-16 h-12 animate-pulse rounded shadow-lg" />
									</div>
								</div>

								{/* Decorative elements */}
								<div className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-300 rounded-full opacity-60"></div>
								<div className="absolute -top-4 -right-4 w-8 h-8 bg-red-300 rounded-full opacity-40"></div>
								<div className="absolute -bottom-2 -left-4 w-4 h-4 bg-yellow-400 rounded-full opacity-50"></div>
								<div className="absolute -bottom-4 -right-2 w-6 h-6 bg-red-400 rounded-full opacity-30"></div>
							</div>

							{/* Inspiring Quote */}
							<div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 shadow-lg border border-gray-200">
								<blockquote className="text-gray-700 text-lg italic leading-relaxed">
									<span className="text-red-500 text-2xl font-serif">&ldquo;</span>
									Cách mạng Tháng Tám 1945 là biểu tượng bất diệt của ý chí độc lập, tự do và hạnh
									phúc của dân tộc Việt Nam, mãi mãi soi đường cho các thế hệ tương lai.
									<span className="text-red-500 text-2xl font-serif">&rdquo;</span>
								</blockquote>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
