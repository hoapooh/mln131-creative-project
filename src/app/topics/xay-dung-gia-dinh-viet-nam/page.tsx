import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Flag, Star, Target } from "lucide-react";

const XayDungGiaDinhVietNamPage = () => {
	return (
		<div className="pt-[65px] min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
			<div className="max-w-6xl mx-auto px-4 py-12">
				{/* Navigation */}
				<div className="flex items-center space-x-4 mb-8">
					<Link href="/" className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors">
						<ArrowLeft size={20} />
						<span>Trở về trang chính</span>
					</Link>
				</div>

				{/* Header */}
				<div className="text-center mb-16">
					<h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-600 via-yellow-600 to-red-600 bg-clip-text text-transparent mb-6 leading-20">
						Xây dựng gia đình Việt Nam
					</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Kế thừa truyền thống tốt đẹp và phát huy yếu tố hiện đại để xây dựng gia đình Việt Nam mới
					</p>
				</div>

				{/* Hero Image */}
				<div className="relative mb-16 rounded-3xl overflow-hidden shadow-2xl">
					<Image
						src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/07/hinh-anh-gia-dinh-hanh-phuc.jpg"
						alt="Gia đình Việt Nam truyền thống"
						width={2070}
						height={384}
						className="w-full h-64 md:h-96 object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
					<div className="absolute bottom-8 left-8 text-white">
						<h2 className="text-2xl md:text-3xl font-bold mb-2">Gia đình Việt Nam</h2>
						<p className="text-lg opacity-90">Hài hòa giữa truyền thống và hiện đại</p>
					</div>
				</div>

				{/* Kế thừa truyền thống */}
				<section className="mb-16">
					<div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-red-100">
						<div className="flex items-center mb-8">
							<div className="w-12 h-12 bg-gradient-to-br from-red-100 to-yellow-100 rounded-xl flex items-center justify-center mr-4">
								<Flag className="text-red-600" size={24} />
							</div>
							<h2 className="text-3xl font-bold text-gray-900">Kế thừa truyền thống</h2>
						</div>

						<div className="mb-8">
							<p className="text-lg text-gray-700 leading-relaxed">
								Giữ vững các giá trị tốt đẹp của gia đình Việt Nam như nền tảng đạo đức để hình thành con người xã hội
								chủ nghĩa.
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
							<div className="p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl border border-red-200">
								<div className="text-center mb-4">
									<span className="text-4xl">👨‍👩‍👧‍👦</span>
								</div>
								<h4 className="font-bold text-red-800 mb-3 text-center">Hiếu thảo</h4>
								<p className="text-red-700 text-sm text-center">
									Tôn kính và chăm sóc ông bà, cha mẹ với lòng biết ơn sâu sắc
								</p>
							</div>

							<div className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200">
								<div className="text-center mb-4">
									<span className="text-4xl">🤝</span>
								</div>
								<h4 className="font-bold text-yellow-800 mb-3 text-center">Đoàn kết</h4>
								<p className="text-yellow-700 text-sm text-center">
									Tương trợ, gắn bó và chia sẻ khó khăn, vui buồn cùng nhau
								</p>
							</div>

							<div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200">
								<div className="text-center mb-4">
									<span className="text-4xl">💖</span>
								</div>
								<h4 className="font-bold text-green-800 mb-3 text-center">Nhân ái</h4>
								<p className="text-green-700 text-sm text-center">
									Yêu thương, quan tâm và giúp đỡ lẫn nhau trong gia đình
								</p>
							</div>

							<div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
								<div className="text-center mb-4">
									<span className="text-4xl">💪</span>
								</div>
								<h4 className="font-bold text-blue-800 mb-3 text-center">Cần cù</h4>
								<p className="text-blue-700 text-sm text-center">Chịu khó, siêng năng trong lao động và học tập</p>
							</div>

							<div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200">
								<div className="text-center mb-4">
									<span className="text-4xl">💰</span>
								</div>
								<h4 className="font-bold text-purple-800 mb-3 text-center">Tiết kiệm</h4>
								<p className="text-purple-700 text-sm text-center">Sống giản dị, không lãng phí, biết trọng của công</p>
							</div>

							<div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl border border-cyan-200">
								<div className="text-center mb-4">
									<span className="text-4xl">🇻🇳</span>
								</div>
								<h4 className="font-bold text-cyan-800 mb-3 text-center">Yêu nước</h4>
								<p className="text-cyan-700 text-sm text-center">
									Lòng tự hào dân tộc và tinh thần đoàn kết bảo vệ Tổ quốc
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Phát huy yếu tố hiện đại */}
				<section className="mb-16">
					<div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100">
						<div className="flex items-center mb-8">
							<div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mr-4">
								<Star className="text-blue-600" size={24} />
							</div>
							<h2 className="text-3xl font-bold text-gray-900">Phát huy yếu tố hiện đại</h2>
						</div>

						<div className="mb-8">
							<p className="text-lg text-gray-700 leading-relaxed">
								Xây dựng gia đình theo hướng bình đẳng, tiến bộ, hạnh phúc và văn minh phù hợp với thời đại.
							</p>
						</div>

						<div className="space-y-6">
							<div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border-l-4 border-blue-500">
								<div className="flex items-center mb-3">
									<span className="text-2xl mr-3">⚖️</span>
									<h4 className="font-bold text-blue-800">Bình đẳng</h4>
								</div>
								<p className="text-blue-700">Đề cao vai trò của phụ nữ, tôn trọng quyền tự do cá nhân trong gia đình</p>
							</div>

							<div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-l-4 border-green-500">
								<div className="flex items-center mb-3">
									<span className="text-2xl mr-3">📈</span>
									<h4 className="font-bold text-green-800">Tiến bộ</h4>
								</div>
								<p className="text-green-700">Áp dụng khoa học, công nghệ vào đời sống gia đình và giáo dục con em</p>
							</div>

							<div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border-l-4 border-purple-500">
								<div className="flex items-center mb-3">
									<span className="text-2xl mr-3">😊</span>
									<h4 className="font-bold text-purple-800">Hạnh phúc</h4>
								</div>
								<p className="text-purple-700">
									Tạo môi trường sống vui vẻ, ấm áp, thỏa mãn nhu cầu tinh thần của mọi thành viên
								</p>
							</div>

							<div className="p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border-l-4 border-orange-500">
								<div className="flex items-center mb-3">
									<span className="text-2xl mr-3">🎓</span>
									<h4 className="font-bold text-orange-800">Văn minh</h4>
								</div>
								<p className="text-orange-700">
									Chia sẻ trách nhiệm giữa các thành viên, sống theo pháp luật và chuẩn mực xã hội
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Cơ sở xây dựng */}
				<section className="mb-16">
					<div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-purple-100">
						<div className="text-center mb-8">
							<h2 className="text-3xl font-bold text-gray-900 mb-4">Cơ sở xây dựng gia đình Việt Nam</h2>
							<p className="text-lg text-gray-600">Dựa trên sự kết hợp hài hòa các yếu tố cơ bản</p>
						</div>

						<div className="grid md:grid-cols-3 gap-6">
							<div className="p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl text-center">
								<div className="w-16 h-16 bg-red-200 rounded-full mx-auto mb-4 flex items-center justify-center">
									<span className="text-2xl">🏛️</span>
								</div>
								<h4 className="font-bold text-red-800 mb-3">Chủ trương của Đảng</h4>
								<p className="text-red-700 text-sm">Chính sách của Đảng và Nhà nước về hôn nhân - gia đình</p>
							</div>

							<div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl text-center">
								<div className="w-16 h-16 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
									<span className="text-2xl">🎓</span>
								</div>
								<h4 className="font-bold text-blue-800 mb-3">Giáo dục kết hợp</h4>
								<p className="text-blue-700 text-sm">Đạo đức truyền thống với khoa học, pháp luật hiện đại</p>
							</div>

							<div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl text-center">
								<div className="w-16 h-16 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
									<span className="text-2xl">🌱</span>
								</div>
								<h4 className="font-bold text-green-800 mb-3">Lối sống hiện đại</h4>
								<p className="text-green-700 text-sm">Phù hợp với yêu cầu phát triển của thời đại</p>
							</div>
						</div>
					</div>
				</section>

				{/* Mục tiêu */}
				<section className="mb-16">
					<div className="bg-gradient-to-r from-emerald-600/90 via-teal-500/90 to-cyan-600/90 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
						<div className="flex items-center mb-8">
							<div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
								<Target className="text-white" size={24} />
							</div>
							<h2 className="text-3xl font-bold">Mục tiêu xây dựng gia đình Việt Nam</h2>
						</div>

						<div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
							<h3 className="text-2xl font-bold mb-6 text-center">Mô hình gia đình Việt Nam mới</h3>

							<div className="grid md:grid-cols-2 gap-6 mb-6">
								<div className="space-y-4">
									<div className="flex items-center space-x-3">
										<span className="text-2xl">✨</span>
										<span className="font-semibold">Ấm no</span>
									</div>
									<div className="flex items-center space-x-3">
										<span className="text-2xl">⚖️</span>
										<span className="font-semibold">Bình đẳng</span>
									</div>
								</div>
								<div className="space-y-4">
									<div className="flex items-center space-x-3">
										<span className="text-2xl">📈</span>
										<span className="font-semibold">Tiến bộ</span>
									</div>
									<div className="flex items-center space-x-3">
										<span className="text-2xl">😊</span>
										<span className="font-semibold">Hạnh phúc</span>
									</div>
								</div>
							</div>

							<div className="grid md:grid-cols-2 gap-6">
								<div className="bg-white/10 rounded-xl p-6">
									<h4 className="font-bold mb-3">🏮 Giữ gìn bản sắc dân tộc</h4>
									<p className="text-white/90 text-sm">
										Duy trì và phát huy các giá trị văn hóa truyền thống tốt đẹp của Việt Nam
									</p>
								</div>
								<div className="bg-white/10 rounded-xl p-6">
									<h4 className="font-bold mb-3">🚀 Đáp ứng yêu cầu hiện đại</h4>
									<p className="text-white/90 text-sm">
										Phù hợp với quá trình phát triển trong thời kỳ quá độ lên chủ nghĩa xã hội
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Navigation */}
				<div className="grid md:grid-cols-2 gap-6">
					<Link
						href="/topics/co-so-xay-dung-gia-dinh"
						className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl text-white hover:shadow-2xl transition-all duration-300 group"
					>
						<div className="flex items-center justify-between">
							<div>
								<p className="text-blue-100 mb-2">Chủ đề trước</p>
								<h3 className="text-xl font-bold">Cơ sở xây dựng gia đình</h3>
							</div>
							<ArrowLeft className="group-hover:-translate-x-2 transition-transform" size={24} />
						</div>
					</Link>

					<Link
						href="/topics/gia-dinh-viet-nam-thoi-ky-4-0"
						className="p-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl text-white hover:shadow-2xl transition-all duration-300 group"
					>
						<div className="flex items-center justify-between">
							<div>
								<p className="text-purple-100 mb-2">Chủ đề tiếp theo</p>
								<h3 className="text-xl font-bold">Gia đình Việt Nam thời kỳ 4.0</h3>
							</div>
							<ArrowLeft className="rotate-180 group-hover:translate-x-2 transition-transform" size={24} />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default XayDungGiaDinhVietNamPage;
