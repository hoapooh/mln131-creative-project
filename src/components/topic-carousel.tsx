"use client";

import { useState } from "react";
import { Topic } from "../types";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

interface TopicCarouselProps {
	topics: Topic[];
}

export default function TopicCarousel({ topics }: TopicCarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev + 1) % topics.length);
	};

	const prevSlide = () => {
		setCurrentIndex((prev) => (prev - 1 + topics.length) % topics.length);
	};

	if (topics.length === 0) return null;

	return (
		<div className="relative max-w-6xl mx-auto">
			<div className="overflow-hidden rounded-3xl shadow-2xl">
				<div
					className="flex transition-transform duration-500 ease-out"
					style={{ transform: `translateX(-${currentIndex * 100}%)` }}
				>
					{topics.map((topic) => (
						<div key={topic.id} className="w-full flex-shrink-0">
							<Link href={`/topics/${topic.slug}`}>
								<div className="relative h-[500px] bg-gradient-to-br from-emerald-50 to-teal-50 group cursor-pointer overflow-hidden">
									{/* Background Image */}
									<div
										className="absolute inset-0 bg-cover bg-center bg-no-repeat"
										style={{
											backgroundImage: `url('${topic.imageUrl}')`,
										}}
									/>
									{/* Overlay */}
									<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
									<div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

									<div className="relative h-full flex flex-col justify-between p-8">
										<div className="flex-1 flex flex-col justify-start pt-8">
											<h3 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:text-emerald-200 transition-colors drop-shadow-lg">
												{topic.title}
											</h3>
											<p className="text-lg md:text-xl text-gray-100 line-clamp-4 leading-relaxed drop-shadow-md">
												{topic.description}
											</p>
										</div>
										<div className="flex justify-start">
											<button className="flex items-center space-x-2 px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm">
												<span>Tìm hiểu thêm</span>
												<ArrowRight size={20} />
											</button>
										</div>
									</div>
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>

			{topics.length > 1 && (
				<>
					<button
						onClick={prevSlide}
						className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110"
					>
						<ChevronLeft size={24} className="text-gray-800" />
					</button>
					<button
						onClick={nextSlide}
						className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110"
					>
						<ChevronRight size={24} className="text-gray-800" />
					</button>

					<div className="flex justify-center space-x-2 mt-6">
						{topics.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentIndex(index)}
								className={`h-2 rounded-full transition-all duration-300 ${
									index === currentIndex ? "w-8 bg-emerald-600" : "w-2 bg-gray-300 hover:bg-gray-400"
								}`}
							/>
						))}
					</div>
				</>
			)}
		</div>
	);
}
