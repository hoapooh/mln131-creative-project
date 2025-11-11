import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Shield, BookOpen, Cpu, Users, Database, AlertCircle } from "lucide-react";

export default function AIUsagePage() {
	return (
		<main className="min-h-screen">
			<ScrollProgress className="top-[65px]" />
			<Header />

			<section className="py-20 px-4">
				<div className="container mx-auto max-w-4xl">
					<div className="mb-12 text-center">
						<h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">
							Báo Cáo Dự Án Ứng Dụng AI Hỗ Trợ Học Tập
						</h1>
						<p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
							Tài liệu minh bạch về việc sử dụng các công cụ trí tuệ nhân tạo trong phát triển tài nguyên giáo dục lịch sử Đảng Cộng sản Việt Nam
						</p>
					</div>

					<div className="space-y-8">
						{/* Công cụ đã sử dụng */}
						<Card className="border-l-4 border-l-blue-500">
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Cpu className="w-5 h-5 text-blue-500" />
									Công Cụ AI Đã Sử Dụng
								</CardTitle>
								<CardDescription>Danh sách các nền tảng AI được tích hợp vào quy trình học tập</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
									{["NotebookLM", "ChatGPT", "Gemini", "GitHub Copilot"].map((tool) => (
										<div key={tool} className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
											<Badge variant="secondary" className="text-xs">{tool}</Badge>
										</div>
									))}
								</div>
								<div className="mt-4">
									<h4 className="font-semibold mb-2">Mục đích sử dụng:</h4>
									<ul className="list-disc list-inside space-y-1 text-muted-foreground">
										<li>Hỗ trợ tổng hợp nội dung từ tài liệu PDF</li>
										<li>Cung cấp thông tin cho hệ thống chatbot</li>
										<li>Hỗ trợ cấu trúc code giao diện và bố cục web</li>
										<li>Tối ưu hóa chuyển động và trải nghiệm người dùng</li>
									</ul>
								</div>
							</CardContent>
						</Card>

						{/* Output từ AI */}
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Database className="w-5 h-5 text-green-500" />
									Kết Quả Đầu Ra Từ AI
								</CardTitle>
								<CardDescription>Các sản phẩm ban đầu được tạo ra bởi công cụ AI</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="grid md:grid-cols-2 gap-4">
									<div className="p-4 border rounded-lg">
										<h4 className="font-semibold mb-2 flex items-center gap-2">
											<BookOpen className="w-4 h-4" />
											Bản tóm tắt lý thuyết
										</h4>
										<p className="text-sm text-muted-foreground">Rút ra từ tài liệu PDF gốc</p>
									</div>
									<div className="p-4 border rounded-lg">
										<h4 className="font-semibold mb-2 flex items-center gap-2">
											<CheckCircle className="w-4 h-4" />
											Bộ câu hỏi trắc nghiệm
										</h4>
										<p className="text-sm text-muted-foreground">Quiz ban đầu từ AI</p>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Phần nhóm chỉnh sửa */}
						<Card className="border-l-4 border-l-orange-500">
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Users className="w-5 h-5 text-orange-500" />
									Công Việc Chỉnh Sửa Của Nhóm
								</CardTitle>
								<CardDescription>Quy trình kiểm tra và cải thiện nội dung AI</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-3">
									<div className="flex items-start gap-3">
										<CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
										<div>
											<h4 className="font-semibold">Đối chiếu và hiệu đính</h4>
											<p className="text-muted-foreground text-sm">Kiểm tra theo nguồn chính thống: Giáo trình học phần Lịch sử Đảng cộng sản Việt Nam</p>
										</div>
									</div>
									<div className="flex items-start gap-3">
										<CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
										<div>
											<h4 className="font-semibold">Bổ sung ví dụ thực tiễn</h4>
											<p className="text-muted-foreground text-sm">Thêm các ví dụ cụ thể tại Việt Nam để tăng tính phù hợp và dễ hiểu</p>
										</div>
									</div>
									<div className="flex items-start gap-3">
										<CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
										<div>
											<h4 className="font-semibold">Biên soạn lại câu hỏi quiz</h4>
											<p className="text-muted-foreground text-sm">Chỉnh sửa để rõ ràng, dễ tiếp cận với sinh viên</p>
										</div>
									</div>
									<div className="flex items-start gap-3">
										<CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
										<div>
											<h4 className="font-semibold">Thiết kế giao diện</h4>
											<p className="text-muted-foreground text-sm">Tinh chỉnh để phù hợp với chủ đề sản phẩm</p>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Kiểm chứng nguồn */}
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Shield className="w-5 h-5 text-purple-500" />
									Kiểm Chứng và Đối Chiếu Nguồn
								</CardTitle>
								<CardDescription>Quy trình xác minh tính chính xác của thông tin</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="bg-muted/50 p-4 rounded-lg">
									<p className="text-sm text-muted-foreground italic mb-2">
										Phần Kiểm chứng và đối chiếu nguồn hãy xem hình ảnh
									</p>
									<p className="text-sm">
										Tất cả thông tin được đối chiếu trực tiếp với văn bản gốc từ Giáo trình học phần 
										Lịch sử Đảng cộng sản Việt Nam, đảm bảo tính chính xác và đáng tin cậy.
									</p>
								</div>
							</CardContent>
						</Card>

						<Separator className="my-8" />

						{/* Ứng dụng AI sáng tạo */}
						<Card className="border-l-4 border-l-green-500">
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<AlertCircle className="w-5 h-5 text-green-500" />
									Ứng Dụng AI Sáng Tạo
								</CardTitle>
								<CardDescription>AI đóng vai trò hỗ trợ, không hoàn toàn phụ thuộc vào công việc nghiên cứu</CardDescription>
							</CardHeader>
							<CardContent className="space-y-6">
								<div>
									<h4 className="font-semibold mb-3">Vai trò hỗ trợ của AI:</h4>
									<div className="space-y-4">
										<div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
											<h5 className="font-medium mb-2">Tóm tắt kiến thức</h5>
											<p className="text-sm text-muted-foreground">
												Chắt lọc nội dung cốt lõi từ tài liệu gốc, hình thành khung lý thuyết và hỗ trợ xây dựng câu hỏi quiz
											</p>
										</div>
										<div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
											<h5 className="font-medium mb-2">Gợi ý thực tiễn</h5>
											<p className="text-sm text-muted-foreground">
												Cung cấp các ví dụ, dẫn chứng gắn với bối cảnh Việt Nam đương đại để minh họa cho nội dung lý thuyết
											</p>
										</div>
									</div>
								</div>

								<div>
									<h4 className="font-semibold mb-3">Công việc nhóm thực hiện:</h4>
									<div className="grid gap-3">
										{[
											"Nghiên cứu và khai thác nội dung từ các nguồn chính thống: Giáo trình học phần Lịch sử Đảng cộng sản Việt Nam",
											"Chọn lọc ví dụ thực tiễn phù hợp với mục tiêu và sản phẩm của nhóm",
											"Biên soạn và điều chỉnh bộ câu hỏi quiz sao cho rõ ràng, gần gũi với sinh viên",
											"Đối chiếu, xác minh độ chính xác của toàn bộ thông tin trước khi sử dụng"
										].map((item, index) => (
											<div key={index} className="flex items-start gap-3">
												<CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
												<p className="text-sm">{item}</p>
											</div>
										))}
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Phân chia công việc */}
						<Card className="border-l-4 border-l-indigo-500">
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Users className="w-5 h-5 text-indigo-500" />
									Phân Chia Công Việc Các Thành Viên
								</CardTitle>
								<CardDescription>Vai trò và nhiệm vụ cụ thể của từng thành viên trong nhóm 6</CardDescription>
							</CardHeader>
							<CardContent className="space-y-6">
								<div className="grid md:grid-cols-2 gap-6">
									<div className="space-y-4">
										<div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
											<h4 className="font-semibold mb-2 text-indigo-700 dark:text-indigo-300">An Phúc Hoà - Trưởng nhóm</h4>
											<ul className="text-sm space-y-1 text-muted-foreground">
												<li>• Lãnh đạo và điều phối nhóm</li>
												<li>• Phân công công việc cho các thành viên</li>
												<li>• Thiết kế giao diện website</li>
												<li>• Chuẩn bị và thực hiện thuyết trình</li>
												<li>• Tham gia phản biện và đánh giá</li>
											</ul>
										</div>
										
										<div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
											<h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Hồ Đăng Khoa - Thiết kế & Nghiên cứu</h4>
											<ul className="text-sm space-y-1 text-muted-foreground">
												<li>• Thiết kế và phát triển giao diện</li>
												<li>• Tìm kiếm và thu thập tài liệu</li>
												<li>• Nghiên cứu nguồn tài liệu lịch sử</li>
												<li>• Chuẩn bị và thực hiện thuyết trình</li>
												<li>• Tham gia phản biện và đánh giá</li>
											</ul>
										</div>
									</div>

									<div className="space-y-4">
										<div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
											<h4 className="font-semibold mb-2 text-green-700 dark:text-green-300">Đỗ Anh Tú - Chuyên gia AI & Chatbot</h4>
											<ul className="text-sm space-y-1 text-muted-foreground">
												<li>• Lọc và xử lý dữ liệu từ tài liệu</li>
												<li>• Tích hợp Chatbot sử dụng BotPress</li>
												<li>• Huấn luyện AI dựa trên nội dung tổng hợp</li>
												<li>• Chuẩn bị và thực hiện thuyết trình</li>
												<li>• Tham gia phản biện và đánh giá</li>
											</ul>
										</div>

										<div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
											<h4 className="font-semibold mb-2 text-orange-700 dark:text-orange-300">Đỗ Văn Trí - Nội dung & Câu hỏi</h4>
											<ul className="text-sm space-y-1 text-muted-foreground">
												<li>• Tìm kiếm và nghiên cứu tài liệu</li>
												<li>• Tạo và biên soạn các câu hỏi quiz</li>
												<li>• Phát triển bộ câu hỏi trắc nghiệm</li>
												<li>• Chuẩn bị và thực hiện thuyết trình</li>
												<li>• Tham gia phản biện và đánh giá</li>
											</ul>
										</div>
									</div>
								</div>

								<div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border">
									<h4 className="font-semibold mb-2">Trách nhiệm chung của toàn nhóm:</h4>
									<div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
										<ul className="space-y-1">
											<li>• Tham gia thuyết trình nhóm</li>
											<li>• Phản biện và đánh giá các nhóm khác</li>
											<li>• Họp nhóm định kỳ và thảo luận</li>
										</ul>
										<ul className="space-y-1">
											<li>• Đóng góp ý tưởng và giải pháp</li>
											<li>• Review và feedback lẫn nhau</li>
											<li>• Hỗ trợ khi gặp khó khăn</li>
										</ul>
									</div>
								</div>

								<div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
									<h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Đặc điểm nổi bật của nhóm:</h4>
									<div className="text-sm text-muted-foreground space-y-1">
										<p>• <strong>Tinh thần hợp tác cao:</strong> Mọi thành viên đều tham gia thuyết trình và phản biện</p>
										<p>• <strong>Phân công rõ ràng:</strong> Mỗi thành viên có chuyên môn riêng nhưng hỗ trợ lẫn nhau</p>
										<p>• <strong>Ứng dụng công nghệ:</strong> Tích hợp AI và Chatbot vào sản phẩm học tập</p>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Cam kết học thuật */}
						<Card className="border-2 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20">
							<CardHeader>
								<CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-300">
									<Shield className="w-5 h-5" />
									Cam Kết Học Thuật - Nhóm 6
								</CardTitle>
								<CardDescription className="text-red-600 dark:text-red-400">
									Cam kết nghiêm túc về tính trung thực và minh bạch trong nghiên cứu
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-4">
									<div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
										<h4 className="font-semibold mb-2 text-red-700 dark:text-red-300">Trách nhiệm học thuật</h4>
										<p className="text-sm">
											Toàn bộ sản phẩm được xây dựng trên cơ sở nghiên cứu nghiêm túc, đối chiếu từ tài liệu chính thống 
											và văn kiện của Đảng, không sao chép từ nguồn khác.
										</p>
									</div>
									
									<div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
										<h4 className="font-semibold mb-2 text-red-700 dark:text-red-300">Sử dụng công cụ hỗ trợ một cách minh bạch</h4>
										<p className="text-sm">
											Các công cụ hiện đại (bao gồm cả AI) chỉ được dùng nhằm hỗ trợ kỹ thuật và gợi ý bố cục, 
											tuyệt đối không thay thế tư duy, phân tích và lập luận của người học.
										</p>
									</div>

									<div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
										<h4 className="font-semibold mb-2 text-red-700 dark:text-red-300">Tôn trọng nguồn trích dẫn</h4>
										<p className="text-sm">
											Mọi thông tin, số liệu, dẫn chứng đều có nguồn gốc rõ ràng; các trích dẫn được kiểm tra 
											và trình bày trung thực.
										</p>
									</div>

									<div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
										<h4 className="font-semibold mb-2 text-red-700 dark:text-red-300">Tinh thần học tập trung thực</h4>
										<p className="text-sm">
											Kết quả cuối cùng là sự tổng hợp từ nghiên cứu của nhóm, không mượn hoặc sao chép 
											từ bất kỳ sản phẩm đã công bố nào.
										</p>
									</div>

									<div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
										<h4 className="font-semibold mb-2 text-red-700 dark:text-red-300">Cam kết cống hiến tri thức</h4>
										<p className="text-sm">
											Sản phẩm học tập này nhằm mục đích nâng cao kiến thức và rèn luyện kỹ năng nghiên cứu, 
											không sử dụng cho mục đích thương mại hay ngoài phạm vi môn học.
										</p>
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
