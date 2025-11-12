import TopicCarousel from "@/components/topic-carousel";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { ArrowRight, Heart, HomeIcon, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
	const features = [
		{
			icon: Heart,
			title: "Giá trị truyền thống",
			description: "Gìn giữ những giá trị đạo đức tốt đẹp của gia đình Việt Nam",
		},
		{
			icon: TrendingUp,
			title: "Hiện đại hóa",
			description: "Tiếp thu những yếu tố tiến bộ của thời đại 4.0",
		},
		{
			icon: Users,
			title: "Bình đẳng",
			description: "Xây dựng mối quan hệ gia đình dân chủ và hài hòa",
		},
		{
			icon: HomeIcon,
			title: "Ổn định",
			description: "Củng cố vị trí gia đình như tế bào của xã hội",
		},
	];

	const topics = [
		{
			id: "1",
			title: "Khái niệm, vị trí và chức năng của gia đình",
			description:
				"Khám phá định nghĩa gia đình theo quan điểm Mác-Ăngghen, vị trí quan trọng như tế bào xã hội và các chức năng cơ bản: tái sản xuất, nuôi dưỡng - giáo dục, kinh tế, và thỏa mãn nhu cầu tâm sinh lý.",
			slug: "khai-niem-vi-tri-chuc-nang",
			imageUrl:
				"https://saltandlight.sg/wp-content/uploads/2019/02/50688990_10156818984563213_768264998081265664_n-2.jpg",
		},
		{
			id: "2",
			title: "Cơ sở xây dựng gia đình",
			description:
				"Tìm hiểu về các cơ sở kinh tế-xã hội, chính trị-xã hội, văn hóa và chế độ hôn nhân tiến bộ cùng những giá trị truyền thống và hiện đại làm nền tảng xây dựng gia đình.",
			slug: "co-so-xay-dung-gia-dinh",
			imageUrl:
				"https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
		},
		{
			id: "3",
			title: "Xây dựng gia đình Việt Nam",
			description:
				"Khám phá cách kế thừa truyền thống tốt đẹp như hiếu thảo, đoàn kết và phát huy yếu tố hiện đại như bình đẳng, tiến bộ để xây dựng mô hình gia đình Việt Nam mới.",
			slug: "xay-dung-gia-dinh-viet-nam",
			imageUrl:
				"https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.1.0&auto=format&fit=crop&w=1170&q=80",
		},
		{
			id: "4",
			title: "Gia đình Việt Nam thời kỳ 4.0: Truyền thống và hiện đại",
			description:
				"Phân tích những biến đổi về cấu trúc, chức năng và quan hệ gia đình trong thời đại 4.0, cùng cách gìn giữ giá trị truyền thống và tiếp thu yếu tố hiện đại.",
			slug: "gia-dinh-viet-nam-thoi-ky-4-0",
			imageUrl: "https://ngotoc.vn/uploads/news/2020_02/zing_4-1014.png",
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
			<div className="relative overflow-hidden">
				<section className="relative pt-32 pb-20 px-4">
					<div className="max-w-7xl mx-auto">
						<div className="text-center mb-16 animate-fade-in">
							<div className="inline-block mb-4">
								<span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
									Thời kỳ 4.0
								</span>
							</div>
							<h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
								Gia đình Việt Nam
							</h1>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Truyền thống và Hiện đại</h2>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
								Khám phá hành trình gìn giữ giá trị truyền thống và tiếp thu những yếu tố hiện đại trong gia đình Việt
								Nam thời kỳ cách mạng công nghiệp 4.0
							</p>
							<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
								<Link
									href={"/gallery"}
									className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
								>
									Khám phá ngay
								</Link>
								<Link
									href={"/mind-map"}
									className="px-8 py-4 bg-white text-emerald-600 border-2 border-emerald-600 rounded-xl font-semibold hover:bg-emerald-50 transform hover:scale-105 transition-all duration-200"
								>
									Xem sơ đồ tư duy
								</Link>
							</div>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
							{features.map((feature, index) => {
								const Icon = feature.icon;
								return (
									<div
										key={index}
										className="group p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
										style={{ animationDelay: `${index * 100}ms` }}
									>
										<div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
											<Icon className="text-emerald-600" size={24} />
										</div>
										<h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
										<p className="text-gray-600 leading-relaxed">{feature.description}</p>
									</div>
								);
							})}
						</div>
					</div>
				</section>

				<section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
					<div className="max-w-7xl mx-auto">
						<div className="text-center mb-12">
							<h2 className="text-4xl font-bold text-gray-900 mb-4">Các chủ đề chính</h2>
							<p className="text-lg text-gray-600">Tìm hiểu sâu hơn về các khía cạnh của gia đình Việt Nam hiện đại</p>
						</div>
						<TopicCarousel topics={topics} />
					</div>
				</section>

				<section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
					<div>
						<h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Video nổi bật</h2>
						<p className="text-lg text-gray-600 mb-12 text-center">
							Xem video giới thiệu về gia đình Việt Nam trong thời đại 4.0
						</p>
					</div>
					<div className="relative max-w-7xl mx-auto">
						<HeroVideoDialog
							className="block dark:hidden"
							animationStyle="top-in-bottom-out"
							videoSrc="https://www.youtube.com/embed/fX_VMQKt8Zk?si=8VgFP7fBhvwZyelv"
							thumbnailSrc="https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
							thumbnailAlt="Hero Video"
						/>
						<HeroVideoDialog
							className="hidden dark:block"
							animationStyle="top-in-bottom-out"
							videoSrc="https://www.youtube.com/embed/fX_VMQKt8Zk?si=8VgFP7fBhvwZyelv"
							thumbnailSrc="https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
							thumbnailAlt="Hero Video"
						/>
					</div>
				</section>

				<section className="py-20 px-4">
					<div className="max-w-4xl mx-auto bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Cùng xây dựng gia đình hạnh phúc</h2>
						<p className="text-xl text-emerald-50 mb-8">
							Khám phá thêm nhiều nội dung và tài nguyên về gia đình Việt Nam thời kỳ 4.0
						</p>
						<Link
							href={"/gallery"}
							className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-emerald-600 rounded-xl font-semibold hover:bg-emerald-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
						>
							<span>Xem thư viện ảnh</span>
							<ArrowRight size={20} />
						</Link>
					</div>
				</section>
			</div>
		</div>
	);
}
