"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import { Star, Crown, Sword, Trophy } from "lucide-react";
import VN from "country-flag-icons/react/3x2/VN";

export default function Home() {
	const sections = [
		{
			id: 1,
			title: "Bối cảnh Lịch sử và Sự Chuyển hướng Chiến lược",
			description: "Tác động của CTTG thứ 2 và các hội nghị TW Đảng (1939-1941)",
			href: "/historical-context",
			period: "1939-1941",
			image: "/1.jpg",
		},
		{
			id: 2,
			title: "Xây dựng Lực lượng và Chuẩn bị Khởi nghĩa",
			description: "Thành lập Việt Minh, xây dựng lực lượng vũ trang và căn cứ địa",
			href: "/building-forces",
			period: "1941-1945",
			image: "/2.jpg",
		},
		{
			id: 3,
			title: "Cao trào Kháng Nhật Cứu nước",
			description: "Từ sự kiện Nhật đảo chính Pháp đến chuẩn bị tổng khởi nghĩa",
			href: "/anti-japanese-movement",
			period: "3/1945 - 8/1945",
			image: "/3.jpg",
		},
		{
			id: 4,
			title: "Tổng Khởi nghĩa Tháng Tám 1945",
			description: "Giành chính quyền toàn quốc và thành lập nước VNDCCH",
			href: "/august-revolution",
			period: "Tháng 8/1945",
			image: "/4.jpg",
		},
		{
			id: 5,
			title: "Ý nghĩa Lịch sử và Bài học Kinh nghiệm",
			description: "Tầm quan trọng và các bài học từ Cách mạng Tháng Tám",
			href: "/historical-significance",
			period: "Di sản lịch sử",
			image: "/5.jpg",
		},
	];

	return (
		<div className="min-h-screen">
			<ScrollProgress className="top-[65px]" />
			<Header />

			{/* Introduction section */}
			<div className="py-16">
				<section className="w-full h-[calc(100dvh-64px)] relative flex flex-col items-center justify-center overflow-hidden">
					{/* Background Video */}
					<video
						className="absolute inset-0 w-full h-full object-cover z-0"
						src="https://res.cloudinary.com/dofnn7sbx/video/upload/v1760579013/132235-752803332_small_rljhch.mp4"
						autoPlay
						loop
						muted
						playsInline
					/>

					{/* Dark overlay for better text readability */}
					<div className="absolute inset-0 bg-black/50 z-10"></div>

					{/* Text content */}
					<div className="relative z-20 text-center">
						<h1 className="text-white text-9xl font-laco mb-8">
							<span className="text-yellow-500">KHÍ T</span>
							<span className="text-red-500">HẾ MÙ</span>
							<span className="text-yellow-500">A THU</span>
						</h1>
						<p className="text-white text-5xl font-laco">
							Phong trào giải phóng dân tộc 1939 - 1945
						</p>
					</div>
				</section>

				{/* Navigation Carousel */}
				<section className="mx-auto px-6 py-16 container">
					<div className="text-center space-y-6 mb-12">
						<h2 className="text-4xl font-bold text-gray-800 font-laco">Hành trình Lịch sử</h2>
						<p className="text-xl text-gray-600">
							Khám phá từng giai đoạn của cuộc cách mạng giải phóng dân tộc
						</p>
					</div>

					<Carousel
						opts={{
							align: "start",
							loop: false,
						}}
						className="w-full"
					>
						<CarouselContent className="-ml-2 md:-ml-4 py-10">
							{sections.map((section) => (
								<CarouselItem
									key={section.id}
									className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
								>
									<Link href={section.href}>
										<Card className="h-full cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-101 border-0 overflow-hidden group pt-0">
											<div className="relative h-48 overflow-hidden">
												{/* Background Image */}
												<Image
													src={section.image}
													alt={section.title}
													fill
													className="object-cover transition-transform duration-300 group-hover:scale-110"
													sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
												/>
												{/* Dark overlay for better text readability */}
												<div className="absolute inset-0 bg-black/30" />
												{/* Section number overlay */}
												<div className="absolute bottom-4 left-4">
													<div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
														<span className="text-xl font-bold text-red-600">{section.id}</span>
													</div>
												</div>
												{/* Period badge */}
												<div className="absolute top-4 right-4">
													<div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
														{section.period}
													</div>
												</div>
												{/* Hover overlay */}
												<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
											</div>
											<CardHeader className="pb-3">
												<CardTitle className="text-lg leading-tight text-gray-800 line-clamp-2 group-hover:text-red-700 transition-colors">
													{section.title}
												</CardTitle>
											</CardHeader>
											<CardContent className="pt-0">
												<p className="text-sm text-gray-600 line-clamp-3 leading-relaxed mb-4">
													{section.description}
												</p>
												<div className="flex items-center text-red-600 text-sm font-medium group-hover:text-red-700 transition-colors">
													Tìm hiểu thêm
													<svg
														className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M9 5l7 7-7 7"
														/>
													</svg>
												</div>
											</CardContent>
										</Card>
									</Link>
								</CarouselItem>
							))}
						</CarouselContent>
						<div className="flex justify-center mt-8 gap-4">
							<CarouselPrevious className="relative inset-0 translate-y-0" />
							<CarouselNext className="relative inset-0 translate-y-0" />
						</div>
					</Carousel>
				</section>

				{/* Introduction Text - Modern Design */}
				<section className="mx-auto px-6 py-20 container">
					<Card className="overflow-hidden shadow-2xl bg-gradient-to-br from-white to-red-50 border-0 pt-0">
						<CardHeader className="bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 text-white relative overflow-hidden py-12">
							<div className="absolute inset-0 bg-gradient-to-r from-red-600/90 via-yellow-500/90 to-red-600/90"></div>
							<div className="absolute -right-40 -top-40 w-80 h-80 bg-white/10 rounded-full"></div>
							<div className="absolute -left-20 -bottom-20 w-60 h-60 bg-white/5 rounded-full"></div>
							<div className="absolute right-20 bottom-10 w-40 h-40 bg-white/5 rounded-full"></div>

							<div className="relative z-10 text-center space-y-6">
								{/* Header with Vietnam flags */}
								<div className="flex items-center justify-center gap-6 mb-6">
									<VN className="w-16 h-12 rounded shadow-2xl animate-pulse" />
									<div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
										<Star className="w-10 h-10 text-white" />
									</div>
									<VN className="w-16 h-12 rounded shadow-2xl animate-pulse" />
								</div>

								<CardTitle className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
									Cách mạng Tháng Tám 1945
								</CardTitle>

								<p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
									Sự kiện quan trọng nhất trong lịch sử dân tộc Việt Nam
								</p>
							</div>
						</CardHeader>

						<CardContent className="p-8 md:p-12 space-y-12">
							{/* Main Description */}
							<div className="text-center space-y-6">
								<div className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl p-8 border-l-4 border-red-400 shadow-lg">
									<p className="text-lg md:text-xl text-gray-700 leading-relaxed">
										Cách mạng Tháng Tám năm 1945 là một trong những sự kiện quan trọng nhất trong
										lịch sử dân tộc Việt Nam. Đây là cuộc cách mạng giải phóng dân tộc đầu tiên
										thành công ở một nước thuộc địa, mở ra kỷ nguyên độc lập, tự do cho dân tộc Việt
										Nam và có tác động sâu sắc đến phong trào giải phóng dân tộc trên thế giới.
									</p>
								</div>
							</div>

							{/* Key Achievements - Modern Cards */}
							<div className="grid md:grid-cols-3 gap-8">
								{/* State Formation */}
								<div className="group bg-gradient-to-br from-red-100 to-pink-100 rounded-xl p-8 border border-red-200 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
									<div className="text-center space-y-4">
										<div className="relative mx-auto mb-6">
											<div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
												<Crown className="w-10 h-10 text-red-600" />
											</div>
											<div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
												<span className="text-white text-sm">🏛️</span>
											</div>
										</div>
										<h4 className="text-xl font-bold text-red-800 mb-3">Thành lập Nhà nước</h4>
										<p className="text-red-700 leading-relaxed">
											Nước Việt Nam Dân chủ Cộng hòa ra đời, đánh dấu sự ra đời của nhà nước độc lập
											đầu tiên của dân tộc
										</p>
									</div>
								</div>

								{/* National Liberation */}
								<div className="group bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl p-8 border border-yellow-200 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
									<div className="text-center space-y-4">
										<div className="relative mx-auto mb-6">
											<div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
												<Sword className="w-10 h-10 text-yellow-600" />
											</div>
											<div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
												<span className="text-white text-sm">⚔️</span>
											</div>
										</div>
										<h4 className="text-xl font-bold text-yellow-800 mb-3">Giải phóng Dân tộc</h4>
										<p className="text-yellow-700 leading-relaxed">
											Kết thúc gần 1 thế kỷ đô hộ thực dân, giải phóng dân tộc khỏi ách thống trị
											của đế quốc
										</p>
									</div>
								</div>

								{/* Historical Legacy */}
								<div className="group bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-8 border border-green-200 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
									<div className="text-center space-y-4">
										<div className="relative mx-auto mb-6">
											<div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
												<Trophy className="w-10 h-10 text-green-600" />
											</div>
											<div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
												<span className="text-white text-sm">🌟</span>
											</div>
										</div>
										<h4 className="text-xl font-bold text-green-800 mb-3">Di sản Lịch sử</h4>
										<p className="text-green-700 leading-relaxed">
											Để lại bài học quý báu và nguồn cảm hứng cho các thế hệ tương lai và phong
											trào giải phóng thế giới
										</p>
									</div>
								</div>
							</div>

							{/* Quote Section */}
							<div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-8 shadow-lg border border-gray-200">
								<div className="text-center">
									<blockquote className="text-gray-700 text-lg md:text-xl italic leading-relaxed">
										<span className="text-red-500 text-3xl font-serif">&ldquo;</span>
										Cách mạng Tháng Tám 1945 - Ngọn đuốc sáng của dân tộc, mở ra kỷ nguyên độc lập,
										tự do, hạnh phúc
										<span className="text-red-500 text-3xl font-serif">&rdquo;</span>
									</blockquote>
									<div className="mt-6 flex items-center justify-center gap-4">
										<VN className="w-8 h-6 rounded shadow" />
										<span className="text-gray-500 font-medium">Dân tộc Việt Nam</span>
										<VN className="w-8 h-6 rounded shadow" />
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</section>
			</div>

			<Footer />
		</div>
	);
}
