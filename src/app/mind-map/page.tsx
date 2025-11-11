"use client";

import React, { useState, useRef, useEffect } from "react";
import { Markmap } from "markmap-view";
import { transformer } from "./markmap";
import { Toolbar } from "markmap-toolbar";
import "markmap-toolbar/dist/style.css";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { BookOpen, Brain, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

const initValue = `# Gia đình – Khái niệm, Vị trí, Chức năng và Biến đổi

## Khái niệm gia đình
- Cộng đồng xã hội đặc biệt dựa trên:
  - Hôn nhân
  - Huyết thống
  - Nuôi dưỡng
- Gắn với quyền & nghĩa vụ các thành viên
- Mác – Ăngghen: gia đình = quan hệ vợ – chồng, cha mẹ – con

---

## Vị trí của gia đình

### Tế bào của xã hội
- Cơ sở tái tạo dân số & sức lao động
- Gia đình tồn tại → xã hội tồn tại
- Gia đình tốt → xã hội tốt

### Tổ ấm hạnh phúc
- Môi trường yêu thương – an toàn
- Chỗ dựa tinh thần
- Hình thành nhân cách

### Cầu nối cá nhân – xã hội
- Cộng đồng đầu tiên của con người
- Truyền văn hóa – đạo đức – pháp luật
- Nhà nước tác động đến công dân qua gia đình

---

## Chức năng của gia đình
- **Sinh sản**: duy trì nòi giống, kế hoạch hóa
- **Nuôi dưỡng – Giáo dục**: sức khỏe, đạo đức, lối sống, tri thức
- **Kinh tế – Tiêu dùng**: tạo thu nhập, tiêu dùng
- **Tình cảm – Tâm lý**: yêu thương, chia sẻ, ổn định tinh thần

---

## Cơ sở xây dựng gia đình

### Kinh tế – xã hội
- Xóa tư hữu, bình đẳng giới, giải phóng phụ nữ

### Chính trị – pháp luật
- Nhà nước XHCN, Luật hôn nhân và gia đình

### Văn hóa
- Xây dựng văn hóa mới, loại bỏ hủ tục

### Hôn nhân tiến bộ
- Tự nguyện
- Một vợ – một chồng
- Bình đẳng
- Pháp luật bảo vệ

---

## Cơ sở truyền thống gia đình Việt Nam
- Yêu thương, đùm bọc
- Hiếu thảo, tôn trọng ông bà cha mẹ
- Uống nước nhớ nguồn
- Cần cù, tiết kiệm, nhân nghĩa

---

## Cơ sở hiện đại
- Bình đẳng giới – dân chủ trong gia đình
- Sống và làm việc theo pháp luật
- Giáo dục toàn diện
- Mục tiêu: ấm no – tiến bộ – hạnh phúc – văn minh

---

## Gia đình Việt Nam thời 4.0

### Cấu trúc – Quy mô
- Gia đình hạt nhân phổ biến
- Ít thế hệ, ít con
- Quan hệ có nguy cơ lỏng lẻo

### Chức năng thay đổi
- Tự cấp tự túc → kinh tế thị trường
- Giáo dục: gia đình ↓, xã hội ↑
- Sinh sản chủ động, giảm trọng nam nối dõi

### Quan hệ gia đình
- Tăng ly hôn, ngoại tình
- Quyền lực biến đổi:
  - Gia trưởng
  - Phụ nữ làm chủ
  - Hai vợ chồng cùng làm chủ (phổ biến)

---

## Kết hợp truyền thống & hiện đại

### Giữ truyền thống
- Hiếu nghĩa, thủy chung
- Tương trợ cộng đồng

### Tiếp thu hiện đại
- Bình đẳng giới, dân chủ
- Tôn trọng năng lực cá nhân

### Mục tiêu
- Gia đình Việt Nam **ấm no – bình đẳng – tiến bộ – hạnh phúc**
`;

function renderToolbar(mm: Markmap, wrapper: HTMLElement | null, router: ReturnType<typeof useRouter>) {
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
			content: Toolbar.icon("M4 9v-4h4v2h-2v2zM4 11v4h4v-2h-2v-2zM16 9v-4h-4v2h2v2zM16 11v4h-4v-2h2v-2z"),
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
		<main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
			{/* Hero Section */}
			<section className="relative py-20 px-4">
				<div className="container mx-auto text-center">
					<div className="mb-8">
						<Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium">
							<Brain className="w-4 h-4 mr-2" />
							Công cụ Ôn tập
						</Badge>
						<h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
							Sơ đồ Tư duy
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
							Khám phá và ôn tập kiến thức về Phong trào Giải phóng Dân tộc 1939-1945 thông qua sơ đồ tư duy tương tác,
							giúp bạn nắm bắt mối liên hệ giữa các sự kiện lịch sử.
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
									<Brain className="w-5 h-5 text-emerald-600" />
									Hướng dẫn Sử dụng
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="grid md:grid-cols-3 gap-6">
									<div className="text-center">
										<div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
											<span className="text-emerald-600 font-bold">1</span>
										</div>
										<h3 className="font-semibold mb-2">Khám phá Sơ đồ</h3>
										<p className="text-sm text-gray-600">
											Click vào các nút để mở rộng hoặc thu gọn các nhánh kiến thức
										</p>
									</div>
									<div className="text-center">
										<div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
											<span className="text-teal-600 font-bold">2</span>
										</div>
										<h3 className="font-semibold mb-2">Tùy chỉnh Nội dung</h3>
										<p className="text-sm text-gray-600">
											Sử dụng trình chỉnh sửa để thêm hoặc chỉnh sửa nội dung theo ý muốn
										</p>
									</div>
									<div className="text-center">
										<div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-3">
											<span className="text-cyan-600 font-bold">3</span>
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
										<Eye className="w-5 h-5 text-emerald-600" />
										Trình chỉnh sửa Nội dung
									</CardTitle>
									<CardDescription>
										Chỉnh sửa nội dung Markdown để tùy chỉnh sơ đồ tư duy theo nhu cầu học tập của bạn
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
									<Brain className="w-5 h-5 text-emerald-600" />
									Sơ đồ Tư duy Tương tác
								</CardTitle>
								<CardDescription>Phong trào Giải phóng Dân tộc 1939-1945 và Cách mạng Tháng Tám</CardDescription>
							</CardHeader>
							<CardContent className="p-0">
								<div className="relative h-[80vh] bg-gradient-to-br from-slate-50 to-emerald-50 rounded-lg overflow-hidden">
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
						<Card className="shadow-lg border-0 bg-gradient-to-r from-emerald-50 to-cyan-50">
							<CardHeader>
								<CardTitle className="flex items-center gap-2 text-lg">
									<BookOpen className="w-5 h-5 text-emerald-600" />
									Mẹo Học tập Hiệu quả
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<h4 className="font-semibold mb-3 text-emerald-800">Chiến lược Ôn tập</h4>
										<ul className="space-y-2 text-sm text-gray-700">
											<li className="flex items-start gap-2">
												<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
												Bắt đầu từ các chủ đề chính rồi đi vào chi tiết
											</li>
											<li className="flex items-start gap-2">
												<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
												Kết nối các sự kiện theo thời gian và nguyên nhân
											</li>
											<li className="flex items-start gap-2">
												<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
												Tập trung vào các mối quan hệ giữa các khái niệm
											</li>
										</ul>
									</div>
									<div>
										<h4 className="font-semibold mb-3 text-cyan-800">Sử dụng Sơ đồ</h4>
										<ul className="space-y-2 text-sm text-gray-700">
											<li className="flex items-start gap-2">
												<span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
												Sử dụng zoom để xem chi tiết từng phần
											</li>
											<li className="flex items-start gap-2">
												<span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
												Thu gọn các nhánh đã nắm vững để tập trung vào phần khó
											</li>
											<li className="flex items-start gap-2">
												<span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
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
		</main>
	);
}
