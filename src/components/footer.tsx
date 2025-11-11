export function Footer() {
	return (
		<footer className="border-t border-border bg-card">
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-32 w-full">
					<div>
						<h3 className="text-xl font-bold mb-6">Khí Thế Mùa Thu</h3>
						<p className="text-muted-foreground leading-relaxed">
							Tài liệu giáo dục về vai trò lãnh đạo của Đảng Cộng sản Việt Nam trong cuộc đấu tranh
							giành độc lập dân tộc.
						</p>
					</div>

					<div>
						<h4 className="font-semibold mb-6 text-right">Mục đích giáo dục</h4>
						<p className="text-muted-foreground leading-relaxed text-right">
							Trang web này được tạo ra với mục đích giáo dục nhằm cung cấp thông tin lịch sử dễ
							tiếp cận về một giai đoạn quan trọng trong lịch sử Việt Nam.
						</p>
					</div>
				</div>

				<div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
					<p>© 2025 Dự án Lịch sử Đảng Cộng sản Việt Nam. Được tạo ra cho mục đích giáo dục.</p>
				</div>
			</div>
		</footer>
	);
}
