"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import { ArrowLeft, Calendar, Sword, Target, TrendingUp } from "lucide-react";

export default function AntiJapaneseMovement() {
	const handleBackButtonClick = () => {
		window.history.back();
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
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
						<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent leading-tight">
							Cao trào Kháng Nhật Cứu nước
						</h1>
						<h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
							và Tiến tới Tổng Khởi nghĩa
						</h2>
						<div className="flex items-center justify-center gap-3 mt-6">
							<Calendar className="w-6 h-6 text-red-600" />
							<p className="text-xl font-medium text-gray-600">(3/1945 - 8/1945)</p>
						</div>
					</div>
					<div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
				</div>

				<Card className="overflow-hidden shadow-2xl bg-gradient-to-br from-white to-red-50 border-0 pt-0">
					<CardHeader className="bg-gradient-to-r from-red-600 to-orange-600 text-white relative overflow-hidden">
						<div className="absolute inset-0 bg-gradient-to-r from-red-600/90 to-orange-600/90"></div>
						<div className="absolute -right-20 -top-20 w-40 h-40 bg-white/10 rounded-full"></div>
						<div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full"></div>
						<CardTitle className="text-3xl font-bold flex items-center gap-3 relative z-10 h-16">
							<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
								<Sword className="w-6 h-6" />
							</div>
							Sự kiện Nhật đảo chính Pháp và Chủ trương của Đảng
						</CardTitle>
					</CardHeader>
					<CardContent className="p-8 space-y-8">
						{/* March 9 Coup */}
						<div className="relative flex items-start gap-8 group">
							<div className="relative z-10 flex-shrink-0 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg transform group-hover:scale-110 transition-all duration-300">
								💥
								<div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
							</div>

							<div className="flex-1 bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform group-hover:-translate-y-1 group-hover:shadow-xl transition-all duration-300">
								<div className="space-y-3">
									<Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white border-0 px-4 py-1">
										9/3/1945
									</Badge>
									<h3 className="text-xl font-bold text-gray-800">Đảo chính 9 tháng 3</h3>
									<p className="text-gray-600 leading-relaxed">
										Nhật nổ súng đảo chính lật đổ Pháp, độc chiếm Đông Dương.
									</p>
								</div>
							</div>
						</div>

						{/* Party Directive */}
						<div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border-l-4 border-red-400 shadow-lg">
							<div className="space-y-6">
								{/* Directive Title */}
								<div className="flex items-start gap-4">
									<div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
										<span className="text-red-600 text-2xl">📋</span>
									</div>
									<div className="flex-1">
										<h4 className="font-bold text-red-800 text-xl mb-3">
											Chỉ thị của Trung ương Đảng (12/3/1945):
										</h4>
										<blockquote className="text-red-700 italic text-lg bg-white/70 p-4 rounded-lg border border-red-200">
											<span className="text-red-400 text-2xl font-serif">&ldquo;</span>
											Giờ đây là lúc quyết định, đảng ta phải lãnh đạo toàn dân kháng Nhật cứu nước
											<span className="text-red-400 text-2xl font-serif">&rdquo;</span>
										</blockquote>
									</div>
								</div>

								{/* Tasks and Slogans */}
								<div className="grid md:grid-cols-2 gap-6">
									{/* Immediate Tasks */}
									<div className="bg-gradient-to-br from-red-100 to-pink-100 rounded-xl p-4 border border-red-200">
										<div className="flex items-center gap-3 mb-3">
											<span className="text-2xl">🎯</span>
											<h5 className="font-bold text-red-800 text-lg">Nhiệm vụ trước mắt:</h5>
										</div>
										<div className="space-y-2">
											{[
												"Tuyên truyền mạnh mẽ chủ trương kháng Nhật",
												"Tập hợp mọi lực lượng yêu nước",
												"Chuẩn bị vũ khí, lương thực",
												"Mở rộng căn cứ địa",
											].map((task, index) => (
												<div
													key={index}
													className="flex items-center gap-2 text-red-700 bg-white rounded p-2 shadow-sm"
												>
													<span className="text-red-500">•</span>
													<span className="text-sm">{task}</span>
												</div>
											))}
										</div>
									</div>

									{/* Action Slogans */}
									<div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl p-4 border border-orange-200">
										<div className="flex items-center gap-3 mb-3">
											<span className="text-2xl">📢</span>
											<h5 className="font-bold text-orange-800 text-lg">Khẩu hiệu hành động:</h5>
										</div>
										<div className="space-y-2">
											{[
												'"Đánh đuổi phát xít Nhật"',
												'"Cứu nước cứu dân"',
												'"Độc lập hay là chết"',
												'"Tất cả cho tiền tuyến"',
											].map((slogan, index) => (
												<div
													key={index}
													className="flex items-center gap-2 text-orange-700 bg-white rounded p-2 shadow-sm"
												>
													<span className="text-orange-500">•</span>
													<span className="text-sm font-medium">{slogan}</span>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Anti-Japanese Movement Development */}
				<Card className="overflow-hidden shadow-2xl bg-gradient-to-br from-white to-emerald-50 border-0 pt-0">
					<CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white relative overflow-hidden">
						<div className="absolute inset-0 bg-gradient-to-r from-emerald-600/90 to-teal-600/90"></div>
						<div className="absolute -right-20 -top-20 w-40 h-40 bg-white/10 rounded-full"></div>
						<div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full"></div>
						<CardTitle className="text-3xl font-bold flex items-center gap-3 relative z-10 h-16">
							<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
								<TrendingUp className="w-6 h-6" />
							</div>
							Diễn biến Cao trào
						</CardTitle>
					</CardHeader>
					<CardContent className="p-8 space-y-8">
						{/* Favorable Context */}
						<div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border-l-4 border-emerald-400 shadow-lg">
							<div className="flex items-center gap-3 mb-4">
								<span className="text-2xl">🌟</span>
								<h4 className="font-bold text-emerald-800 text-xl">Bối cảnh thuận lợi:</h4>
							</div>
							<div className="grid gap-3">
								{[
									"Nhật bại trận liên tiếp trên các mặt trận Thái Bình Dương",
									"Bộ máy thống trị Pháp bị xóa bỏ, tạo ra khoảng trống quyền lực",
									"Chính quyền Nhật yếu ớt, không kiểm soát được tình hình",
									"Nhân dân căm thù sâu sắc chế độ Pháp-Nhật",
								].map((point, index) => (
									<div
										key={index}
										className="flex items-center gap-3 text-emerald-700 bg-white rounded p-3 shadow-sm"
									>
										<span className="text-emerald-500 text-lg">✓</span>
										<span>{point}</span>
									</div>
								))}
							</div>
						</div>

						{/* April Conference */}
						<div className="relative flex items-start gap-8 group">
							<div className="relative z-10 flex-shrink-0 w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg transform group-hover:scale-110 transition-all duration-300">
								🏛️
								<div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
							</div>

							<div className="flex-1 bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform group-hover:-translate-y-1 group-hover:shadow-xl transition-all duration-300">
								<div className="space-y-3">
									<Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 px-4 py-1">
										Tháng 4/1945
									</Badge>
									<h3 className="text-xl font-bold text-gray-800">
										Hội nghị Trung ương mở rộng tại Hiệp Hòa
									</h3>
									<p className="text-gray-600 leading-relaxed">
										Quyết định phát động cao trào &quot;Kháng Nhật cứu nước&quot; trên phạm vi toàn
										quốc, chuẩn bị điều kiện cho tổng khởi nghĩa.
									</p>
								</div>
							</div>
						</div>

						{/* Movement Development */}
						<div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-400 shadow-lg">
							<div className="flex items-center gap-3 mb-6">
								<span className="text-2xl">📈</span>
								<h4 className="font-bold text-green-800 text-xl">Diễn biến cao trào:</h4>
							</div>
							<div className="grid md:grid-cols-2 gap-6">
								{/* Northern Region */}
								<div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-4 border border-green-200">
									<div className="flex items-center gap-3 mb-3">
										<span className="text-xl">🏔️</span>
										<h5 className="font-bold text-green-800 text-lg">Miền Bắc:</h5>
									</div>
									<div className="space-y-2">
										{[
											"Vùng giải phóng mở rộng từ 6 tỉnh lên gần nửa miền Bắc",
											"Lực lượng vũ trang phát triển nhanh chóng",
											"Chính quyền cách mạng được thiết lập ở nhiều địa phương",
										].map((item, index) => (
											<div
												key={index}
												className="flex items-center gap-2 text-green-700 bg-white rounded p-2 shadow-sm"
											>
												<span className="text-green-500">•</span>
												<span className="text-sm">{item}</span>
											</div>
										))}
									</div>
								</div>

								{/* Central-Southern Region */}
								<div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl p-4 border border-teal-200">
									<div className="flex items-center gap-3 mb-3">
										<span className="text-xl">🌊</span>
										<h5 className="font-bold text-teal-800 text-lg">Miền Trung - Nam:</h5>
									</div>
									<div className="space-y-2">
										{[
											"Phong trào đấu tranh chính trị sôi nổi",
											"Các tổ chức Việt Minh phát triển mạnh",
											"Nhân dân tích cực chuẩn bị khởi nghĩa",
										].map((item, index) => (
											<div
												key={index}
												className="flex items-center gap-2 text-teal-700 bg-white rounded p-2 shadow-sm"
											>
												<span className="text-teal-500">•</span>
												<span className="text-sm">{item}</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>

						{/* Important Achievements */}
						<div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border-l-4 border-yellow-400 shadow-lg">
							<div className="flex items-center gap-3 mb-4">
								<span className="text-2xl">🏆</span>
								<h4 className="font-bold text-yellow-800 text-xl">Thành tựu quan trọng:</h4>
							</div>
							<div className="grid md:grid-cols-2 gap-4">
								{[
									"Quân đội nhân dân phát triển lên vài nghìn người",
									"Vùng giải phóng có dân số khoảng 1 triệu người",
									"Mặt trận Việt Minh có ảnh hưởng trên toàn quốc",
									"Uy tín của Đảng và Hồ Chí Minh ngày càng cao",
								].map((achievement, index) => (
									<div
										key={index}
										className="flex items-center gap-3 text-yellow-700 bg-white rounded p-3 shadow-sm"
									>
										<span className="text-yellow-500 text-lg">★</span>
										<span className="text-sm">{achievement}</span>
									</div>
								))}
							</div>
						</div>

						{/* Historical Significance */}
						<div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg border border-blue-200">
							<div className="flex items-start gap-4">
								<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
									<span className="text-blue-600 text-2xl">🎯</span>
								</div>
								<div className="flex-1">
									<h4 className="font-bold text-blue-800 text-xl mb-3">Ý nghĩa lịch sử:</h4>
									<p className="text-blue-700 leading-relaxed bg-white/70 p-4 rounded-lg border border-blue-200">
										Cao trào kháng Nhật cứu nước đã tạo ra thế và lực cách mạng, chuẩn bị đầy đủ
										điều kiện chủ quan và khách quan cho cuộc Tổng khởi nghĩa Tháng Tám thành công.
									</p>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Preparation for General Uprising */}
				<Card className="overflow-hidden shadow-2xl bg-gradient-to-br from-white to-amber-50 border-0 pt-0">
					<CardHeader className="bg-gradient-to-r from-amber-600 to-orange-600 text-white relative overflow-hidden">
						<div className="absolute inset-0 bg-gradient-to-r from-amber-600/90 to-orange-600/90"></div>
						<div className="absolute -right-20 -top-20 w-40 h-40 bg-white/10 rounded-full"></div>
						<div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full"></div>
						<CardTitle className="text-3xl font-bold flex items-center gap-3 relative z-10 h-16">
							<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
								<Target className="w-6 h-6" />
							</div>
							Chuẩn bị Tổng Khởi nghĩa
						</CardTitle>
					</CardHeader>
					<CardContent className="p-8 space-y-8">
						{/* July Preparation */}
						<div className="relative flex items-start gap-8 group">
							<div className="relative z-10 flex-shrink-0 w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg transform group-hover:scale-110 transition-all duration-300">
								⚡<div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
							</div>

							<div className="flex-1 bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform group-hover:-translate-y-1 group-hover:shadow-xl transition-all duration-300">
								<div className="space-y-3">
									<Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 px-4 py-1">
										Tháng 7/1945
									</Badge>
									<h3 className="text-xl font-bold text-gray-800">Chuẩn bị tổng khởi nghĩa</h3>
									<p className="text-gray-600 leading-relaxed">
										Đảng chỉ thị chuẩn bị mọi điều kiện cho cuộc tổng khởi nghĩa giành chính quyền
										toàn quốc khi thời cơ chín muồi.
									</p>
								</div>
							</div>
						</div>

						{/* Ready Conditions */}
						<div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-6 border-l-4 border-amber-400 shadow-lg">
							<div className="flex items-center gap-3 mb-6">
								<span className="text-2xl">✅</span>
								<h4 className="font-bold text-amber-800 text-xl">Các điều kiện đã sẵn sàng:</h4>
							</div>
							<div className="grid md:grid-cols-2 gap-6">
								{/* Forces */}
								<div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl p-4 border border-amber-200">
									<div className="flex items-center gap-3 mb-3">
										<span className="text-xl">💪</span>
										<h5 className="font-bold text-amber-800 text-lg">Lực lượng:</h5>
									</div>
									<div className="space-y-2">
										{[
											"Quân đội cách mạng có kinh nghiệm chiến đấu",
											"Mặt trận Việt Minh rộng khắp",
											"Nhân dân giác ngộ cao",
										].map((force, index) => (
											<div
												key={index}
												className="flex items-center gap-2 text-amber-700 bg-white rounded p-2 shadow-sm"
											>
												<span className="text-amber-500">•</span>
												<span className="text-sm">{force}</span>
											</div>
										))}
									</div>
								</div>

								{/* Conditions */}
								<div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-xl p-4 border border-orange-200">
									<div className="flex items-center gap-3 mb-3">
										<span className="text-xl">🎯</span>
										<h5 className="font-bold text-orange-800 text-lg">Điều kiện:</h5>
									</div>
									<div className="space-y-2">
										{["Vùng giải phóng vững chắc", "Đường lối đúng đắn", "Lãnh đạo thống nhất"].map(
											(condition, index) => (
												<div
													key={index}
													className="flex items-center gap-2 text-orange-700 bg-white rounded p-2 shadow-sm"
												>
													<span className="text-orange-500">•</span>
													<span className="text-sm">{condition}</span>
												</div>
											)
										)}
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
