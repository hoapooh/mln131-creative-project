import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Home, Users, Heart } from "lucide-react";

const KhaiNiemViTriChucNangPage = () => {
	return (
		<div className="pt-[65px] min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
			<div className="max-w-6xl mx-auto px-4 py-12">
				{/* Navigation */}
				<div className="flex items-center space-x-4 mb-8">
					<Link
						href="/"
						className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 transition-colors"
					>
						<ArrowLeft size={20} />
						<span>Trở về trang chính</span>
					</Link>
				</div>

				{/* Header */}
				<div className="text-center mb-16">
					<h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6 leading-20">
						Khái niệm, vị trí và chức năng của gia đình
					</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Tìm hiểu về định nghĩa, vị trí quan trọng và các chức năng cơ bản của gia đình trong xã hội
					</p>
				</div>

				{/* Hero Image */}
				<div className="relative mb-16 rounded-3xl overflow-hidden shadow-2xl">
					<Image
						src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
						alt="Gia đình hạnh phúc"
						width={2070}
						height={384}
						className="w-full h-64 md:h-96 object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
					<div className="absolute bottom-8 left-8 text-white">
						<h2 className="text-2xl md:text-3xl font-bold mb-2">Gia đình - Tế bào của xã hội</h2>
						<p className="text-lg opacity-90">Nơi bắt đầu của mọi giá trị nhân văn</p>
					</div>
				</div>

				{/* Section 1: Khái niệm */}
				<section className="mb-16">
					<div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-emerald-100">
						<div className="flex items-center mb-8">
							<div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center mr-4">
								<Home className="text-emerald-600" size={24} />
							</div>
							<h2 className="text-3xl font-bold text-gray-900">1. Khái niệm Gia đình</h2>
						</div>

						<div className="space-y-6">
							<div className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border-l-4 border-emerald-500">
								<p className="text-lg italic text-gray-700 mb-4">
									<strong>C. Mác và Ph. Ăngghen:</strong> &ldquo;Quan hệ thứ ba tham dự ngay từ đầu vào quá trình phát
									triển lịch sử: hàng ngày tái tạo ra đời sống của bản thân mình, con người bắt đầu tạo ra những người
									khác, sinh sôi nảy nở - đó là quan hệ giữa chồng và vợ, cha mẹ và con cái, đó là gia đình&rdquo;
								</p>
							</div>

							<p className="text-lg text-gray-700 leading-relaxed">
								Gia đình là một <strong>hình thức cộng đồng xã hội đặc biệt</strong>, được hình thành, duy trì và củng
								cố chủ yếu dựa trên:
							</p>

							<div className="grid md:grid-cols-3 gap-6">
								<div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
									<h4 className="font-bold text-blue-800 mb-2">Cơ sở hôn nhân</h4>
									<p className="text-blue-700">Quan hệ pháp lý giữa vợ chồng</p>
								</div>
								<div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200">
									<h4 className="font-bold text-purple-800 mb-2">Quan hệ huyết thống</h4>
									<p className="text-purple-700">Mối liên kết tự nhiên cha mẹ - con cái</p>
								</div>
								<div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200">
									<h4 className="font-bold text-green-800 mb-2">Quan hệ nuôi dưỡng</h4>
									<p className="text-green-700">Nghĩa vụ chăm sóc và giáo dục</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Section 2: Vị trí */}
				<section className="mb-16">
					<div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-emerald-100">
						<div className="flex items-center mb-8">
							<div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center mr-4">
								<Users className="text-emerald-600" size={24} />
							</div>
							<h2 className="text-3xl font-bold text-gray-900">2. Vị trí của Gia đình</h2>
						</div>

						<div className="space-y-8">
							{/* 2.1 Tế bào xã hội */}
							<div>
								<h3 className="text-2xl font-bold text-emerald-700 mb-4">2.1 Là tế bào của xã hội</h3>
								<div className="grid md:grid-cols-2 gap-6">
									<div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
										<h4 className="font-bold text-orange-800 mb-3">Vai trò quyết định</h4>
										<p className="text-orange-700">
											Gia đình là đơn vị cơ sở đầu tiên, trực tiếp tham gia vào hai quá trình quan trọng:
											<strong> sản xuất ra tư liệu sinh hoạt</strong> và <strong>sản xuất ra bản thân con người</strong>
										</p>
									</div>
									<div className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl">
										<h4 className="font-bold text-teal-800 mb-3">Tính chất tự nhiên</h4>
										<p className="text-teal-700">
											Là tế bào tự nhiên, đơn vị không thể thiếu để duy trì sự sống và trường tồn của xã hội
										</p>
									</div>
								</div>
								<div className="mt-4 p-6 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-2xl">
									<p className="text-emerald-800 font-medium">
										<strong>Mối quan hệ:</strong> Gia đình tốt thì xã hội tốt, xã hội tốt thì gia đình càng tốt
									</p>
								</div>
							</div>

							{/* 2.2 Tổ ấm */}
							<div>
								<h3 className="text-2xl font-bold text-emerald-700 mb-4">2.2 Là tổ ấm, mang lại hạnh phúc</h3>
								<div className="space-y-4">
									<div className="p-6 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl border-l-4 border-pink-400">
										<h4 className="font-bold text-pink-800 mb-2">Môi trường phát triển</h4>
										<p className="text-pink-700">
											Nơi mỗi cá nhân được yêu thương, nuôi dưỡng, chăm sóc về cả vật chất lẫn tinh thần
										</p>
									</div>
									<div className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border-l-4 border-yellow-400">
										<h4 className="font-bold text-yellow-800 mb-2">Giá trị hạnh phúc</h4>
										<p className="text-yellow-700">
											Mang lại sự hòa hợp, chia sẻ, cảm thông và sự bình yên. Là nguồn động viên vững chắc
										</p>
									</div>
									<div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border-l-4 border-indigo-400">
										<h4 className="font-bold text-indigo-800 mb-2">Tiền đề nhân cách</h4>
										<p className="text-indigo-700">
											Điều kiện quan trọng cho sự hình thành nhân cách, phát triển thể lực và trí lực
										</p>
									</div>
								</div>
							</div>

							{/* 2.3 Cầu nối */}
							<div>
								<h3 className="text-2xl font-bold text-emerald-700 mb-4">2.3 Là cầu nối giữa cá nhân với xã hội</h3>
								<div className="grid md:grid-cols-3 gap-6">
									<div className="p-6 bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl text-center">
										<div className="w-16 h-16 bg-violet-200 rounded-full mx-auto mb-4 flex items-center justify-center">
											<span className="text-2xl">👥</span>
										</div>
										<h4 className="font-bold text-violet-800 mb-2">Cộng đồng đầu tiên</h4>
										<p className="text-violet-700 text-sm">Môi trường ban đầu học hỏi các quan hệ xã hội</p>
									</div>
									<div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl text-center">
										<div className="w-16 h-16 bg-cyan-200 rounded-full mx-auto mb-4 flex items-center justify-center">
											<span className="text-2xl">🎓</span>
										</div>
										<h4 className="font-bold text-cyan-800 mb-2">Xã hội hóa</h4>
										<p className="text-cyan-700 text-sm">Truyền bá giá trị văn hóa, đạo đức cho thế hệ</p>
									</div>
									<div className="p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl text-center">
										<div className="w-16 h-16 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
											<span className="text-2xl">🏛️</span>
										</div>
										<h4 className="font-bold text-green-800 mb-2">Kênh tác động</h4>
										<p className="text-green-700 text-sm">Nhà nước thực hiện chính sách thông qua gia đình</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Section 3: Chức năng */}
				<section className="mb-16">
					<div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-emerald-100">
						<div className="flex items-center mb-8">
							<div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center mr-4">
								<Heart className="text-emerald-600" size={24} />
							</div>
							<h2 className="text-3xl font-bold text-gray-900">3. Chức năng cơ bản của Gia đình</h2>
						</div>

						<div className="grid md:grid-cols-2 gap-8">
							{/* Chức năng 1 */}
							<div className="p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl border border-red-200">
								<div className="flex items-center mb-4">
									<span className="text-3xl mr-3">👶</span>
									<h3 className="text-xl font-bold text-red-800">Tái sản xuất ra con người</h3>
								</div>
								<div className="space-y-3">
									<p className="text-red-700 font-medium">Chức năng đặc thù (không thể thay thế)</p>
									<p className="text-red-600 text-sm">
										Điều kiện tiên quyết để xã hội duy trì và trường tồn. Trong XHCN, gắn với kế hoạch hóa gia đình
									</p>
								</div>
							</div>

							{/* Chức năng 2 */}
							<div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
								<div className="flex items-center mb-4">
									<span className="text-3xl mr-3">🎓</span>
									<h3 className="text-xl font-bold text-blue-800">Nuôi dưỡng và Giáo dục</h3>
								</div>
								<div className="space-y-3">
									<p className="text-blue-700 font-medium">Chức năng nền tảng (Xã hội hóa)</p>
									<p className="text-blue-600 text-sm">
										Trường học đầu tiên và suốt đời. Nuôi dưỡng thể chất, giáo dục nhân cách và đạo đức
									</p>
								</div>
							</div>

							{/* Chức năng 3 */}
							<div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200">
								<div className="flex items-center mb-4">
									<span className="text-3xl mr-3">💰</span>
									<h3 className="text-xl font-bold text-green-800">Kinh tế và Tổ chức tiêu dùng</h3>
								</div>
								<div className="space-y-3">
									<p className="text-green-700 font-medium">Chức năng vật chất (Đảm bảo đời sống)</p>
									<p className="text-green-600 text-sm">
										Đơn vị kinh tế tạo thu nhập, tổ chức tiêu dùng để đảm bảo đời sống vật chất ổn định
									</p>
								</div>
							</div>

							{/* Chức năng 4 */}
							<div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200">
								<div className="flex items-center mb-4">
									<span className="text-3xl mr-3">💖</span>
									<h3 className="text-xl font-bold text-purple-800">Thỏa mãn nhu cầu tâm sinh lý</h3>
								</div>
								<div className="space-y-3">
									<p className="text-purple-700 font-medium">Chức năng tinh thần (Tổ ấm)</p>
									<p className="text-purple-600 text-sm">
										Tạo giá trị tinh thần cốt lõi, là chỗ dựa tinh thần vững chắc, bảo tồn văn hóa truyền thống
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Navigation to next topic */}
				<div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 text-center shadow-2xl">
					<h3 className="text-2xl font-bold text-white mb-4">Tiếp tục tìm hiểu</h3>
					<p className="text-emerald-50 mb-6">Khám phá các cơ sở để xây dựng một gia đình vững mạnh</p>
					<Link
						href="/topics/co-so-xay-dung-gia-dinh"
						className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-emerald-600 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-200"
					>
						<span>Cơ sở xây dựng gia đình</span>
						<ArrowLeft className="rotate-180" size={20} />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default KhaiNiemViTriChucNangPage;
