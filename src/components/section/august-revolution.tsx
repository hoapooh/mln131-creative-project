"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import { ArrowLeft, Flag, Users, Zap, Star } from "lucide-react";

export default function AugustRevolution() {
	const handleBackButtonClick = () => {
		window.history.back();
	};

	const revolutionEvents = [
		{
			date: "19/8/1945",
			location: "Hà Nội",
			event: "Hàng chục vạn nhân dân biểu tình, chiếm các cơ quan quan trọng",
			color: "from-red-500 to-pink-500",
			icon: "🏛️",
		},
		{
			date: "23/8/1945",
			location: "Huế",
			event: "Vua Bảo Đại thoái vị, giao ấn vàng và gươm báu cho chính quyền cách mạng",
			color: "from-purple-500 to-violet-500",
			icon: "👑",
		},
		{
			date: "25/8/1945",
			location: "Sài Gòn",
			event: "Quần chúng nổi dậy, giành chính quyền thành phố",
			color: "from-blue-500 to-cyan-500",
			icon: "🌊",
		},
		{
			date: "28/8/1945",
			location: "Toàn quốc",
			event: "Khởi nghĩa thành công trên phạm vi cả nước, chính quyền về tay nhân dân",
			color: "from-green-500 to-emerald-500",
			icon: "🎉",
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-amber-50 via-red-50 to-pink-50">
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
						<h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent leading-tight">
							Tổng Khởi nghĩa
						</h1>
						<h2 className="text-3xl md:text-4xl font-semibold text-gray-700">Tháng Tám năm 1945</h2>
					</div>
					<div className="w-24 h-1 bg-gradient-to-r from-red-500 to-amber-500 mx-auto rounded-full"></div>
				</div>

				<Card className="overflow-hidden shadow-2xl bg-gradient-to-br from-white to-amber-50 border-0 pt-0">
					<CardHeader className="bg-gradient-to-r from-amber-600 to-orange-600 text-white relative overflow-hidden">
						<div className="absolute inset-0 bg-gradient-to-r from-amber-600/90 to-orange-600/90"></div>
						<div className="absolute -right-20 -top-20 w-40 h-40 bg-white/10 rounded-full"></div>
						<div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full"></div>
						<CardTitle className="text-3xl font-bold flex items-center gap-3 relative z-10 h-16">
							<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
								<Zap className="w-6 h-6" />
							</div>
							Thời cơ Cách mạng và Quyết định của Đảng
						</CardTitle>
					</CardHeader>
					<CardContent className="p-8 space-y-8">
						{/* Context */}
						<div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200 shadow-lg">
							<div className="flex items-start gap-4">
								<div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
									<span className="text-amber-600 text-xl">🌍</span>
								</div>
								<div>
									<h4 className="font-bold text-amber-800 text-lg mb-3">Bối cảnh quốc tế:</h4>
									<p className="text-amber-700 leading-relaxed">
										Giữa tháng 8/1945, phát xít Nhật tuyên bố đầu hàng Đồng minh không điều kiện
										(15/8/1945) sau khi Liên Xô tấn công đạo quân Quan Đông và Mỹ ném hai quả bom
										nguyên tử.
									</p>
								</div>
							</div>
						</div>

						{/* Opportunity */}
						<div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border-l-4 border-red-400 shadow-lg">
							<div className="flex items-start gap-4">
								<div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
									<span className="text-red-600 text-xl">⏰</span>
								</div>
								<div>
									<h4 className="font-bold text-red-800 text-lg mb-3">Thời cơ vàng:</h4>
									<p className="text-red-700 leading-relaxed">
										Tồn tại trong khoảng thời gian từ khi Nhật đầu hàng đến trước khi quân Đồng minh
										vào Đông Dương giải giáp quân Nhật. Đây là cuộc &quot;đua nước rút với thời
										gian&quot; để giành chính quyền.
									</p>
								</div>
							</div>
						</div>

						{/* Key Decisions Timeline */}
						<div className="relative">
							{/* Timeline Line */}
							<div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 via-blue-400 to-purple-400 rounded-full"></div>

							<div className="space-y-12">
								{/* Party National Conference */}
								<div className="relative flex items-start gap-8 group">
									<div className="relative z-10 flex-shrink-0 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg transform group-hover:scale-110 transition-all duration-300">
										🏛️
										<div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
									</div>

									<div className="flex-1 bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform group-hover:-translate-y-1 group-hover:shadow-xl transition-all duration-300">
										<div className="space-y-4">
											<Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 px-4 py-1">
												13/8/1945
											</Badge>
											<h4 className="text-xl font-bold text-gray-800">
												Hội nghị toàn quốc của Đảng tại Tân Trào
											</h4>
											<div className="bg-green-50 rounded-lg p-4">
												<p className="font-semibold text-green-800 mb-2">
													Các quyết định quan trọng:
												</p>
												<div className="grid gap-2">
													{[
														"Phát động tổng khởi nghĩa giành chính quyền toàn quốc",
														"Thành lập Ủy ban Dân tộc Giải phóng Việt Nam",
														"Cử Hồ Chí Minh làm Chủ tịch",
														'Ra "Lời kêu gọi tổng khởi nghĩa"',
													].map((decision, index) => (
														<div key={index} className="flex items-center gap-2 text-green-700">
															<span className="text-green-500">✓</span>
															<span>{decision}</span>
														</div>
													))}
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* National Congress */}
								<div className="relative flex items-start gap-8 group">
									<div className="relative z-10 flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg transform group-hover:scale-110 transition-all duration-300">
										🗳️
										<div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
									</div>

									<div className="flex-1 bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform group-hover:-translate-y-1 group-hover:shadow-xl transition-all duration-300">
										<div className="space-y-4">
											<Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 px-4 py-1">
												16/8/1945
											</Badge>
											<h4 className="text-xl font-bold text-gray-800">
												Đại hội Quốc dân tại Tân Trào
											</h4>
											<div className="bg-blue-50 rounded-lg p-4">
												<p className="font-semibold text-blue-800 mb-2">Thông qua:</p>
												<div className="grid gap-2">
													{[
														"Tán thành quyết định tổng khởi nghĩa",
														"Bầu Chính phủ lâm thời",
														"Cử Hồ Chí Minh làm Chủ tịch Chính phủ lâm thời",
														"Thông qua 10 chính sách đại cương",
													].map((decision, index) => (
														<div key={index} className="flex items-center gap-2 text-blue-700">
															<span className="text-blue-500">✓</span>
															<span>{decision}</span>
														</div>
													))}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* August Revolution Development */}
				<Card className="overflow-hidden shadow-2xl bg-gradient-to-br from-white to-rose-50 border-0 pt-0">
					<CardHeader className="bg-gradient-to-r from-rose-600 to-pink-600 text-white relative overflow-hidden">
						<div className="absolute inset-0 bg-gradient-to-r from-rose-600/90 to-pink-600/90"></div>
						<div className="absolute -right-20 -top-20 w-40 h-40 bg-white/10 rounded-full"></div>
						<div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full"></div>
						<CardTitle className="text-3xl font-bold flex items-center gap-3 relative z-10 h-16">
							<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
								<Flag className="w-6 h-6" />
							</div>
							Diễn biến Tổng Khởi nghĩa
						</CardTitle>
					</CardHeader>
					<CardContent className="p-8 space-y-8">
						{/* Call to Revolution */}
						<div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-6 border-l-4 border-rose-400 shadow-lg">
							<div className="flex items-start gap-4">
								<div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
									<span className="text-rose-600 text-2xl">📢</span>
								</div>
								<div className="flex-1">
									<h4 className="font-bold text-rose-800 text-xl mb-4">Lời kêu gọi lịch sử:</h4>
									<blockquote className="text-rose-700 italic text-lg leading-relaxed bg-white/50 p-4 rounded-lg border border-rose-200">
										<span className="text-rose-400 text-3xl font-serif">&ldquo;</span>
										Giờ quyết định cho vận mệnh dân tộc ta đã đến. Toàn quốc đồng bào hãy đứng dậy
										đem sức ta mà tự giải phóng cho ta...
										<span className="text-rose-400 text-3xl font-serif">&rdquo;</span>
										<div className="mt-3 text-right">
											<span className="font-bold text-rose-800">- Hồ Chí Minh</span>
										</div>
									</blockquote>
								</div>
							</div>
						</div>

						{/* Revolution Spread */}
						<div className="space-y-6">
							<div className="text-center">
								<h4 className="text-2xl font-bold text-rose-800 mb-4">
									Khởi nghĩa lan tỏa khắp cả nước
								</h4>
								<p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
									Từ các căn cứ địa ở miền Bắc, phong trào khởi nghĩa nhanh chóng lan tỏa khắp cả
									nước theo phương châm &quot;tiến nhanh, đánh chắc&quot;.
								</p>
							</div>

							{/* Timeline of Revolution Events */}
							<div className="relative">
								<div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-red-400 via-purple-400 to-green-400 rounded-full"></div>

								<div className="space-y-8">
									{revolutionEvents.map((event, index) => (
										<div key={index} className="relative flex items-start gap-8 group">
											<div
												className={`relative z-10 flex-shrink-0 w-16 h-16 bg-gradient-to-br ${event.color} rounded-full flex items-center justify-center text-white text-2xl shadow-lg transform group-hover:scale-110 transition-all duration-300`}
											>
												{event.icon}
												<div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
											</div>

											<div className="flex-1 bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform group-hover:-translate-y-1 group-hover:shadow-xl transition-all duration-300">
												<div className="space-y-3">
													<Badge
														className={`bg-gradient-to-r ${event.color} text-white border-0 px-4 py-1`}
													>
														{event.date}
													</Badge>
													<h5 className="text-xl font-bold text-gray-800">{event.location}</h5>
													<p className="text-gray-600 leading-relaxed">{event.event}</p>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Democratic Republic of Vietnam */}
				<Card className="overflow-hidden shadow-2xl bg-gradient-to-br from-white to-yellow-50 border-0 pt-0">
					<CardHeader className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white relative overflow-hidden">
						<div className="absolute inset-0 bg-gradient-to-r from-yellow-600/90 to-orange-600/90"></div>
						<div className="absolute -right-20 -top-20 w-40 h-40 bg-white/10 rounded-full"></div>
						<div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full"></div>
						<CardTitle className="text-3xl font-bold flex items-center gap-3 relative z-10 h-16">
							<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
								<Star className="w-6 h-6" />
							</div>
							Thành lập Nước Việt Nam Dân chủ Cộng hòa
						</CardTitle>
					</CardHeader>
					<CardContent className="p-8 space-y-8">
						{/* Independence Declaration */}
						<div className="relative flex items-start gap-8 group">
							<div className="relative z-10 flex-shrink-0 w-20 h-20 bg-gradient-to-br from-yellow-500 to-red-500 rounded-full flex items-center justify-center text-white text-3xl shadow-xl transform group-hover:scale-110 transition-all duration-300">
								🏛️
								<div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
							</div>

							<div className="flex-1 bg-white rounded-xl p-8 shadow-lg border border-gray-100 transform group-hover:-translate-y-1 group-hover:shadow-xl transition-all duration-300">
								<div className="space-y-4">
									<Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 px-6 py-2 text-lg">
										2/9/1945
									</Badge>
									<h4 className="text-2xl font-bold text-gray-800">
										Tuyên ngôn Độc lập tại Quảng trường Ba Đình
									</h4>
									<p className="text-gray-700 text-lg leading-relaxed">
										Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập, chính thức khai sinh nước Việt
										Nam Dân chủ Cộng hòa trước 500.000 đồng bào Hà Nội.
									</p>
								</div>
							</div>
						</div>

						{/* Historical Significance */}
						<div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200 shadow-lg">
							<div className="flex items-center gap-3 mb-4">
								<span className="text-3xl">⭐</span>
								<h4 className="font-bold text-yellow-800 text-xl">Ý nghĩa lịch sử:</h4>
							</div>
							<div className="grid md:grid-cols-3 gap-4">
								{[
									{ icon: "⛓️", text: "Chấm dứt gần một thế kỷ đô hộ của thực dân Pháp" },
									{ icon: "👑", text: "Kết thúc chế độ phong kiến hàng nghìn năm" },
									{ icon: "🌅", text: "Mở ra kỷ nguyên độc lập, tự do của dân tộc Việt Nam" },
								].map((item, index) => (
									<div
										key={index}
										className="bg-white rounded-lg p-4 shadow-sm border border-yellow-100"
									>
										<div className="flex items-start gap-3">
											<span className="text-2xl">{item.icon}</span>
											<p className="text-yellow-700 font-medium">{item.text}</p>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Declaration Quote */}
						<div className="bg-gradient-to-r from-red-50 via-yellow-50 to-orange-50 rounded-xl p-8 border border-yellow-300 shadow-lg">
							<div className="text-center mb-4">
								<h4 className="font-bold text-yellow-800 text-2xl flex items-center justify-center gap-3">
									<span className="text-3xl">📜</span>
									Tuyên ngôn Độc lập (trích đoạn)
								</h4>
							</div>
							<blockquote className="text-yellow-700 italic text-xl leading-relaxed text-center bg-white/70 p-6 rounded-lg border-l-4 border-yellow-500">
								<span className="text-yellow-400 text-4xl font-serif">&ldquo;</span>
								Tất cả mọi người đều sinh ra có quyền bình đẳng. Tạo hóa cho họ những quyền không ai
								có thể xâm phạm được; trong những quyền ấy, có quyền được sống, quyền tự do và quyền
								mưu cầu hạnh phúc...
								<span className="text-yellow-400 text-4xl font-serif">&rdquo;</span>
							</blockquote>
							<div className="mt-6 text-center">
								<span className="font-bold text-yellow-800 text-lg bg-yellow-100 px-4 py-2 rounded-full">
									- Hồ Chí Minh, 2/9/1945
								</span>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Analysis of August Revolution */}
				<Card className="overflow-hidden shadow-2xl bg-gradient-to-br from-white to-purple-50 border-0 pt-0">
					<CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white relative overflow-hidden">
						<div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-indigo-600/90"></div>
						<div className="absolute -right-20 -top-20 w-40 h-40 bg-white/10 rounded-full"></div>
						<div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full"></div>
						<CardTitle className="text-3xl font-bold flex items-center gap-3 relative z-10 h-16">
							<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
								<Users className="w-6 h-6" />
							</div>
							Đặc điểm và Ý nghĩa của Cách mạng Tháng Tám
						</CardTitle>
					</CardHeader>
					<CardContent className="p-8 space-y-12">
						{/* Key Characteristics */}
						<div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-200 shadow-lg">
							<div className="flex items-center gap-3 mb-6">
								<span className="text-3xl">⚡</span>
								<h4 className="font-bold text-purple-800 text-2xl">Đặc điểm nổi bật:</h4>
							</div>
							<div className="grid gap-4">
								{[
									{
										label: "Tính chất",
										value: "Cách mạng giải phóng dân tộc, dân chủ nhân dân",
										icon: "🎯",
									},
									{ label: "Phương thức", value: "Khởi nghĩa chính trị, ít đổ máu", icon: "🕊️" },
									{ label: "Quy mô", value: "Toàn quốc, đồng loạt", icon: "🗺️" },
									{ label: "Thời gian", value: "Nhanh chóng, chỉ trong vòng 2 tuần", icon: "⚡" },
									{ label: "Lực lượng", value: "Toàn dân tộc đoàn kết", icon: "🤝" },
								].map((item, index) => (
									<div
										key={index}
										className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm"
									>
										<span className="text-2xl">{item.icon}</span>
										<div>
											<span className="font-bold text-purple-800">{item.label}:</span>
											<span className="text-purple-700 ml-2">{item.value}</span>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Success Factors */}
						<div className="space-y-6">
							<div className="text-center">
								<h4 className="text-2xl font-bold text-purple-800 mb-2">Nguyên nhân thành công</h4>
								<div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"></div>
							</div>

							<div className="grid md:grid-cols-2 gap-8">
								{/* Subjective Factors */}
								<div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-blue-400 shadow-lg">
									<div className="flex items-center gap-3 mb-4">
										<span className="text-2xl">🧠</span>
										<h5 className="font-bold text-blue-800 text-xl">Yếu tố chủ quan:</h5>
									</div>
									<div className="space-y-3">
										{[
											"Đường lối đúng đắn của Đảng",
											"Sự lãnh đạo tài tình của Hồ Chí Minh",
											"Khối đại đoàn kết dân tộc",
											"Lực lượng vũ trang sẵn sàng",
											"Nhân dân gi각 ngộ cao",
										].map((factor, index) => (
											<div
												key={index}
												className="flex items-center gap-2 text-blue-700 bg-white rounded p-2 shadow-sm"
											>
												<span className="text-blue-500">✓</span>
												<span>{factor}</span>
											</div>
										))}
									</div>
								</div>

								{/* Objective Factors */}
								<div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-400 shadow-lg">
									<div className="flex items-center gap-3 mb-4">
										<span className="text-2xl">🌍</span>
										<h5 className="font-bold text-green-800 text-xl">Yếu tố khách quan:</h5>
									</div>
									<div className="space-y-3">
										{[
											"Thời cơ quốc tế thuận lợi",
											"Khoảng trống quyền lực",
											"Địch yếu, ta mạnh",
											"Nhân dân khát khao độc lập",
											"Chớp thời cơ kịp thời",
										].map((factor, index) => (
											<div
												key={index}
												className="flex items-center gap-2 text-green-700 bg-white rounded p-2 shadow-sm"
											>
												<span className="text-green-500">✓</span>
												<span>{factor}</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
