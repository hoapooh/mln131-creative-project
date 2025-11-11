"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Quote } from "lucide-react";

interface GalleryItem {
	id: number;
	src: string;
	alt: string;
	story: string;
	quote: string;
	author?: string;
	height: number;
}

const galleryData: GalleryItem[] = [
	{
		id: 1,
		src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=500&h=600",
		alt: "Gia đình hạnh phúc",
		height: 600,
		story:
			"Gia đình là nơi mà tình yêu thương được chia sẻ không điều kiện. Mỗi khoảnh khắc bên nhau đều là những kỷ niệm đáng trọng, từ những bữa cơm ấm cúng đến những cuộc trò chuyện tâm tình trước khi đi ngủ.",
		quote: "Gia đình không phải là điều quan trọng nhất, mà là tất cả.",
		author: "Michael J. Fox",
	},
	{
		id: 2,
		src: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=500&h=400",
		alt: "Cha mẹ và con cái",
		height: 400,
		story:
			"Tình yêu của cha mẹ dành cho con cái là tình yêu vô điều kiện nhất trên đời. Họ sẵn sàng hy sinh tất cả để con em mình có cuộc sống tốt đẹp nhất, dù điều đó có nghĩa là họ phải chịu đựng khó khăn.",
		quote: "Tình yêu thương cha mẹ dành cho con cái giống như ánh nắng mặt trời - luôn ấm áp và bao la.",
		author: "Ngạn ngữ Việt Nam",
	},
	{
		id: 3,
		src: "https://images.unsplash.com/photo-1738411324293-99948a88d072?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687?w=500&h=700",
		alt: "Ba thế hệ",
		height: 700,
		story:
			"Ba thế hệ trong một nhà là hình ảnh đẹp của sự kế thừa và truyền thống. Ông bà kể chuyện xưa, cha mẹ làm cầu nối, con cháu học hỏi - tạo nên mạch nguồn văn hóa gia đình bền vững.",
		quote: "Cội nguồn sâu xa sẽ tạo nên cây lớn tươi tốt.",
		author: "Tục ngữ Việt Nam",
	},
	{
		id: 4,
		src: "https://phunuvietnam.mediacdn.vn/thumb_w/1098/179072216278405120/2022/6/27/2902885075555526093734985140574930554515403n-16563435285881222396118-0-96-960-1632-crop-1656343538085778839014.gif",
		alt: "Bữa cơm gia đình",
		height: 500,
		story:
			"Bữa cơm gia đình không chỉ là việc ăn uống mà còn là thời gian quý báu để mọi người chia sẻ những câu chuyện trong ngày. Đây là nơi nuôi dưỡng không chỉ thể xác mà còn tâm hồn.",
		quote: "Bữa cơm ngon nhất không phải vì món ăn, mà vì có người thân bên cạnh.",
		author: "Unknown",
	},
	{
		id: 5,
		src: "https://images.unsplash.com/photo-1646520366414-21984e0f1bb7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687?w=500&h=650",
		alt: "Đọc sách cùng con",
		height: 650,
		story:
			"Việc đọc sách cùng con không chỉ giúp trẻ phát triển trí tuệ mà còn tăng cường mối liên kết tình cảm giữa cha mẹ và con cái. Đây là những khoảnh khắc yên bình và ý nghĩa nhất.",
		quote: "Hãy đọc cho con nghe, rồi một ngày con sẽ đọc cho thế giới nghe.",
		author: "Unknown",
	},
	{
		id: 6,
		src: "https://images.unsplash.com/photo-1756982478237-2d3caa008bee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=765",
		alt: "Chơi đùa cùng nhau",
		height: 450,
		story:
			"Tiếng cười rộn ràng của trẻ thơ là âm thanh đẹp nhất trong ngôi nhà. Những trò chơi đơn giản cùng gia đình tạo nên những kỷ niệm đẹp và giúp gắn kết các thành viên với nhau.",
		quote: "Thời gian chơi đùa cùng gia đình là khoản đầu tư tốt nhất cho hạnh phúc.",
		author: "Unknown",
	},
	{
		id: 7,
		src: "https://images.unsplash.com/photo-1699670425934-b30d13e63fea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
		alt: "Nấu ăn cùng nhau",
		height: 600,
		story:
			"Việc nấu ăn cùng nhau không chỉ tạo ra những món ăn ngon mà còn là cách tuyệt vời để truyền đạt kỹ năng sống và tình yêu thương. Mỗi công thức là một câu chuyện gia đình.",
		quote: "Bếp nhà là trái tim của gia đình, nơi mà yêu thương được nấu chín.",
		author: "Unknown",
	},
	{
		id: 8,
		src: "https://maboophoto.com/wp-content/uploads/2021/02/chup-hinh-gia-dinh-di-picnic.jpg",
		alt: "Dạo chơi công viên",
		height: 400,
		story:
			"Những buổi dạo chơi công viên cùng gia đình là thời gian quý báu để tận hưởng thiên nhiên và tăng cường sức khỏe. Đây cũng là cơ hội tuyệt vời để trò chuyện và gắn kết.",
		quote: "Hạnh phúc thật đơn giản: chỉ cần đi bộ cùng những người mình yêu thương.",
		author: "Unknown",
	},
	{
		id: 9,
		src: "https://images.unsplash.com/photo-1593100126453-19b562a800c1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1167",
		alt: "Ông bà với cháu",
		height: 550,
		story:
			"Tình yêu của ông bà dành cho cháu có sức mạnh đặc biệt. Họ là người bạn đồng hành, là kho tàng tri thức và kinh nghiệm sống, luôn sẵn sàng chia sẻ và bảo vệ các cháu.",
		quote: "Ông bà là những thiên thần không có cánh nhưng có trái tim vàng.",
		author: "Unknown",
	},
	{
		id: 10,
		src: "https://congstudio.com.vn/wp-content/uploads/2023/03/VIT_6265-1024x683.jpg.webp",
		alt: "Sinh nhật gia đình",
		height: 650,
		story:
			"Những buổi tiệc sinh nhật trong gia đình tuy đơn giản nhưng chứa đựng biết bao tình yêu thương. Mỗi lời chúc, mỗi nụ cười đều là món quà vô giá không thể mua được bằng tiền.",
		quote: "Tuổi mới không quan trọng bằng việc có những người yêu thương bên cạnh.",
		author: "Unknown",
	},
];

