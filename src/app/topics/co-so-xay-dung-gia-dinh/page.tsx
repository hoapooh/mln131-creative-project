import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Building2, Scale, BookOpen, Heart } from "lucide-react";

const CoSoXayDungGiaDinhPage = () => {
	return (
		<div className="pt-[65px] min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
			<div className="max-w-6xl mx-auto px-4 py-12">
				{/* Navigation */}
				<div className="flex items-center space-x-4 mb-8">
					<Link href="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
						<ArrowLeft size={20} />
						<span>Trở về trang chính</span>
					</Link>
				</div>

				{/* Header */}
				<div className="text-center mb-16">
					<h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6 leading-20">
						Cơ sở xây dựng gia đình
					</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Khám phá những nền tảng vững chắc để xây dựng một gia đình hạnh phúc và bền vững
					</p>
				</div>

				{/* Hero Image */}
				<div className="relative mb-16 rounded-3xl overflow-hidden shadow-2xl">
					<Image
						src="https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
						alt="Gia đình xây dựng hạnh phúc"
						width={2070}
						height={384}
						className="w-full h-64 md:h-96 object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
					<div className="absolute bottom-8 left-8 text-white">
						<h2 className="text-2xl md:text-3xl font-bold mb-2">Xây dựng gia đình vững mạnh</h2>
						<p className="text-lg opacity-90">Trên nền tảng các giá trị bền vững</p>
					</div>
				</div>

				{/* Cơ sở kinh tế - xã hội, chính trị - xã hội, văn hóa */}
				<section className="mb-16">
					<div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold text-gray-900 mb-4">Cơ sở hiện đại xây dựng gia đình</h2>
							<p className="text-lg text-gray-600">Những nền tảng cơ bản trong xã hội hiện đại</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
							{/* Cơ sở kinh tế - xã hội */}
							<div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200">
								<div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mb-4">
									<Building2 className="text-green-600" size={24} />
								</div>
								<h3 className="text-lg font-bold text-green-800 mb-3">Kinh tế - xã hội</h3>
								<p className="text-green-700 text-sm">
									Xóa bỏ chế độ tư hữu về tư liệu sản xuất để tạo cơ sở cho sự bình đẳng và giải phóng phụ nữ
								</p>
							</div>

							{/* Cơ sở chính trị - xã hội */}
							<div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
								<div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mb-4">
									<Scale className="text-blue-600" size={24} />
								</div>
								<h3 className="text-lg font-bold text-blue-800 mb-3">Chính trị - xã hội</h3>
								<p className="text-blue-700 text-sm">
									Thiết lập nhà nước xã hội chủ nghĩa ban hành hệ thống pháp luật mới như Luật Hôn nhân
								</p>
							</div>

							{/* Cơ sở văn hóa */}
							<div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200">
								<div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mb-4">
									<BookOpen className="text-purple-600" size={24} />
								</div>
								<h3 className="text-lg font-bold text-purple-800 mb-3">Văn hóa</h3>
								<p className="text-purple-700 text-sm">
									Xây dựng nền văn hóa mới, nâng cao dân trí, loại bỏ các phong tục lạc hậu
								</p>
							</div>

							{/* Chế độ hôn nhân */}
							<div className="p-6 bg-gradient-to-br from-rose-50 to-red-50 rounded-2xl border border-rose-200">
								<div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-red-100 rounded-xl flex items-center justify-center mb-4">
									<Heart className="text-rose-600" size={24} />
								</div>
								<h3 className="text-lg font-bold text-rose-800 mb-3">Hôn nhân tiến bộ</h3>
								<p className="text-rose-700 text-sm">
									Thực hiện hôn nhân dựa trên ba nguyên tắc: tự nguyện, một vợ một chồng, được pháp lý bảo vệ
								</p>
							</div>
						</div>

						{/* Nguyên tắc hôn nhân chi tiết */}
						<div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl p-8">
							<h3 className="text-2xl font-bold text-rose-800 mb-6 text-center">Ba nguyên tắc hôn nhân tiến bộ</h3>
							<div className="grid md:grid-cols-3 gap-6">
								<div className="text-center">
									<div className="w-16 h-16 bg-rose-200 rounded-full mx-auto mb-4 flex items-center justify-center">
										<span className="text-2xl">💕</span>
									</div>
									<h4 className="font-bold text-rose-800 mb-2">Tự nguyện</h4>
									<p className="text-rose-700 text-sm">Xuất phát từ tình yêu chân thành</p>
								</div>
								<div className="text-center">
									<div className="w-16 h-16 bg-pink-200 rounded-full mx-auto mb-4 flex items-center justify-center">
										<span className="text-2xl">⚖️</span>
									</div>
									<h4 className="font-bold text-pink-800 mb-2">Bình đẳng</h4>
									<p className="text-pink-700 text-sm">Một vợ một chồng, ngang hàng quyền lợi</p>
								</div>
								<div className="text-center">
									<div className="w-16 h-16 bg-red-200 rounded-full mx-auto mb-4 flex items-center justify-center">
										<span className="text-2xl">📜</span>
									</div>
									<h4 className="font-bold text-red-800 mb-2">Pháp lý</h4>
									<p className="text-red-700 text-sm">Được bảo vệ bởi luật pháp</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Cơ sở truyền thống */}
				<section className="mb-16">
					<div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-100">
						<div className="flex items-center mb-8">
							<div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center mr-4">
								<span className="text-2xl">🏛️</span>
							</div>
							<h2 className="text-3xl font-bold text-gray-900">Cơ sở truyền thống</h2>
						</div>

						<div className="mb-8">
							<p className="text-lg text-gray-700 leading-relaxed mb-6">
								Gia đình Việt Nam được hình thành và phát triển trên nền tảng các giá trị đạo đức, văn hóa lâu đời.
							</p>
							<h3 className="text-xl font-bold text-amber-800 mb-4">Những giá trị truyền thống tốt đẹp:</h3>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
							<div className="p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl border border-amber-200">
								<div className="text-center mb-4">
									<span className="text-4xl">💛</span>
								</div>
								<h4 className="font-bold text-amber-800 mb-2 text-center">Tình yêu thương</h4>
								<p className="text-amber-700 text-sm text-center">
									Đoàn kết, đùm bọc lẫn nhau giữa các thành viên trong gia đình
								</p>
							</div>

							<div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-200">
								<div className="text-center mb-4">
									<span className="text-4xl">🙏</span>
								</div>
								<h4 className="font-bold text-orange-800 mb-2 text-center">Lòng hiếu thảo</h4>
								<p className="text-orange-700 text-sm text-center">Thủy chung, nghĩa tình, tôn trọng ông bà, cha mẹ</p>
							</div>

							<div className="p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl border border-green-200">
								<div className="text-center mb-4">
									<span className="text-4xl">💪</span>
								</div>
								<h4 className="font-bold text-green-800 mb-2 text-center">Đạo lý truyền thống</h4>
								<p className="text-green-700 text-sm text-center">
									&ldquo;Uống nước nhớ nguồn&rdquo;, sống nhân nghĩa, tiết kiệm, cần cù
								</p>
							</div>
						</div>

						<div className="mt-8 p-6 bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl">
							<p className="text-amber-800 font-medium text-center">
								Những giá trị này tạo nên nền tảng đạo đức vững chắc, góp phần giữ gìn bản sắc văn hóa dân tộc
							</p>
						</div>
					</div>
				</section>

				{/* Cơ sở hiện đại */}
				<section className="mb-16">
					<div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-cyan-100">
						<div className="flex items-center mb-8">
							<div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center mr-4">
								<span className="text-2xl">🌟</span>
							</div>
							<h2 className="text-3xl font-bold text-gray-900">Cơ sở hiện đại</h2>
						</div>

						<div className="mb-8">
							<p className="text-lg text-gray-700 leading-relaxed">
								Trong thời kỳ quá độ lên chủ nghĩa xã hội, gia đình được xây dựng trên cơ sở các nguyên tắc mới:
							</p>
						</div>

						<div className="space-y-6">
							<div className="p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl border-l-4 border-cyan-500">
								<div className="flex items-center mb-3">
									<span className="text-2xl mr-3">💍</span>
									<h4 className="font-bold text-cyan-800">Hôn nhân tiến bộ</h4>
								</div>
								<p className="text-cyan-700">Tự nguyện, một vợ một chồng, bình đẳng giới</p>
							</div>

							<div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border-l-4 border-indigo-500">
								<div className="flex items-center mb-3">
									<span className="text-2xl mr-3">🤝</span>
									<h4 className="font-bold text-indigo-800">Quan hệ dân chủ</h4>
								</div>
								<p className="text-indigo-700">Tôn trọng và chia sẻ giữa các thành viên gia đình</p>
							</div>

							<div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-l-4 border-green-500">
								<div className="flex items-center mb-3">
									<span className="text-2xl mr-3">💰</span>
									<h4 className="font-bold text-green-800">Đời sống ổn định</h4>
								</div>
								<p className="text-green-700">Kinh tế ổn định, lao động chính đáng, hướng tới ấm no và hạnh phúc</p>
							</div>

							<div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border-l-4 border-purple-500">
								<div className="flex items-center mb-3">
									<span className="text-2xl mr-3">📚</span>
									<h4 className="font-bold text-purple-800">Nếp sống văn hóa</h4>
								</div>
								<p className="text-purple-700">Sống và làm việc theo pháp luật, giáo dục con cái toàn diện</p>
							</div>
						</div>

						<div className="mt-8 p-6 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-2xl">
							<p className="text-cyan-800 font-medium text-center">
								Gia đình hiện đại không chỉ duy trì nòi giống mà còn là môi trường văn hóa - giáo dục, góp phần hình
								thành con người mới xã hội chủ nghĩa
							</p>
						</div>
					</div>
				</section>

				{/* Navigation */}
				<div className="grid md:grid-cols-2 gap-6">
					<Link
						href="/topics/khai-niem-vi-tri-chuc-nang"
						className="p-6 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl text-white hover:shadow-2xl transition-all duration-300 group"
					>
						<div className="flex items-center justify-between">
							<div>
								<p className="text-emerald-100 mb-2">Chủ đề trước</p>
								<h3 className="text-xl font-bold">Khái niệm, vị trí và chức năng</h3>
							</div>
							<ArrowLeft className="group-hover:-translate-x-2 transition-transform" size={24} />
						</div>
					</Link>

					<Link
						href="/topics/xay-dung-gia-dinh-viet-nam"
						className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl text-white hover:shadow-2xl transition-all duration-300 group"
					>
						<div className="flex items-center justify-between">
							<div>
								<p className="text-blue-100 mb-2">Chủ đề tiếp theo</p>
								<h3 className="text-xl font-bold">Xây dựng gia đình Việt Nam</h3>
							</div>
							<ArrowLeft className="rotate-180 group-hover:translate-x-2 transition-transform" size={24} />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CoSoXayDungGiaDinhPage;
