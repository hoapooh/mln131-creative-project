export function Footer() {
	return (
		<footer className="border-t border-border bg-card">
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-32 w-full">
					<div>
						<h3 className="text-xl font-bold mb-6 text-emerald-600">Gia đình 4.0</h3>
						<p className="text-muted-foreground leading-relaxed">
							Gia đình 4.0 là nền tảng kiến thức và công cụ hỗ trợ phát triển kỹ năng số cho gia đình Việt Nam trong
							thời đại 4.0.
						</p>
					</div>

					<div>
						<h4 className="font-semibold mb-6 text-right">Mục đích giáo dục</h4>
						<p className="text-muted-foreground leading-relaxed text-right">
							Trang web này được tạo ra với mục đích giáo dục và không nhằm mục đích thương mại. Mọi nội dung và tài
							nguyên được cung cấp miễn phí để hỗ trợ việc học tập và phát triển kỹ năng số cho cộng đồng.
						</p>
					</div>
				</div>

				<div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
					<p>© 2025 Dự án Gia đình 4.0. Được tạo ra cho mục đích giáo dục.</p>
				</div>
			</div>
		</footer>
	);
}
