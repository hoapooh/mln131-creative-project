"use client";

import React, { useRef, useEffect, useState } from "react";
import { Markmap } from "markmap-view";
import { transformer } from "../markmap";
import { Toolbar } from "markmap-toolbar";
import "markmap-toolbar/dist/style.css";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
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

function renderToolbar(mm: Markmap, wrapper: HTMLElement | null) {
	if (!wrapper) return;
	while (wrapper?.firstChild) wrapper.firstChild.remove();
	if (mm && wrapper) {
		const toolbar = new Toolbar();
		toolbar.attach(mm);
		toolbar.setItems([...Toolbar.defaultItems]);
		wrapper.append(toolbar.render());
	}
}

export default function FullscreenMindMap() {
	const router = useRouter();
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
		// Only create markmap on client side
		if (!isMounted || refMm.current) return;
		const mm = Markmap.create(refSvg.current, {
			initialExpandLevel: 2,
			maxWidth: 300,
		});
		refMm.current = mm;
		renderToolbar(refMm.current, refToolbar.current);
	}, [isMounted]);

	useEffect(() => {
		// Update data for markmap once value is changed
		if (!isMounted) return;
		const mm = refMm.current;
		if (!mm) return;
		const { root } = transformer.transform(initValue);
		mm.setData(root).then(() => {
			mm.fit();
		});
	}, [isMounted]);

	const goBack = () => {
		router.back();
	};

	const goHome = () => {
		router.push("/");
	};

	if (!isMounted) {
		return (
			<main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative">
				<div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm">
					<div className="flex items-center justify-between px-6 py-3 h-16">
						<div className="flex items-center gap-4">
							<Button onClick={goBack} variant="outline" size="sm" className="flex items-center gap-2">
								<ArrowLeft className="w-4 h-4" />
								Quay lại
							</Button>
							<Button onClick={goHome} variant="outline" size="sm" className="flex items-center gap-2">
								<Home className="w-4 h-4" />
								Trang chủ
							</Button>
						</div>
						<h1 className="text-lg font-semibold text-gray-800">Sơ đồ Tư duy - Toàn màn hình</h1>
						<div className="w-32"></div>
					</div>
				</div>
				<div className="pt-16 h-screen flex items-center justify-center">
					<div className="text-center">
						<div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600 mx-auto mb-4"></div>
						<p className="text-gray-600">Đang tải sơ đồ tư duy...</p>
					</div>
				</div>
			</main>
		);
	}

	return (
		<main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative">
			{/* Fixed Navigation Bar */}
			<div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm">
				<div className="flex items-center justify-between px-6 py-3 h-16">
					<div className="flex items-center gap-4">
						<Button onClick={goBack} variant="outline" size="sm" className="flex items-center gap-2">
							<ArrowLeft className="w-4 h-4" />
							Quay lại
						</Button>
						<Button onClick={goHome} variant="outline" size="sm" className="flex items-center gap-2">
							<Home className="w-4 h-4" />
							Trang chủ
						</Button>
					</div>
					<h1 className="text-lg font-semibold text-gray-800">Sơ đồ Tư duy - Toàn màn hình</h1>
					<div className="w-32"></div> {/* Spacer for centering */}
				</div>
			</div>

			{/* Full Screen Mind Map */}
			<div className="pt-16 h-screen">
				<div className="relative h-full w-full bg-gradient-to-br from-slate-50 to-emerald-50">
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
				</div>
			</div>
		</main>
	);
}
