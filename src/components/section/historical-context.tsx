"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import { ArrowLeft, Calendar, Users, Target, MapPin, Lightbulb, Star } from "lucide-react";

export default function HistoricalContext() {
	const handleBackButtonClick = () => {
		window.history.back();
	};

	const timelineEvents = [
		{
			date: "Tháng 9/1939",
			title: "Chiến tranh Thế giới thứ hai bùng nổ",
			description:
				"Chính phủ Pháp tăng cường đàn áp phong trào cách mạng ở thuộc địa, đặt Đảng Cộng sản Đông Dương ra ngoài vòng pháp luật.",
			color: "bg-red-500",
			icon: "⚔️",
		},
		{
			date: "Tháng 6/1940",
			title: "Đức chiếm đóng Pháp",
			description: "Đức tấn công và chiếm đóng Pháp.",
			color: "bg-orange-500",
			icon: "🏴",
		},
		{
			date: "Tháng 9/1940",
			title: "Quân phiệt Nhật tiến vào Đông Dương",
			description:
				'Thực dân Pháp đầu hàng và câu kết với Nhật, đẩy nhân dân Đông Dương vào tình cảnh "nô lệ của nô lệ".',
			color: "bg-purple-500",
			icon: "⛓️",
		},
	];

	const meetingPoints = [
		{
			number: 1,
			content:
				'Nhấn mạnh mâu thuẫn chủ yếu cần giải quyết cấp bách là giữa dân tộc Việt Nam và đế quốc phát xít Pháp-Nhật, vì "quyền lợi tất cả các giai cấp bị cướp giật, vận mạng dân tộc nguy vong không lúc nào bằng".',
			icon: <Target className="w-5 h-5" />,
			color: "from-red-500 to-pink-500",
		},
		{
			number: 2,
			content:
				"Khẳng định dứt khoát thay đổi chiến lược. Cuộc cách mạng hiện tại là \"một cuộc cách mạng chỉ phải giải quyết một vấn đề cần kíp 'dân tộc giải phóng'\". Tiếp tục tạm gác khẩu hiệu ruộng đất, thay bằng các khẩu hiệu tịch thu ruộng đất của đế quốc và Việt gian, chia lại ruộng công, giảm tô, giảm tức.",
			icon: <Lightbulb className="w-5 h-5" />,
			color: "from-blue-500 to-cyan-500",
			quote:
				"Trong lúc này nếu không giải quyết được vấn đề dân tộc giải phóng... thì chẳng những toàn thể quốc gia dân tộc còn chịu mãi kiếp ngựa trâu, mà quyền lợi của bộ phận, giai cấp đến vạn năm cũng không đòi lại được",
		},
		{
			number: 3,
			content:
				'Giải quyết vấn đề dân tộc trong khuôn khổ từng nước ở Đông Dương theo chính sách "dân tộc tự quyết". Quyết định thành lập ở mỗi nước một mặt trận riêng (ở Việt Nam là Việt Nam Độc lập Đồng minh - Việt Minh).',
			icon: <MapPin className="w-5 h-5" />,
			color: "from-green-500 to-emerald-500",
		},
		{
			number: 4,
			content:
				'Tập hợp rộng rãi mọi lực lượng dân tộc trong Mặt trận Việt Minh, "không phân biệt thợ thuyền, dân cày, phú nông, địa chủ, tư bản bản xứ, ai có lòng yêu nước thương nòi". Các tổ chức quần chúng trong mặt trận đều mang tên "cứu quốc".',
			icon: <Users className="w-5 h-5" />,
			color: "from-purple-500 to-violet-500",
		},
		{
			number: 5,
			content:
				'Chủ trương sau khi cách mạng thành công sẽ thành lập nước Việt Nam Dân chủ Cộng hòa, một hình thức nhà nước "của chung cả toàn thể dân tộc".',
			icon: <Star className="w-5 h-5" />,
			color: "from-yellow-500 to-orange-500",
		},
		{
			number: 6,
			content:
				'Xác định chuẩn bị khởi nghĩa vũ trang là nhiệm vụ trung tâm của Đảng và nhân dân. Đề ra phương châm "lãnh đạo một cuộc khởi nghĩa từng phần trong từng địa phương cũng có thể giành sự thắng lợi mà mở đường cho một cuộc tổng khởi nghĩa to lớn".',
			icon: <Target className="w-5 h-5" />,
			color: "from-indigo-500 to-purple-600",
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
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
						<h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
							Bối cảnh Lịch sử
						</h1>
						<h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
							Sự Chuyển hướng Chiến lược của Đảng
						</h2>
						<div className="flex items-center justify-center gap-3 mt-6">
							<Calendar className="w-6 h-6 text-indigo-600" />
							<p className="text-2xl font-medium text-gray-600">(1939-1941)</p>
						</div>
					</div>
					<div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
				</div>

				{/* World War II Impact - Modern Timeline */}
				<Card className="overflow-hidden shadow-2xl bg-gradient-to-br from-white to-gray-50 border-0 pt-0">
					<CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
						<CardTitle className="text-3xl font-bold flex items-center gap-3 h-16">
							<div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
								⚔️
							</div>
							Tác động của Chiến tranh Thế giới thứ hai
						</CardTitle>
					</CardHeader>
					<CardContent className="p-8">
						<div className="relative">
							{/* Timeline Line */}
							<div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-red-400 via-orange-400 to-purple-400 rounded-full"></div>

							{/* Timeline Events */}
							<div className="space-y-12">
								{timelineEvents.map((event, index) => (
									<div key={index} className="relative flex items-start gap-8 group">
										{/* Timeline Node */}
										<div
											className={`relative z-10 flex-shrink-0 w-16 h-16 ${event.color} rounded-full flex items-center justify-center text-white text-2xl shadow-lg transform group-hover:scale-110 transition-all duration-300`}
										>
											{event.icon}
											<div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
										</div>

										{/* Event Content */}
										<div className="flex-1 bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform group-hover:-translate-y-1 group-hover:shadow-xl transition-all duration-300">
											<div className="space-y-3">
												<Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0 px-4 py-1">
													{event.date}
												</Badge>
												<h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
												<p className="text-gray-600 leading-relaxed">{event.description}</p>
											</div>
										</div>
									</div>
								))}
							</div>

							{/* Policy Impact Card */}
							<div className="mt-12 relative">
								<div className="absolute left-8 w-16 h-1 bg-gradient-to-r from-red-400 to-purple-400"></div>
								<div className="ml-24 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border-l-4 border-red-400 shadow-lg">
									<div className="flex items-start gap-4">
										<div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
											<span className="text-red-600 text-xl">📋</span>
										</div>
										<div>
											<h4 className="font-bold text-red-800 text-lg mb-3">
												Chính sách của Pháp-Nhật:
											</h4>
											<p className="text-red-700 leading-relaxed">
												Thực dân Pháp thi hành chính sách thời chiến, phát xít hóa bộ máy thống trị,
												và thực hiện &quot;kinh tế chỉ huy&quot; để vơ vét sức người, sức của phục
												vụ chiến tranh.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Central Committee Meetings */}
				<Card className="overflow-hidden shadow-2xl bg-gradient-to-br from-white to-green-50 border-0 pt-0">
					<CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
						<CardTitle className="text-3xl font-bold flex items-center gap-3 h-16">
							<div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
								🏛️
							</div>
							Các Hội nghị Trung ương và Sự hình thành Đường lối Mới
						</CardTitle>
					</CardHeader>
					<CardContent className="p-8 space-y-12">
						{/* 1939 Meeting */}
						<div className="relative">
							<div className="flex items-start gap-6">
								<div className="flex-shrink-0">
									<div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
										<span className="text-white text-2xl font-bold">1939</span>
									</div>
									<div className="w-1 h-72 bg-gradient-to-b from-green-400 to-orange-400 mx-auto mt-4"></div>
								</div>

								<div className="flex-1 bg-white rounded-xl p-6 shadow-lg border border-green-100">
									<div className="space-y-4">
										<div className="flex items-center gap-3 mb-4">
											<Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2">
												11/1939
											</Badge>
											<h3 className="text-xl font-bold text-gray-800">
												Hội nghị Trung ương Đảng tại Bà Điểm, Hóc Môn
											</h3>
										</div>

										<div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
											<h4 className="font-bold text-green-800 mb-2">Quyết định quan trọng:</h4>
											<p className="text-gray-700">
												Chuyển hướng từ &quot;cách mạng tư sản dân chủ&quot; sang &quot;cách mạng
												giải phóng dân tộc&quot;.
											</p>
										</div>

										<div className="grid md:grid-cols-2 gap-4">
											<div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-4 border border-red-200">
												<div className="flex items-center gap-2 mb-2">
													<span className="text-red-500">❌</span>
													<h5 className="font-semibold text-red-800">Tạm gác:</h5>
												</div>
												<p className="text-red-700">Khẩu hiệu &quot;ruộng đất cho ai cày&quot;</p>
											</div>
											<div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200">
												<div className="flex items-center gap-2 mb-2">
													<span className="text-blue-500">✨</span>
													<h5 className="font-semibold text-blue-800">Ưu tiên:</h5>
												</div>
												<p className="text-blue-700">Giải phóng dân tộc khỏi ách đô hộ</p>
											</div>
										</div>

										<div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4 border border-indigo-200">
											<div className="flex items-center gap-2 mb-2">
												<span className="text-indigo-500">💡</span>
												<h5 className="font-semibold text-indigo-800">Ý nghĩa:</h5>
											</div>
											<p className="text-indigo-700">
												Đây là bước ngoặt quan trọng trong tư duy chiến lược của Đảng, từ đấu tranh
												giai cấp sang giải phóng dân tộc.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* 1940 Meeting */}
						<div className="relative">
							<div className="flex items-start gap-6">
								<div className="flex-shrink-0">
									<div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
										<span className="text-white text-2xl font-bold">1940</span>
									</div>
								</div>

								<div className="flex-1 bg-white rounded-xl p-6 shadow-lg border border-orange-100">
									<div className="space-y-4">
										<div className="flex items-center gap-3 mb-4">
											<Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2">
												11/1940
											</Badge>
											<h3 className="text-xl font-bold text-gray-800">
												Hội nghị Trung ương Đảng tại Đình Bảng, Bắc Ninh
											</h3>
										</div>

										<p className="text-gray-700 leading-relaxed">
											Hội nghị này cho thấy Trung ương Đảng vẫn còn trăn trở và chưa thật dứt khoát
											với chủ trương đã đề ra tại Hội nghị tháng 11/1939.
										</p>

										<div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 border-l-4 border-yellow-400">
											<div className="flex items-center gap-2 mb-2">
												<span className="text-yellow-500">⚠️</span>
												<h5 className="font-semibold text-yellow-800">Đặc điểm:</h5>
											</div>
											<p className="text-yellow-700">
												Vẫn còn dao động giữa cách mạng dân tộc và cách mạng dân chủ tư sản, chưa
												thật quyết đoán trong việc thay đổi chiến lược.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* 8th Central Committee Meeting */}
				<Card className="overflow-hidden shadow-2xl bg-gradient-to-br from-white to-purple-50 border-0 pt-0">
					<CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white relative overflow-hidden">
						<div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-indigo-600/90"></div>
						<div className="absolute -right-20 -top-20 w-40 h-40 bg-white/10 rounded-full"></div>
						<div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full"></div>
						<CardTitle className="text-3xl font-bold flex items-center gap-3 relative z-10 h-16">
							<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
								<span className="text-2xl">🎯</span>
							</div>
							Hội nghị Trung ương 8 (5/1941) - Hoàn chỉnh Chủ trương Chiến lược
						</CardTitle>
					</CardHeader>
					<CardContent className="p-8 space-y-8">
						{/* Introduction */}
						<div className="relative bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 rounded-xl p-6 border border-purple-100">
							<div className="absolute top-4 right-4">
								<div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center">
									<span className="text-white text-2xl">👤</span>
								</div>
							</div>
							<p className="text-gray-700 leading-relaxed pr-20">
								Sau 30 năm hoạt động ở nước ngoài, lãnh tụ{" "}
								<span className="font-bold text-purple-700 bg-purple-100 px-2 py-1 rounded">
									Nguyễn Ái Quốc
								</span>{" "}
								về nước (28/1/1941) và chủ trì Hội nghị lần thứ tám Ban Chấp hành Trung ương Đảng
								tại Cao Bằng. Hội nghị này đã hoàn chỉnh chủ trương chiến lược giải phóng dân tộc,
								khắc phục triệt để những hạn chế trước đó.
							</p>
						</div>

						{/* Main Points Grid */}
						<div className="grid gap-6">
							{meetingPoints.map((point, index) => (
								<div
									key={index}
									className="group relative bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
								>
									{/* Background gradient effect */}
									<div
										className={`absolute inset-0 bg-gradient-to-r ${point.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}
									></div>

									<div className="relative flex gap-6">
										{/* Number Circle */}
										<div className="flex-shrink-0">
											<div
												className={`w-16 h-16 bg-gradient-to-br ${point.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
											>
												{point.number}
											</div>
										</div>

										{/* Content */}
										<div className="flex-1 space-y-4">
											<div className="flex items-center gap-3">
												<div
													className={`p-2 bg-gradient-to-br ${point.color} rounded-lg text-white`}
												>
													{point.icon}
												</div>
												<div
													className={`h-1 flex-1 bg-gradient-to-r ${point.color} rounded-full opacity-30`}
												></div>
											</div>

											<p className="text-gray-700 leading-relaxed">{point.content}</p>

											{point.quote && (
												<div className="relative mt-4">
													<div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-400 to-indigo-400 rounded-full"></div>
													<blockquote className="text-purple-600 italic pl-6 py-2 bg-purple-50/50 rounded-r-lg border-l-0">
														<span className="text-purple-400 text-2xl font-serif">&ldquo;</span>
														{point.quote}
														<span className="text-purple-400 text-2xl font-serif">&rdquo;</span>
													</blockquote>
												</div>
											)}
										</div>
									</div>
								</div>
							))}
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