const Page = () => {
	const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
	const [visibleImages, setVisibleImages] = useState<number[]>([]);
	const [loadedImages, setLoadedImages] = useState(4);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const id = parseInt(entry.target.getAttribute("data-id") || "0");
						setVisibleImages((prev) => [...new Set([...prev, id])]);
					}
				});
			},
			{ threshold: 0.1 }
		);

		// Observe all gallery items
		const galleryItems = document.querySelectorAll(".gallery-item");
		galleryItems.forEach((item) => observer.observe(item));

		// Load more images on scroll
		const handleScroll = () => {
			if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
				setLoadedImages((prev) => Math.min(prev + 3, galleryData.length));
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			observer.disconnect();
			window.removeEventListener("scroll", handleScroll);
		};
	}, [loadedImages]);

	return (
		<div className="pt-[65px] min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
			<div className="max-w-7xl mx-auto px-4 py-12">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent leading-20">
						Thư viện ảnh
					</h1>
					<h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Những khoảnh khắc gia đình</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Khám phá những câu chuyện đẹp về gia đình qua từng bức ảnh. Nhấn vào mỗi hình ảnh để đọc những chia sẻ ý
						nghĩa.
					</p>
				</motion.div>

				{/* Gallery Grid */}
				<div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
					{galleryData.slice(0, loadedImages).map((item, index) => (
						<motion.div
							key={item.id}
							data-id={item.id}
							className="break-inside-avoid relative overflow-hidden rounded-2xl cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-300"
							// initial={{ opacity: 0, scale: 0.9 }}
							/* animate={{
								opacity: visibleImages.includes(item.id) ? 1 : 0,
								scale: visibleImages.includes(item.id) ? 1 : 0.9,
							}} */
							// transition={{ duration: 0.5, delay: index * 0.05 }}
							whileHover={{ y: -5 }}
							onClick={() => setSelectedImage(item)}
						>
							<Image
								src={item.src}
								alt={item.alt}
								width={600}
								height={item.height}
								className="w-full h-auto object-cover transition-transform duration-100 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							<div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<p className="font-semibold">{item.alt}</p>
								<p className="text-sm opacity-90">Nhấn để đọc câu chuyện</p>
							</div>
						</motion.div>
					))}
				</div>

				{/* Load More Indicator */}
				{loadedImages < galleryData.length && (
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mt-12">
						<div className="inline-flex items-center space-x-2 px-6 py-3 bg-emerald-100 text-emerald-700 rounded-full">
							<div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
							<span>Đang tải thêm ảnh...</span>
						</div>
					</motion.div>
				)}
			</div>

			{/* Modal */}
			<AnimatePresence>
				{selectedImage && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
						onClick={() => setSelectedImage(null)}
					>
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.8, opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="bg-white rounded-3xl max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl"
							onClick={(e) => e.stopPropagation()}
						>
							<div className="relative">
								<Image
									src={selectedImage.src}
									alt={selectedImage.alt}
									width={800}
									height={selectedImage.height}
									className="w-full h-64 md:h-80 object-cover"
								/>
								<button
									onClick={() => setSelectedImage(null)}
									className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
								>
									<X size={20} />
								</button>
							</div>

							<div className="p-6 md:p-8">
								<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{selectedImage.alt}</h3>

								<div className="mb-6">
									<p className="text-gray-700 leading-relaxed text-lg">{selectedImage.story}</p>
								</div>

								<div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border-l-4 border-emerald-500">
									<div className="flex items-start space-x-3">
										<Quote className="text-emerald-600 flex-shrink-0 mt-1" size={24} />
										<div>
											<p className="text-emerald-800 font-medium italic text-lg mb-2">
												&ldquo;{selectedImage.quote}&rdquo;
											</p>
											{selectedImage.author && (
												<p className="text-emerald-600 font-semibold">— {selectedImage.author}</p>
											)}
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Page;
