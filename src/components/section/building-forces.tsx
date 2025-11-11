"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import { ArrowLeft, Calendar, Users, Target, Shield, Sword, Flag, BookOpen } from "lucide-react";

export default function BuildingForces() {
	const handleBackButtonClick = () => {
		window.history.back();
	};

	const uprisings = [
		{
			date: "27/9/1940",
			name: "Khởi nghĩa Bắc Sơn",
			description: "Nhân dân nổi dậy, thành lập Đội du kích Bắc Sơn.",
			icon: "⚔️",
			color: "bg-red-500",
		},
		{
			date: "23/11/1940",
			name: "Khởi nghĩa Nam Kỳ",
			description:
				"Nổ ra ở nhiều nơi, thành lập chính quyền cách mạng nhưng bị Pháp đàn áp khốc liệt.",
			icon: "🏴",
			color: "bg-orange-500",
		},
		{
			date: "13/1/1941",
			name: "Binh biến Đô Lương",
			description: "Do Đội Cung chỉ huy, bị dập tắt nhanh chóng.",
			icon: "⚡",
			color: "bg-purple-500",
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50">
			<div className="container mx-auto px-6 py-20 space-y-16">
				{/* Header with Back Button */}
				<div className="flex items-center justify-between">
					<Button
						variant="outline"
						className="flex items-center gap-2 hover:bg-white/80 backdrop-blur-sm border-white/20 shadow-lg"
						onClick={handleBackButtonClick}
					>
						<ArrowLeft className="w-4 h-4" />
						Quay lại
					</Button>
				</div>

				{/* Hero Section */}
				<div className="text-center space-y-8 py-16">
					<div className="space-y-4">
						<h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent leading-tight">
							Xây dựng Lực lượng
						</h1>
						<h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
							Chuẩn bị Khởi nghĩa
						</h2>
						<div className="flex items-center justify-center gap-3 mt-6">
							<Calendar className="w-6 h-6 text-teal-600" />
							<p className="text-2xl font-medium text-gray-600">(1941-1945)</p>
						</div>
					</div>
					<div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
				</div>

				{/* Viet Minh Formation */}
				<Card className="overflow-hidden shadow-2xl bg-gradient-to-br from-white to-indigo-50 border-0 pt-0">
					<CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white relative overflow-hidden">
						<div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-purple-600/90"></div>
						<div className="absolute -right-20 -top-20 w-40 h-40 bg-white/10 rounded-full"></div>
						<div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full"></div>
						<CardTitle className="text-3xl font-bold flex items-center gap-3 relative z-10 h-16">
							<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
								<Flag className="w-6 h-6" />
							</div>
							Thành lập và Phát triển Mặt trận Việt Minh
						</CardTitle>
					</CardHeader>
					<CardContent className="p-8">
						<div className="relative">
							{/* Timeline Line */}
							<div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-400 via-purple-400 to-blue-400 rounded-full"></div>

							{/* Timeline Events */}
							<div className="space-y-12">
								{/* Viet Minh Declaration */}
								<div className="relative flex items-start gap-8 group">
									<div className="relative z-10 flex-shrink-0 w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg transform group-hover:scale-110 transition-all duration-300">
										📜
										<div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
									</div>

									<div className="flex-1 bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform group-hover:-translate-y-1 group-hover:shadow-xl transition-all duration-300">
										<div className="space-y-3">
											<Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0 px-4 py-1">
												25/10/1941
											</Badge>
											<h3 className="text-xl font-bold text-gray-800">
												Việt Minh công bố Tuyên ngôn
											</h3>
											<p className="text-gray-600 leading-relaxed">
												Việt Minh công bố Tuyên ngôn, chương trình hoạt động đáp ứng nguyện vọng cứu
												nước của mọi giới đồng bào, do đó phong trào phát triển mạnh mẽ.
											</p>
										</div>
									</div>
								</div>

								{/* Central Role */}
								<div className="ml-24 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100 shadow-lg">
									<div className="flex items-start gap-4">
										<div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
											<Users className="w-6 h-6 text-indigo-600" />
										</div>
										<div>
											<h4 className="font-bold text-indigo-800 text-lg mb-3">Vai trò trung tâm:</h4>
											<p className="text-indigo-700 leading-relaxed">
												Việt Minh trở thành nơi tập hợp, giác ngộ và rèn luyện lực lượng chính trị
												rộng lớn, lực lượng cơ bản và quyết định trong tổng khởi nghĩa sau này.
											</p>
										</div>
									</div>
								</div>

								{/* Democratic Party Formation */}
								<div className="relative flex items-start gap-8 group">
									<div className="relative z-10 flex-shrink-0 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg transform group-hover:scale-110 transition-all duration-300">
										🤝
										<div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
									</div>

									<div className="flex-1 bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform group-hover:-translate-y-1 group-hover:shadow-xl transition-all duration-300">
										<div className="space-y-3">
											<Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 px-4 py-1">
												6/1944
											</Badge>
											<h3 className="text-xl font-bold text-gray-800">
												Đảng Dân chủ Việt Nam thành lập
											</h3>
											<p className="text-gray-600 leading-relaxed">
												Đảng Dân chủ Việt Nam được thành lập và tham gia Việt Minh, góp phần mở rộng
												khối đại đoàn kết dân tộc.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Armed Forces and Base Areas */}
				<Card className="overflow-hidden shadow-2xl bg-gradient-to-br from-white to-orange-50 border-0 pt-0">
					<CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white relative overflow-hidden">
						<div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 to-red-600/90"></div>
						<div className="absolute -right-20 -top-20 w-40 h-40 bg-white/10 rounded-full"></div>
						<div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full"></div>
						<CardTitle className="text-3xl font-bold flex items-center gap-3 relative z-10 h-16">
							<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
								<Sword className="w-6 h-6" />
							</div>
							Xây dựng Lực lượng Vũ trang và Căn cứ địa
						</CardTitle>
					</CardHeader>
					<CardContent className="p-8 space-y-12">
						{/* Early Uprisings */}
						<div className="space-y-8">
							<div className="flex items-center gap-4 mb-6">
								<div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
									<Target className="w-6 h-6 text-white" />
								</div>
								<h3 className="text-2xl font-bold text-orange-800">Các cuộc nổi dậy ban đầu</h3>
							</div>

							<div className="relative">
								{/* Timeline Line */}
								<div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-red-400 via-orange-400 to-yellow-400 rounded-full"></div>

								{/* Timeline Events */}
								<div className="space-y-8">
									{uprisings.map((uprising, index) => (
										<div key={index} className="relative flex items-start gap-8 group">
											{/* Timeline Node */}
											<div
												className={`relative z-10 flex-shrink-0 w-16 h-16 ${uprising.color} rounded-full flex items-center justify-center text-white text-2xl shadow-lg transform group-hover:scale-110 transition-all duration-300`}
											>
												{uprising.icon}
												<div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
											</div>

											{/* Event Content */}
											<div className="flex-1 bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform group-hover:-translate-y-1 group-hover:shadow-xl transition-all duration-300">
												<div className="space-y-3">
													<Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 px-4 py-1">
														{uprising.date}
													</Badge>
													<h4 className="text-xl font-bold text-gray-800">{uprising.name}</h4>
													<p className="text-gray-600 leading-relaxed">{uprising.description}</p>
												</div>
											</div>
										</div>
									))}
								</div>

								{/* Significance Card */}
								<div className="mt-12 relative">
									<div className="absolute left-8 w-16 h-1 bg-gradient-to-r from-orange-400 to-yellow-400"></div>
									<div className="ml-24 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border-l-4 border-yellow-400 shadow-lg">
										<div className="flex items-start gap-4">
											<div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
												<span className="text-yellow-600 text-xl">💡</span>
											</div>
											<div>
												<h4 className="font-bold text-yellow-800 text-lg mb-3">Ý nghĩa:</h4>
												<p className="text-yellow-700 leading-relaxed">
													Các cuộc khởi nghĩa này được xem là &quot;những tiếng súng báo hiệu cho
													cuộc khởi nghĩa toàn quốc&quot;.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Armed Forces Development */}
						<div className="space-y-8">
							<div className="flex items-center gap-4 mb-6">
								<div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
									<Shield className="w-6 h-6 text-white" />
								</div>
								<h3 className="text-2xl font-bold text-green-800">Phát triển lực lượng vũ trang</h3>
							</div>

							<div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100 shadow-lg">
								<p className="text-gray-700 text-lg leading-relaxed mb-6">
									Đội du kích Bắc Sơn được duy trì và phát triển thành Cứu quốc quân.
								</p>

								<div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-6 border-l-4 border-green-500">
									<div className="flex items-start gap-4 mb-4">
										<div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
											<span className="text-white text-xl font-bold">🎖️</span>
										</div>
										<h4 className="font-bold text-green-800 text-xl">
											22/12/1944 - Thành lập Đội Việt Nam Tuyên truyền Giải phóng quân
										</h4>
									</div>
									<div className="grid md:grid-cols-3 gap-4 mb-4">
										<div className="bg-white rounded-lg p-4 shadow-sm">
											<div className="flex items-center gap-2 mb-2">
												<span className="text-green-600 text-lg">👥</span>
												<span className="font-semibold text-green-800">Quy mô:</span>
											</div>
											<p className="text-green-700">34 thành viên do Võ Nguyên Giáp chỉ huy</p>
										</div>
										<div className="bg-white rounded-lg p-4 shadow-sm">
											<div className="flex items-center gap-2 mb-2">
												<span className="text-green-600 text-lg">🏛️</span>
												<span className="font-semibold text-green-800">Ý nghĩa:</span>
											</div>
											<p className="text-green-700">Tiền thân của Quân đội nhân dân Việt Nam</p>
										</div>
										<div className="bg-white rounded-lg p-4 shadow-sm">
											<div className="flex items-center gap-2 mb-2">
												<span className="text-green-600 text-lg">⭐</span>
												<span className="font-semibold text-green-800">Đặc điểm:</span>
											</div>
											<p className="text-green-700">
												Ra đời chính thức lực lượng vũ trang cách mạng
											</p>
										</div>
									</div>
									<div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-lg p-4 border border-green-300">
										<div className="flex items-center gap-3">
											<span className="text-2xl">💪</span>
											<p className="text-green-800 font-bold text-lg">
												&quot;Một tay cầm súng, một tay cầm cuốc&quot; - Phương châm hoạt động
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Base Areas */}
						<div className="space-y-8">
							<div className="flex items-center gap-4 mb-6">
								<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
									<Target className="w-6 h-6 text-white" />
								</div>
								<h3 className="text-2xl font-bold text-blue-800">Xây dựng căn cứ địa</h3>
							</div>

							<div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100 shadow-lg">
								<p className="text-gray-700 text-lg leading-relaxed mb-6">
									Khu căn cứ Bắc Sơn-Võ Nhai và Cao Bằng được củng cố và mở rộng.
								</p>

								<div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl p-6 border-l-4 border-blue-500">
									<div className="flex items-center gap-3 mb-4">
										<span className="text-2xl">🏰</span>
										<h4 className="font-bold text-blue-800 text-xl">Vai trò căn cứ địa:</h4>
									</div>
									<div className="grid gap-4">
										{[
											{ icon: "🎯", text: "Nơi rèn luyện lực lượng vũ trang và cán bộ" },
											{ icon: "🎛️", text: "Trung tâm chỉ đạo phong trào cách mạng cả nước" },
											{ icon: "🛡️", text: "Cơ sở hậu phương vững chắc cho cuộc kháng chiến" },
										].map((item, index) => (
											<div
												key={index}
												className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm"
											>
												<span className="text-xl">{item.icon}</span>
												<p className="text-blue-700 font-medium">{item.text}</p>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Other Fronts */}
				<Card className="overflow-hidden shadow-2xl bg-gradient-to-br from-white to-teal-50 border-0 pt-0">
					<CardHeader className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white relative overflow-hidden">
						<div className="absolute inset-0 bg-gradient-to-r from-teal-600/90 to-cyan-600/90"></div>
						<div className="absolute -right-20 -top-20 w-40 h-40 bg-white/10 rounded-full"></div>
						<div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full"></div>
						<CardTitle className="text-3xl font-bold flex items-center gap-3 relative z-10 h-16">
							<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
								<BookOpen className="w-6 h-6" />
							</div>
							Đấu tranh trên các Mặt trận khác
						</CardTitle>
					</CardHeader>
					<CardContent className="p-8">
						<div className="grid md:grid-cols-2 gap-8">
							{/* Ideology and Press */}
							<div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100 shadow-lg transform hover:scale-105 transition-all duration-300">
								<div className="flex items-center gap-4 mb-4">
									<div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
										<span className="text-white text-xl">📰</span>
									</div>
									<h3 className="text-2xl font-bold text-teal-800">Tư tưởng - Báo chí</h3>
								</div>
								<p className="text-gray-700 leading-relaxed mb-4">
									Đảng và Việt Minh cho xuất bản nhiều tờ báo để tuyên truyền đường lối cách mạng:
								</p>
								<div className="space-y-3">
									{["Cờ giải phóng", "Việt Nam độc lập", "Cứu quốc", "Tin tức"].map(
										(newspaper, index) => (
											<div
												key={index}
												className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm"
											>
												<span className="text-teal-600">📄</span>
												<span className="font-semibold text-teal-700">&quot;{newspaper}&quot;</span>
											</div>
										)
									)}
								</div>
							</div>

							{/* Culture */}
							<div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-100 shadow-lg transform hover:scale-105 transition-all duration-300">
								<div className="flex items-center gap-4 mb-4">
									<div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
										<span className="text-white text-xl">🎭</span>
									</div>
									<h3 className="text-2xl font-bold text-cyan-800">Văn hóa</h3>
								</div>
								<p className="text-gray-700 leading-relaxed mb-4">
									Phong trào văn hóa cứu nước phát triển mạnh mẽ với các tác phẩm nổi tiếng:
								</p>
								<div className="space-y-3">
									{[
										{ icon: "🎵", text: "&quot;Tiến quân ca&quot; của Văn Cao" },
										{ icon: "🎭", text: "Các vở kịch, thơ ca cách mạng" },
										{ icon: "📚", text: "Phong trào học tập chữ quốc ngữ" },
									].map((item, index) => (
										<div
											key={index}
											className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm"
										>
											<span className="text-xl">{item.icon}</span>
											<span
												className="text-cyan-700 font-medium"
												dangerouslySetInnerHTML={{ __html: item.text }}
											></span>
										</div>
									))}
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
