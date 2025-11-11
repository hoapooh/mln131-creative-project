"use client";

import React, { useState, useRef, useEffect } from "react";
import { Markmap } from "markmap-view";
import { transformer } from "./markmap";
import { Toolbar } from "markmap-toolbar";
import "markmap-toolbar/dist/style.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { BookOpen, Brain, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

const initValue = `# Phong trào Giải phóng Dân tộc 1939-1945 và Cách mạng Tháng Tám (Tổng quan và Phân tích)

## Bối cảnh Lịch sử và Sự Chuyển hướng Chiến lược của Đảng (1939-1941)
### Tác động của Chiến tranh Thế giới thứ hai
- 9/1939: CTTG thứ hai bùng nổ
- Pháp tăng cường đàn áp, đặt Đảng Cộng sản Đông Dương ra ngoài vòng pháp luật
- 6/1940: Đức chiếm đóng Pháp
- 9/1940: Quân phiệt Nhật tiến vào Đông Dương
- Pháp đầu hàng và câu kết với Nhật -> "một cổ hai tròng"
- Chính sách Pháp-Nhật: Thi hành chính sách thời chiến, phát xít hóa, vơ vét sức người, sức của
### Các Hội nghị Trung ương và Sự hình thành Đường lối Mới
#### Hội nghị Trung ương Đảng (11/1939)
- Nhận định: Đánh đổ đế quốc Pháp, chống ngoại xâm để giành độc lập
- Chủ trương: Đặt nhiệm vụ giải phóng dân tộc lên hàng đầu
- Khẩu hiệu: Tạm gác "cách mạng ruộng đất"
- Tổ chức: "Mặt trận dân tộc thống nhất phản đế Đông Dương"
#### Hội nghị Trung ương Đảng (11/1940)
- Quan điểm: Còn trăn trở, cho rằng "Cách mạng phản đế và cách mạng thổ địa phải đồng thời tiến"
#### Hội nghị Trung ương 8 (5/1941) - Hoàn chỉnh Chủ trương Chiến lược
- Do Nguyễn Ái Quốc chủ trì (về nước 28/1/1941)
- Một: Mâu thuẫn chủ yếu là giữa dân tộc Việt Nam và đế quốc phát xít Pháp-Nhật
- Hai: Khẳng định dứt khoát thay đổi chiến lược
  - Cách mạng hiện tại là "dân tộc giải phóng"
  - Tiếp tục tạm gác khẩu hiệu ruộng đất
- Ba: Giải quyết vấn đề dân tộc trong khuôn khổ từng nước (chính sách "dân tộc tự quyết")
  - Thành lập ở Việt Nam: Việt Nam Độc lập Đồng minh (Việt Minh)
- Bốn: Tập hợp rộng rãi mọi lực lượng yêu nước trong Mặt trận Việt Minh
- Năm: Chủ trương thành lập nước Việt Nam Dân chủ Cộng hòa sau khi thắng lợi
- Sáu: Xác định chuẩn bị khởi nghĩa vũ trang là nhiệm vụ trung tâm

## Quá trình Xây dựng Lực lượng và Chuẩn bị Khởi nghĩa (1941-1945)
### Thành lập và Phát triển Mặt trận Việt Minh
- 25/10/1941: Việt Minh công bố Tuyên ngôn, chương trình hoạt động
- Trở thành nơi tập hợp, rèn luyện lực lượng chính trị rộng lớn
- 6/1944: Đảng Dân chủ Việt Nam thành lập và tham gia Việt Minh
### Xây dựng Lực lượng Vũ trang và Căn cứ địa
#### Các cuộc nổi dậy ban đầu
- Khởi nghĩa Bắc Sơn (27/9/1940): Thành lập Đội du kích Bắc Sơn
- Khởi nghĩa Nam Kỳ (23/11/1940): Bị Pháp đàn áp khốc liệt
- Binh biến Đô Lương (13/1/1941): Bị dập tắt nhanh chóng
- Ý nghĩa: "Những tiếng súng báo hiệu cho cuộc khởi nghĩa toàn quốc"
#### Phát triển lực lượng vũ trang
- Đội du kích Bắc Sơn -> Cứu quốc quân
- 22/12/1944: Thành lập Đội Việt Nam Tuyên truyền Giải phóng quân (do Võ Nguyên Giáp chỉ huy)
- Thắng lợi trận đầu: Phai Khắt (25/12) và Nà Ngần (26/12)
#### Xây dựng căn cứ địa
- Củng cố khu căn cứ Bắc Sơn-Võ Nhai và Cao Bằng
- Cuối 1943: Hành lang chính trị nối liền hai khu căn cứ
### Đấu tranh trên các Mặt trận khác
- Tư tưởng - Báo chí: Báo Giải phóng, Cờ giải phóng, Cứu quốc...
- Văn hóa:
  - 1943: Đề cương về văn hóa Việt Nam (3 nguyên tắc: dân tộc, khoa học, đại chúng)
  - Cuối 1944: Hội Văn hóa cứu quốc Việt Nam ra đời

## Cao trào Kháng Nhật Cứu nước và Tiến tới Tổng Khởi nghĩa (3/1945 - 8/1945)
### Sự kiện Nhật đảo chính Pháp và Chủ trương của Đảng
- 9/3/1945: Nhật đảo chính lật đổ Pháp, độc chiếm Đông Dương
- 12/3/1945: Chỉ thị "Nhật, Pháp bắn nhau và hành động của chúng ta"
  - Kẻ thù: Phát xít Nhật là kẻ thù cụ thể, trước mắt và duy nhất
  - Khẩu hiệu: Thay "đánh đuổi Nhật-Pháp" bằng "đánh đuổi phát xít Nhật"
  - Mục tiêu: Phát động cao trào kháng Nhật cứu nước làm tiền đề cho tổng khởi nghĩa
### Diễn biến Cao trào
- Khởi nghĩa từng phần, chiến tranh du kích cục bộ ở thượng du và trung du Bắc Kỳ
- Khởi nghĩa Ba Tơ (Quảng Ngãi) thắng lợi, thành lập đội du kích Ba Tơ
- 15/5/1945: Thống nhất các lực lượng vũ trang thành Việt Nam Giải phóng quân
- 4/6/1945: Thành lập Khu giải phóng Việt Bắc (căn cứ địa chính của cả nước)
### Phong trào "Phá kho thóc, giải quyết nạn đói"
- Thổi bùng ngọn lửa căm thù, thúc đẩy quần chúng nổi dậy
### Kết quả
- Cao trào là một cuộc khởi nghĩa từng phần, đưa toàn dân vào thế sẵn sàng chớp thời cơ

## Tổng Khởi nghĩa Tháng Tám năm 1945
### Thời cơ Cách mạng và Quyết định của Đảng
#### Bối cảnh
- 15/8/1945: Phát xít Nhật tuyên bố đầu hàng Đồng minh không điều kiện
#### Thời cơ
- Tồn tại từ khi Nhật đầu hàng đến trước khi quân Đồng minh vào Đông Dương
- Là cuộc "chạy đua nước rút" để giành chính quyền
#### Hội nghị Toàn quốc của Đảng (14-15/8/1945)
- Quyết định: Phát động toàn dân tổng khởi nghĩa
- Ba nguyên tắc chỉ đạo: Tập trung, thống nhất, kịp thời
#### Đại hội Quốc dân (16/8/1945)
- Tán thành quyết định tổng khởi nghĩa
- Thông qua 10 chính sách lớn của Việt Minh
- Lập Ủy ban Dân tộc Giải phóng Việt Nam (Chính phủ lâm thời) do Hồ Chí Minh làm Chủ tịch
### Diễn biến Tổng Khởi nghĩa
- Lời kêu gọi của Hồ Chí Minh: "Giờ quyết định cho vận mệnh dân tộc ta đã đến..."
- Các địa phương (14-18/8):
  - 4 tỉnh giành chính quyền sớm nhất: Hải Dương, Bắc Giang, Hà Tĩnh, Quảng Nam
- Hà Nội (19/8):
  - Biến mít tinh của chính quyền thân Nhật thành biểu tình ủng hộ Việt Minh
  - Thắng lợi có ảnh hưởng quyết định, cổ vũ cả nước
- Huế (23/8):
  - Quần chúng biểu dương lực lượng, chiếm công sở
  - 30/8: Vua Bảo Đại tuyên bố thoái vị
- Sài Gòn (25/8):
  - Hơn 1 triệu người biểu tình, giành chính quyền nhanh chóng

## Thành lập Nước Việt Nam Dân chủ Cộng hòa
### Chính phủ lâm thời
- 27/8: Cải tổ từ Ủy ban Dân tộc Giải phóng
- Mời thêm nhân sĩ ngoài Việt Minh tham gia
### Soạn thảo Tuyên ngôn Độc lập
- Tại nhà số 48 Hàng Ngang, Hà Nội, do Hồ Chí Minh soạn thảo
### Ngày 2/9/1945
- Tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập
- Tuyên bố sự ra đời của nước Việt Nam Dân chủ Cộng hòa
- Khẳng định: "Nước Việt Nam có quyền hưởng tự do và độc lập..."

## Phân tích Cách mạng Tháng Tám
### Tính chất
- "Một cuộc cách mạng giải phóng dân tộc mang tính chất dân chủ mới"
- **Tính chất giải phóng dân tộc điển hình:**
  - Tập trung hoàn thành nhiệm vụ GPDT
  - Lực lượng là toàn dân tộc (Mặt trận Việt Minh)
  - Thành lập chính quyền nhà nước "của chung toàn dân tộc"
- **Tính chất dân chủ (chưa đầy đủ):**
  - Giải quyết một số quyền lợi cho nông dân (giảm tô...)
  - Xóa bỏ chế độ quân chủ, thiết lập nhà nước dân chủ
  - Hạn chế: "chưa làm cách mạng ruộng đất"
### Ý nghĩa Lịch sử
#### Đối với Việt Nam
- Đập tan xiềng xích nô lệ đế quốc và chế độ quân chủ
- Lập nên nước Việt Nam Dân chủ Cộng hòa
- Đưa nhân dân từ thân phận nô lệ lên địa vị người chủ
- Mở ra kỷ nguyên mới: Độc lập, tự do, hướng tới CNXH
#### Đối với Thế giới
- Cuộc cách mạng GPDT lần đầu tiên thắng lợi ở một nước thuộc địa
- Mở đầu thời kỳ suy sụp, tan rã của chủ nghĩa thực dân cũ
- Cổ vũ mạnh mẽ phong trào GPDT trên thế giới
### Các Bài học Kinh nghiệm
- Về chỉ đạo chiến lược: Giương cao ngọn cờ giải phóng dân tộc
- Về xây dựng lực lượng: Xây dựng mặt trận dân tộc thống nhất rộng rãi (Việt Minh)
- Về phương pháp cách mạng: Kết hợp đấu tranh chính trị - vũ trang, khởi nghĩa từng phần -> tổng khởi nghĩa
- Về xây dựng Đảng: Xây dựng Đảng tiên phong, vững mạnh, có đường lối đúng đắn
`;

