import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Smartphone, TrendingUp, BarChart3, Users2 } from "lucide-react";

const GiaDinhVietNamThoiKy40Page = () => {
	return (
		<div className="pt-[65px] min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
			<div className="max-w-6xl mx-auto px-4 py-12">
				{/* Navigation */}
				<div className="flex items-center space-x-4 mb-8">
					<Link
						href="/"
						className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors"
					>
						<ArrowLeft size={20} />
						<span>Trở về trang chính</span>
					</Link>
				</div>

				{/* Header */}
				<div className="text-center mb-16">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6 leading-20">
						Gia đình Việt Nam thời kỳ 4.0
					</h1>
					<h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Truyền thống và hiện đại</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Phân tích những biến đổi của gia đình Việt Nam trong thời đại công nghệ số và cách hài hòa giữa giá trị
						truyền thống với yếu tố hiện đại
					</p>
				</div>

				{/* Hero Image */}
				<div className="relative mb-16 rounded-3xl overflow-hidden shadow-2xl">
					<Image
						src="https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2024/07/hinh-anh-gia-dinh-hanh-phuc-15.jpg.webp"
						alt="Gia đình hiện đại với công nghệ"
						width={2070}
						height={384}
						className="w-full h-64 md:h-96 object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
					<div className="absolute bottom-8 left-8 text-white">
						<h2 className="text-2xl md:text-3xl font-bold mb-2">Gia đình Việt Nam 4.0</h2>
						<p className="text-lg opacity-90">Thích ứng với thời đại số hóa</p>
					</div>
				</div>

				{/* Phần 1: Biến đổi của gia đình */}
				<section className="mb-16">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold text-gray-900 mb-4">Những biến đổi của gia đình Việt Nam</h2>
						<p className="text-lg text-gray-600">Phân tích toàn diện về sự thay đổi trong thời kỳ 4.0</p>
					</div>

					{/* Biến đổi cấu trúc và quy mô */}
					<div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-purple-100 mb-12">
						<div className="flex items-center mb-8">
							<div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center mr-4">
								<Users2 className="text-purple-600" size={24} />
							</div>
							<h3 className="text-3xl font-bold text-gray-900">1.1 Biến đổi về Cấu trúc và Quy mô</h3>
						</div>

						<div className="space-y-6">
							<div className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border-l-4 border-purple-500">
								<h4 className="font-bold text-purple-800 mb-3">Xu hướng hạt nhân hóa</h4>
								<p className="text-purple-700">
									Cấu trúc gia đình truyền thống (nhiều thế hệ) đang dần được thay thế bởi mô hình &ldquo;gia đình đơn
									(gia đình hạt nhân)&rdquo;. Mô hình này (gồm cha mẹ và con cái) đang trở nên phổ biến ở cả đô thị và
									nông thôn.
								</p>
							</div>

							<div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border-l-4 border-blue-500">
								<h4 className="font-bold text-blue-800 mb-3">Thu nhỏ quy mô gia đình</h4>
								<p className="text-blue-700">
									Gia đình Việt Nam có xu hướng &ldquo;thu nhỏ hơn so với trước kia&rdquo;. Mô hình gia đình hai thế hệ
									(cha mẹ - con cái) trở nên phổ biến, và số lượng con trong gia đình cũng ít hơn.
								</p>
							</div>

							<div className="p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border-l-4 border-orange-500">
								<h4 className="font-bold text-orange-800 mb-3">Thách thức từ sự biến đổi</h4>
								<p className="text-orange-700">
									Quá trình này tạo ra sự &ldquo;ngăn cách không gian&rdquo; và áp lực từ công việc khiến &ldquo;thời
									gian dành cho gia đình ngày càng ít đi&rdquo;. Có thể dẫn đến nguy cơ các mối quan hệ gia đình trở nên
									&ldquo;rời rạc, lỏng lẻo&rdquo;.
								</p>
							</div>
						</div>
					</div>

					{/* Biến đổi chức năng */}
					<div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100 mb-12">
						<div className="flex items-center mb-8">
							<div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mr-4">
								<BarChart3 className="text-blue-600" size={24} />
							</div>
							<h3 className="text-3xl font-bold text-gray-900">1.2 Biến đổi trong việc thực hiện Chức năng</h3>
						</div>

						<div className="grid md:grid-cols-3 gap-6">
							<div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
								<div className="text-center mb-4">
									<span className="text-4xl">💰</span>
								</div>
								<h4 className="font-bold text-green-800 mb-3 text-center">Chức năng kinh tế</h4>
								<p className="text-green-700 text-sm">
									Chuyển dịch từ mô hình &ldquo;kinh tế tự cấp tự túc&rdquo; sang &ldquo;kinh tế hàng hóa&rdquo;. Gia
									đình trở thành &ldquo;đơn vị tiêu dùng quan trọng&rdquo; của xã hội.
								</p>
							</div>

							<div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
								<div className="text-center mb-4">
									<span className="text-4xl">🎓</span>
								</div>
								<h4 className="font-bold text-blue-800 mb-3 text-center">Chức năng giáo dục</h4>
								<p className="text-blue-700 text-sm">
									Vai trò giáo dục của gia đình giảm sút khi &ldquo;giáo dục xã hội bao trùm lên giáo dục gia
									đình&rdquo;. Hướng đến &ldquo;kiến thức khoa học hiện đại&rdquo;.
								</p>
							</div>

							<div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
								<div className="text-center mb-4">
									<span className="text-4xl">👶</span>
								</div>
								<h4 className="font-bold text-purple-800 mb-3 text-center">Chức năng tái sản xuất</h4>
								<p className="text-purple-700 text-sm">
									Việc sinh đẻ được thực hiện &ldquo;một cách chủ động, tự giác&rdquo;. Quan niệm truyền thống về việc
									phải có con trai đã có &ldquo;những thay đổi căn bản&rdquo;.
								</p>
							</div>
						</div>
					</div>

					{/* Biến đổi quan hệ gia đình */}
					<div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-cyan-100">
						<div className="flex items-center mb-8">
							<div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-xl flex items-center justify-center mr-4">
								<TrendingUp className="text-cyan-600" size={24} />
							</div>
							<h3 className="text-3xl font-bold text-gray-900">1.3 Biến đổi trong các Mối quan hệ gia đình</h3>
						</div>

						<div className="space-y-6">
							<div className="grid md:grid-cols-2 gap-6">
								<div className="p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl">
									<h4 className="font-bold text-red-800 mb-3">⚠️ Sự lỏng lẻo trong quan hệ</h4>
									<p className="text-red-700 text-sm">
										Dưới tác động của cơ chế thị trường và toàn cầu hóa, gia đình đối mặt với &ldquo;quan hệ vợ chồng -
										gia đình lỏng lẻo&rdquo; và sự gia tăng &ldquo;tỷ lệ ly hôn, ly thân, ngoại tình&rdquo;.
									</p>
								</div>

								<div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
									<h4 className="font-bold text-blue-800 mb-3">🔄 Biến đổi về quyền lực</h4>
									<p className="text-blue-700 text-sm">
										Mô hình gia trưởng truyền thống không còn là duy nhất. Xuất hiện các mô hình quyền lực mới như
										&ldquo;người phụ nữ làm chủ gia đình&rdquo; và &ldquo;cả hai vợ chồng cùng làm chủ gia đình&rdquo;.
									</p>
								</div>
							</div>

							<div className="p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl">
								<h4 className="font-bold text-cyan-800 mb-3">✨ Định nghĩa lại vai trò &ldquo;chủ gia đình&rdquo;</h4>
								<p className="text-cyan-700">
									Vai trò người chủ gia đình hiện nay được quan niệm là người có &ldquo;phẩm chất, năng lực và đóng góp
									vượt trội&rdquo;. Bối cảnh kinh tế thị trường đặt ra đòi hỏi mới về việc &ldquo;người chủ gia đình
									phải là người kiếm ra nhiều tiền&rdquo;.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Phần 2: Gìn giữ truyền thống và tiếp thu hiện đại */}
				<section className="mb-16">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold text-gray-900 mb-4">
							Gìn giữ giá trị Truyền thống và tiếp thu yếu tố Hiện đại
						</h2>
						<p className="text-lg text-gray-600">
							Sự kết hợp biện chứng giữa kế thừa giá trị văn hóa truyền thống và tiếp thu giá trị tiên tiến hiện đại
						</p>
					</div>

					{/* Gìn giữ truyền thống */}
					<div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-100 mb-12">
						<div className="flex items-center mb-8">
							<div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center mr-4">
								<span className="text-2xl">🏮</span>
							</div>
							<h3 className="text-3xl font-bold text-gray-900">2.1 Gìn giữ các giá trị truyền thống</h3>
						</div>

						<div className="grid md:grid-cols-2 gap-8">
							<div className="p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl border border-amber-200">
								<h4 className="font-bold text-amber-800 mb-4 flex items-center">
									<span className="text-2xl mr-3">👨‍👩‍👧‍👦</span>
									Hiếu nghĩa
								</h4>
								<p className="text-amber-700 text-sm">
									Trách nhiệm nuôi dưỡng, chăm sóc cha mẹ già vẫn là giá trị cốt lõi. Được hiện đại hóa thông qua việc
									&ldquo;tạo dựng quan niệm bình đẳng giữa con trai và con gái trong trách nhiệm nuôi dưỡng, chăm sóc
									cha mẹ già&rdquo;.
								</p>
							</div>

							<div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
								<h4 className="font-bold text-blue-800 mb-4 flex items-center">
									<span className="text-2xl mr-3">💖</span>
									Thủy chung
								</h4>
								<p className="text-blue-700 text-sm">
									Giá trị này được khẳng định khi các hiện tượng như &ldquo;ngoại tình&rdquo; hay &ldquo;xâm hại tình
									dục&rdquo; được xem là những &ldquo;mặt trái&rdquo;, &ldquo;bi kịch&rdquo;, &ldquo;thảm án gia
									đình&rdquo;.
								</p>
							</div>

							<div className="md:col-span-2 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
								<h4 className="font-bold text-green-800 mb-4 flex items-center">
									<span className="text-2xl mr-3">🤝</span>
									Tương trợ
								</h4>
								<p className="text-green-700">
									Phong trào &ldquo;Xây dựng gia đình văn hóa&rdquo; được xem là một trong những phương hướng cơ bản,
									nhằm phát huy các giá trị truyền thống như &ldquo;hòa thuận&rdquo; và &ldquo;đoàn kết tương trợ trong
									cộng đồng dân cư&rdquo;.
								</p>
							</div>
						</div>
					</div>

					{/* Tiếp thu hiện đại */}
					<div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-indigo-100">
						<div className="flex items-center mb-8">
							<div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center mr-4">
								<Smartphone className="text-indigo-600" size={24} />
							</div>
							<h3 className="text-3xl font-bold text-gray-900">2.2 Tiếp thu các yếu tố hiện đại</h3>
						</div>

						<div className="space-y-6">
							<div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border-l-4 border-indigo-500">
								<h4 className="font-bold text-indigo-800 mb-3">⚖️ Bình đẳng</h4>
								<p className="text-indigo-700">
									Đây là giá trị hiện đại được tiếp thu rõ nét nhất. &ldquo;Sự bình đẳng nam - nữ được đề cao
									hơn&rdquo;. Thể hiện qua sự bình đẳng trong các mô hình làm chủ gia đình và bình đẳng trong nghĩa vụ
									(như việc chăm sóc cha mẹ).
								</p>
							</div>

							<div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border-l-4 border-purple-500">
								<h4 className="font-bold text-purple-800 mb-3">🗳️ Dân chủ và Chia sẻ</h4>
								<p className="text-purple-700">
									Mô hình &ldquo;cả hai vợ chồng cùng làm chủ gia đình&rdquo; chính là biểu hiện của sự dân chủ và chia
									sẻ quyền lực. Đồng thời, &ldquo;cuộc sống riêng tư của con người được tôn trọng hơn&rdquo;.
								</p>
							</div>

							<div className="p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl border-l-4 border-cyan-500">
								<h4 className="font-bold text-cyan-800 mb-3">💡 Tôn trọng năng lực</h4>
								<p className="text-cyan-700">
									Vai trò chủ gia đình hiện đại dịch chuyển từ tính gia trưởng sang việc ghi nhận &ldquo;năng lực và
									đóng góp vượt trội&rdquo;, phù hợp với nguyên tắc của xã hội hiện đại.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Kết luận */}
				<section className="mb-16">
					<div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
						<h2 className="text-3xl font-bold mb-6 text-center">Kết luận</h2>
						<div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
							<p className="text-lg leading-relaxed text-center mb-6">
								Gia đình Việt Nam thời kỳ 4.0 đang trải qua những biến đổi sâu sắc nhưng vẫn giữ được bản sắc văn hóa
								dân tộc. Sự kết hợp hài hòa giữa gìn giữ giá trị truyền thống và tiếp thu yếu tố hiện đại sẽ tạo nên một
								mô hình gia đình Việt Nam bền vững, phù hợp với xu thế phát triển của thời đại.
							</p>
							<div className="grid md:grid-cols-2 gap-6">
								<div className="text-center">
									<div className="text-4xl mb-3">🌸</div>
									<h4 className="font-bold mb-2">Giữ gìn truyền thống</h4>
									<p className="text-white/90 text-sm">Hiếu thảo, thủy chung, tương trợ</p>
								</div>
								<div className="text-center">
									<div className="text-4xl mb-3">🚀</div>
									<h4 className="font-bold mb-2">Tiếp thu hiện đại</h4>
									<p className="text-white/90 text-sm">Bình đẳng, dân chủ, tôn trọng năng lực</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Navigation */}
				<div className="grid md:grid-cols-2 gap-6">
					<Link
						href="/topics/xay-dung-gia-dinh-viet-nam"
						className="p-6 bg-gradient-to-r from-red-600 to-pink-600 rounded-3xl text-white hover:shadow-2xl transition-all duration-300 group"
					>
						<div className="flex items-center justify-between">
							<div>
								<p className="text-red-100 mb-2">Chủ đề trước</p>
								<h3 className="text-xl font-bold">Xây dựng gia đình Việt Nam</h3>
							</div>
							<ArrowLeft className="group-hover:-translate-x-2 transition-transform" size={24} />
						</div>
					</Link>

					<Link
						href="/"
						className="p-6 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl text-white hover:shadow-2xl transition-all duration-300 group"
					>
						<div className="flex items-center justify-between">
							<div>
								<p className="text-emerald-100 mb-2">Hoàn thành</p>
								<h3 className="text-xl font-bold">Trở về trang chính</h3>
							</div>
							<ArrowLeft className="rotate-180 group-hover:translate-x-2 transition-transform" size={24} />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default GiaDinhVietNamThoiKy40Page;