function renderToolbar(
	mm: Markmap,
	wrapper: HTMLElement | null,
	router: ReturnType<typeof useRouter>
) {
	if (!wrapper) return;
	while (wrapper?.firstChild) wrapper.firstChild.remove();
	if (mm && wrapper) {
		const toolbar = new Toolbar();
		toolbar.attach(mm);
		// Register custom buttons
		toolbar.register({
			id: "fullscreen",
			title: "Open in fullscreen mode",
			// Use Toolbar.icon to create a VNode SVG from the path data
			content: Toolbar.icon(
				"M4 9v-4h4v2h-2v2zM4 11v4h4v-2h-2v-2zM16 9v-4h-4v2h2v2zM16 11v4h-4v-2h2v-2z"
			),
			onClick: () => router.push("/mind-map/fullscreen"),
		});
		toolbar.setItems([...Toolbar.defaultItems, "fullscreen"]);
		wrapper.append(toolbar.render());
	}
}

export default function MarkmapHooks() {
	const router = useRouter();
	const [value, setValue] = useState(initValue);
	const [showEditor, setShowEditor] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	// Ref for SVG element
	const refSvg = useRef<SVGSVGElement>(null);
	// Ref for markmap object
	const refMm = useRef<Markmap | null>(null);
	// Ref for toolbar wrapper
	const refToolbar = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	useEffect(() => {
		// Create markmap and save to refMm only on client side
		if (!isMounted || refMm.current) return;
		const mm = Markmap.create(refSvg.current, {
			initialExpandLevel: 2,
			maxWidth: 300,
		});
		console.log("create", refSvg.current);
		refMm.current = mm;
		renderToolbar(refMm.current, refToolbar.current, router);
	}, [router, isMounted]);

	useEffect(() => {
		// Update data for markmap once value is changed
		if (!isMounted) return;
		const mm = refMm.current;
		if (!mm) return;
		const { root } = transformer.transform(value);
		mm.setData(root).then(() => {
			mm.fit();
		});
	}, [value, isMounted]);

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setValue(e.target.value);
	};

	const resetToDefault = () => {
		setValue(initValue);
	};

	return (
		<main className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-50">
			<Header />
			<ScrollProgress />

			{/* Hero Section */}
			<section className="relative py-20 px-4">
				<div className="container mx-auto text-center">
					<div className="mb-8">
						<Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium">
							<Brain className="w-4 h-4 mr-2" />
							Công cụ Ôn tập
						</Badge>
						<h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-800 bg-clip-text text-transparent">
							Sơ đồ Tư duy
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
							Khám phá và ôn tập kiến thức về Phong trào Giải phóng Dân tộc 1939-1945 thông qua sơ
							đồ tư duy tương tác, giúp bạn nắm bắt mối liên hệ giữa các sự kiện lịch sử.
						</p>
					</div>

					{/* Action Buttons */}
					<div className="flex flex-wrap justify-center gap-4 mb-8">
						<Button
							onClick={() => setShowEditor(!showEditor)}
							variant={showEditor ? "default" : "outline"}
							className="px-6 py-3"
						>
							{showEditor ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
							{showEditor ? "Ẩn Trình chỉnh sửa" : "Hiện Trình chỉnh sửa"}
						</Button>
						<Button onClick={resetToDefault} variant="outline" className="px-6 py-3">
							<BookOpen className="w-4 h-4 mr-2" />
							Khôi phục Nội dung Gốc
						</Button>
					</div>
				</div>
			</section>

			{/* Main Content */}
			<section className="px-4 pb-20">
				<div className="container mx-auto max-w-7xl">
					<div className="grid gap-8">
						{/* Instructions Card */}
						<Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
							<CardHeader>
								<CardTitle className="flex items-center gap-2 text-xl">
									<Brain className="w-5 h-5 text-red-600" />
									Hướng dẫn Sử dụng
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="grid md:grid-cols-3 gap-6">
									<div className="text-center">
										<div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
											<span className="text-red-600 font-bold">1</span>
										</div>
										<h3 className="font-semibold mb-2">Khám phá Sơ đồ</h3>
										<p className="text-sm text-gray-600">
											Click vào các nút để mở rộng hoặc thu gọn các nhánh kiến thức
										</p>
									</div>
									<div className="text-center">
										<div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
											<span className="text-orange-600 font-bold">2</span>
										</div>
										<h3 className="font-semibold mb-2">Tùy chỉnh Nội dung</h3>
										<p className="text-sm text-gray-600">
											Sử dụng trình chỉnh sửa để thêm hoặc chỉnh sửa nội dung theo ý muốn
										</p>
									</div>
									<div className="text-center">
										<div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
											<span className="text-yellow-600 font-bold">3</span>
										</div>
										<h3 className="font-semibold mb-2">Ôn tập Hiệu quả</h3>
										<p className="text-sm text-gray-600">
											Sử dụng các công cụ zoom và fit để xem toàn bộ hoặc chi tiết
										</p>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Editor Card */}
						{showEditor && (
							<Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
								<CardHeader>
									<CardTitle className="flex items-center gap-2">
										<Eye className="w-5 h-5 text-red-600" />
										Trình chỉnh sửa Nội dung
									</CardTitle>
									<CardDescription>
										Chỉnh sửa nội dung Markdown để tùy chỉnh sơ đồ tư duy theo nhu cầu học tập của
										bạn
									</CardDescription>
								</CardHeader>
								<CardContent>
									<Textarea
										value={value}
										onChange={handleChange}
										className="min-h-[300px] font-mono text-sm"
										placeholder="Nhập nội dung Markdown ở đây..."
									/>
								</CardContent>
							</Card>
						)}

						{/* Mind Map Card */}
						<Card className="shadow-xl border-0 bg-white/90 backdrop-blur pb-0">
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Brain className="w-5 h-5 text-red-600" />
									Sơ đồ Tư duy Tương tác
								</CardTitle>
								<CardDescription>
									Phong trào Giải phóng Dân tộc 1939-1945 và Cách mạng Tháng Tám
								</CardDescription>
							</CardHeader>
							<CardContent className="p-0">
								<div className="relative h-[80vh] bg-gradient-to-br from-slate-50 to-red-50 rounded-lg overflow-hidden">
									{!isMounted ? (
										<div className="flex items-center justify-center h-full">
											<div className="text-center">
												<div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-600 mx-auto mb-4"></div>
												<p className="text-gray-600">Đang tải sơ đồ tư duy...</p>
											</div>
										</div>
									) : (
										<>
											<svg
												className="w-full h-full"
												ref={refSvg}
												style={{
													background:
														"radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%)",
												}}
											/>
											<div
												className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-lg shadow-lg p-2"
												ref={refToolbar}
											></div>
										</>
									)}
								</div>
							</CardContent>
						</Card>

						{/* Tips Card */}
						<Card className="shadow-lg border-0 bg-gradient-to-r from-red-50 to-yellow-50">
							<CardHeader>
								<CardTitle className="flex items-center gap-2 text-lg">
									<BookOpen className="w-5 h-5 text-red-600" />
									Mẹo Học tập Hiệu quả
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<h4 className="font-semibold mb-3 text-red-800">Chiến lược Ôn tập</h4>
										<ul className="space-y-2 text-sm text-gray-700">
											<li className="flex items-start gap-2">
												<span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
												Bắt đầu từ các chủ đề chính rồi đi vào chi tiết
											</li>
											<li className="flex items-start gap-2">
												<span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
												Kết nối các sự kiện theo thời gian và nguyên nhân
											</li>
											<li className="flex items-start gap-2">
												<span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
												Tập trung vào các mối quan hệ giữa các khái niệm
											</li>
										</ul>
									</div>
									<div>
										<h4 className="font-semibold mb-3 text-yellow-800">Sử dụng Sơ đồ</h4>
										<ul className="space-y-2 text-sm text-gray-700">
											<li className="flex items-start gap-2">
												<span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
												Sử dụng zoom để xem chi tiết từng phần
											</li>
											<li className="flex items-start gap-2">
												<span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
												Thu gọn các nhánh đã nắm vững để tập trung vào phần khó
											</li>
											<li className="flex items-start gap-2">
												<span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
												Tạo sơ đồ riêng cho từng chương để ôn tập sâu
											</li>
										</ul>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
