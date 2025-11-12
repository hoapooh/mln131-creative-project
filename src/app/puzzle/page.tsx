"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { triggerFireworks, triggerSideCannons } from "@/components/ui/confetti";
import { CheckCircle, RefreshCw, Home, Trophy, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Câu hỏi và đáp án
const questions = [
	{
		id: 1,
		question: "Theo C. Mác và Ph. Ăngghen, gia đình là hình thức cộng đồng xã hội đặc biệt vì:",
		options: [
			"Nó dựa trên quan hệ huyết thống tự nhiên của con người",
			"Nó gắn với quá trình sinh sản và duy trì nòi giống",
			"Nó bao hàm cả quan hệ xã hội giữa vợ chồng, cha mẹ và con cái",
			"Nó phản ánh sự phát triển của sản xuất vật chất",
		],
		correctAnswer: 2,
		explanation:
			"Gia đình được Mác - Ăngghen xem như một hình thức cộng đồng đặc biệt vì nó không chỉ dựa trên quan hệ huyết thống mà còn bao hàm toàn bộ các quan hệ xã hội phức hợp giữa vợ chồng, cha mẹ và con cái.",
	},
	{
		id: 2,
		question: 'Gia đình được coi là "tế bào của xã hội" vì:',
		options: [
			"Là nơi gắn kết tình cảm giữa các thành viên",
			"Là đơn vị trực tiếp tái tạo dân số và sức lao động cho xã hội",
			"Là hình thức tổ chức lâu đời nhất trong lịch sử loài người",
			"Là thiết chế duy trì các giá trị văn hóa truyền thống",
		],
		correctAnswer: 1,
		explanation:
			'Gia đình được gọi là "tế bào của xã hội" bởi vì nó là đơn vị cơ bản, trực tiếp thực hiện chức năng tái tạo dân số và sức lao động cho xã hội, đảm bảo sự tồn tại và phát triển của cộng đồng.',
	},
	{
		id: 3,
		question: "Chức năng giáo dục của gia đình chủ yếu thể hiện ở việc:",
		options: [
			"Truyền thụ tri thức chuyên môn cho trẻ nhỏ",
			"Bồi dưỡng kỹ năng lao động để phục vụ xã hội",
			"Hình thành nhân cách, đạo đức và lối sống từ nền tảng gia đình",
			"Giúp trẻ thích nghi với môi trường học tập mới",
		],
		correctAnswer: 2,
		explanation:
			"Chức năng giáo dục của gia đình tập trung vào việc hình thành nhân cách, đạo đức và lối sống cho con cái từ những năm đầu đời, tạo nền tảng vững chắc cho sự phát triển toàn diện của trẻ.",
	},
	{
		id: 4,
		question: 'Xu hướng "hạt nhân hóa" gia đình hiện nay dẫn đến vấn đề nào đáng lưu ý nhất?',
		options: [
			"Tăng gắn bó giữa các thế hệ",
			"Giảm mâu thuẫn thế hệ trong gia đình",
			"Hạn chế thời gian và sự chia sẻ giữa các thành viên",
			"Gia tăng vai trò của người cao tuổi trong quyết định gia đình",
		],
		correctAnswer: 2,
		explanation:
			"Xu hướng hạt nhân hóa gia đình làm thu hẹp quy mô gia đình, dẫn đến hạn chế thời gian và cơ hội chia sẻ giữa các thành viên, đặc biệt là giữa các thế hệ, ảnh hưởng đến tính gắn kết truyền thống.",
	},
	{
		id: 5,
		question: "Khi gia đình chuyển từ kinh tế tự túc sang kinh tế hàng hóa, điều đó cho thấy:",
		options: [
			"Gia đình đã mất tính độc lập về kinh tế",
			"Gia đình gắn kết chặt hơn với các quan hệ thị trường",
			"Gia đình giảm vai trò trong giáo dục con cái",
			"Gia đình trở lại mô hình sản xuất truyền thống",
		],
		correctAnswer: 1,
		explanation:
			"Sự chuyển đổi từ kinh tế tự túc sang kinh tế hàng hóa thể hiện việc gia đình ngày càng gắn kết chặt chẽ với thị trường, tham gia sâu hơn vào các quan hệ kinh tế - xã hội rộng lớn.",
	},
	{
		id: 6,
		question: "Sự xuất hiện nhiều mô hình quyền lực trong gia đình hiện nay phản ánh:",
		options: [
			"Xu hướng cá nhân hóa trong đời sống hiện đại",
			"Quá trình dân chủ hóa và bình đẳng giới trong gia đình",
			"Sự suy yếu của người chồng trong vai trò trụ cột",
			"Ảnh hưởng tiêu cực của cơ chế thị trường",
		],
		correctAnswer: 1,
		explanation:
			"Sự đa dạng hóa mô hình quyền lực trong gia đình phản ánh xu hướng tích cực của quá trình dân chủ hóa và thúc đẩy bình đẳng giới, tạo điều kiện cho sự tham gia bình đẳng của các thành viên trong ra quyết định.",
	},
	{
		id: 7,
		question: "Thách thức lớn nhất đối với chức năng tinh thần của gia đình trong kỷ nguyên số là:",
		options: [
			"Quỹ thời gian cho sinh hoạt chung bị thu hẹp bởi công nghệ",
			"Sự cạnh tranh giữa các thế hệ trong việc sử dụng thiết bị số",
			"Gia tăng áp lực tài chính trong chi tiêu cho thiết bị điện tử",
			"Việc thiếu kết nối với các giá trị văn hóa dân tộc",
		],
		correctAnswer: 0,
		explanation:
			"Trong kỷ nguyên số, thách thức lớn nhất là thời gian dành cho sinh hoạt chung của gia đình bị thu hẹp do sự chi phối của công nghệ, ảnh hưởng đến chức năng gắn kết tinh thần truyền thống.",
	},
	{
		id: 8,
		question: "Giá trị bình đẳng và dân chủ trong gia đình được thể hiện rõ nhất khi:",
		options: [
			"Mỗi thành viên được tham gia vào việc ra quyết định chung",
			"Người đàn ông vẫn giữ vai trò chủ đạo về tài chính",
			"Con cái được quyền tự quyết hoàn toàn mọi vấn đề cá nhân",
			"Người phụ nữ đảm nhận vai trò nội trợ truyền thống",
		],
		correctAnswer: 0,
		explanation:
			"Bình đẳng và dân chủ trong gia đình được thể hiện rõ nhất khi mọi thành viên, bất kể giới tính hay tuổi tác, đều có quyền và cơ hội tham gia vào việc đưa ra các quyết định quan trọng của gia đình.",
	},
	{
		id: 9,
		question: "Để xây dựng gia đình Việt Nam 4.0, giải pháp nào phù hợp nhất?",
		options: [
			"Bảo tồn nguyên mẫu gia đình truyền thống, tránh du nhập văn hóa mới",
			"Kết hợp giáo dục đạo đức dân tộc với lối sống, pháp luật và khoa học hiện đại",
			"Ưu tiên phát triển kinh tế, hạn chế đề cao giá trị tinh thần",
			'Khuyến khích sinh nhiều con để duy trì truyền thống "đông con cháu"',
		],
		correctAnswer: 1,
		explanation:
			"Xây dựng gia đình Việt Nam 4.0 cần có sự kết hợp hài hòa giữa việc giáo dục đạo đức dân tộc tốt đẹp với việc áp dụng lối sống, pháp luật và khoa học hiện đại, tạo nên mô hình gia đình vừa giữ gìn bản sắc vừa phù hợp thời đại.",
	},
];

const familyQuotes = [
	"Gia đình là nơi bắt đầu cuộc sống và tình yêu, nơi chúng ta học cách chia sẻ và quan tâm.",
	"Hạnh phúc gia đình không phải là điều gì to lớn, mà là những khoảnh khắc nhỏ bé chúng ta ở bên nhau.",
	"Gia đình là tài sản quý giá nhất, là nguồn sức mạnh giúp ta vượt qua mọi khó khăn trong cuộc sống.",
	"Trong gia đình, tình yêu thương là ngôn ngữ chung, sự thấu hiểu là cầu nối, và niềm tin là nền tảng.",
	"Gia đình Việt Nam - nơi truyền thống hòa quyện với hiện đại, tạo nên một tổ ấm đầy tình yêu thương.",
];

export default function PuzzlePage() {
	const [solvedPieces, setSolvedPieces] = useState<boolean[]>(new Array(9).fill(false));
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showQuestion, setShowQuestion] = useState(false);
	const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
	const [showExplanation, setShowExplanation] = useState(false);
	const [isCompleted, setIsCompleted] = useState(false);

	// Hình ảnh gia đình truyền thống Việt Nam
	const backgroundImage =
		"https://cdn-media.sforum.vn/storage/app/media/CTVSEO_Maihue/%E1%BA%A3nh%20gia%20%C4%91%C3%ACnh/anh-gia-dinh-12.jpg";

	// Quote ngẫu nhiên
	const randomQuote = familyQuotes[Math.floor(Math.random() * familyQuotes.length)];

	useEffect(() => {
		const solvedCount = solvedPieces.filter(Boolean).length;
		if (solvedCount === 9 && !isCompleted) {
			setIsCompleted(true);
			// Trigger both confetti effects
			triggerFireworks();
			setTimeout(() => triggerSideCannons(), 1000); // Delay side cannons by 1 second
		}
	}, [solvedPieces, isCompleted]);

	const handlePieceClick = (index: number) => {
		if (!solvedPieces[index]) {
			setCurrentQuestion(index);
			setShowQuestion(true);
			setSelectedAnswer(null);
			setShowExplanation(false);
		}
	};

	const handleAnswerSelect = (answerIndex: number) => {
		setSelectedAnswer(answerIndex);
	};

	const handleSubmitAnswer = () => {
		if (selectedAnswer === null) return;

		setShowExplanation(true);

		if (selectedAnswer === questions[currentQuestion].correctAnswer) {
			setTimeout(() => {
				const newSolvedPieces = [...solvedPieces];
				newSolvedPieces[currentQuestion] = true;
				setSolvedPieces(newSolvedPieces);
				setShowQuestion(false);
			}, 2000);
		}
	};

	const handleTryAgain = () => {
		setSelectedAnswer(null);
		setShowExplanation(false);
	};

	const resetPuzzle = () => {
		setSolvedPieces(new Array(9).fill(false));
		setIsCompleted(false);
		setShowQuestion(false);
		setCurrentQuestion(0);
		setSelectedAnswer(null);
		setShowExplanation(false);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8 px-4">
			<div className="max-w-6xl mx-auto">
				{/* Header */}
				<div className="text-center mb-8">
					<div className="flex items-center justify-center gap-4 mb-4">
						<Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
							<Home size={20} />
							<span>Trang chủ</span>
						</Link>
					</div>
					<h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 leading-20">
						Puzzle Gia Đình Việt Nam
					</h1>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Trả lời đúng các câu hỏi để mở khóa từng phần của bức tranh về gia đình hạnh phúc
					</p>
					<div className="flex items-center justify-center gap-4 mt-4">
						<Badge variant="outline" className="flex items-center gap-2">
							<CheckCircle size={16} />
							{solvedPieces.filter(Boolean).length}/9 hoàn thành
						</Badge>
						<Button onClick={resetPuzzle} variant="outline" size="sm" className="flex items-center gap-2">
							<RefreshCw size={16} />
							Đặt lại
						</Button>
					</div>
				</div>

				{/* Puzzle Grid */}
				<div className="flex justify-center">
					<div className="w-full max-w-4xl">
						<Card className="p-6">
							<CardContent className="p-0">
								<div className="relative">
									<Image
										src={backgroundImage}
										alt="Gia đình hạnh phúc"
										width={800}
										height={400}
										className="w-full h-96 object-cover rounded-lg"
									/>

									{/* 3x3 Grid Overlay */}
									<div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1 p-1">
										{Array.from({ length: 9 }, (_, index) => (
											<div
												key={index}
												onClick={() => handlePieceClick(index)}
												className={`
                          relative cursor-pointer transition-all duration-300
                          ${
														!solvedPieces[index]
															? "bg-gray-800/80 hover:bg-gray-700/80 backdrop-blur-sm"
															: "bg-transparent"
													}
                        `}
											>
												{!solvedPieces[index] && (
													<div className="absolute inset-0 flex items-center justify-center">
														<div className="text-center">
															<div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mb-2 mx-auto">
																<span className="text-white font-bold">{index + 1}</span>
															</div>
															<div className="text-xs text-white/80">Câu hỏi</div>
														</div>
													</div>
												)}
												{solvedPieces[index] && (
													<div className="absolute top-2 right-2">
														<CheckCircle className="w-6 h-6 text-green-500 bg-white rounded-full" />
													</div>
												)}
											</div>
										))}
									</div>
								</div>

								{/* Completion Message */}
								{isCompleted && (
									<div className="mt-6 text-center">
										<div className="flex items-center justify-center gap-2 mb-4">
											<Trophy className="w-8 h-8 text-yellow-500" />
											<h2 className="text-2xl font-bold text-green-600">Chúc mừng bạn đã hoàn thành!</h2>
										</div>
										<div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg p-6">
											<Heart className="w-6 h-6 text-red-500 mx-auto mb-3" />
											<p className="text-lg italic text-gray-800 font-medium">&ldquo;{randomQuote}&rdquo;</p>
										</div>
									</div>
								)}
							</CardContent>
						</Card>
					</div>
				</div>

				{/* Question Modal */}
				<Dialog open={showQuestion} onOpenChange={setShowQuestion}>
					<DialogContent className="sm:max-w-[600px]">
						<DialogHeader>
							<DialogTitle className="flex items-center gap-2">
								<Badge variant="secondary">Câu hỏi {currentQuestion + 1}</Badge>
								<span className="text-lg font-semibold">Trả lời để mở khóa ô puzzle</span>
							</DialogTitle>
						</DialogHeader>

						<div className="py-4">
							<h3 className="text-lg font-medium text-gray-900 mb-6 leading-relaxed">
								{questions[currentQuestion]?.question}
							</h3>

							<div className="space-y-3 mb-6">
								{questions[currentQuestion]?.options.map((option, index) => (
									<button
										key={index}
										onClick={() => handleAnswerSelect(index)}
										disabled={showExplanation}
										className={`
                        w-full p-4 text-left rounded-lg border-2 transition-all
                        ${
													selectedAnswer === index
														? showExplanation
															? selectedAnswer === questions[currentQuestion].correctAnswer
																? "bg-green-100 border-green-500 text-green-800"
																: "bg-red-100 border-red-500 text-red-800"
															: "bg-blue-100 border-blue-500 text-blue-800"
														: showExplanation && index === questions[currentQuestion].correctAnswer
														? "bg-green-100 border-green-500 text-green-800"
														: "bg-white border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50"
												}
                        ${showExplanation ? "cursor-not-allowed" : "cursor-pointer hover:shadow-md"}
                      `}
									>
										<div className="flex items-start gap-3">
											<span className="font-semibold text-sm bg-gray-100 px-2 py-1 rounded">
												{String.fromCharCode(65 + index)}
											</span>
											<span className="flex-1">{option}</span>
										</div>
									</button>
								))}
							</div>

							{showExplanation && (
								<div
									className={`
                    p-4 rounded-lg mb-6 border-l-4
                    ${
											selectedAnswer === questions[currentQuestion].correctAnswer
												? "bg-green-50 border-l-green-500"
												: "bg-red-50 border-l-red-500"
										}
                  `}
								>
									<h4
										className={`font-semibold mb-2 text-lg ${
											selectedAnswer === questions[currentQuestion].correctAnswer ? "text-green-800" : "text-red-800"
										}`}
									>
										{selectedAnswer === questions[currentQuestion].correctAnswer ? "🎉 Chính xác!" : "❌ Chưa đúng!"}
									</h4>
									<p className="text-sm text-gray-700 leading-relaxed">
										<strong>Giải thích:</strong> {questions[currentQuestion]?.explanation}
									</p>
								</div>
							)}

							<div className="flex gap-3 justify-end">
								{!showExplanation ? (
									<>
										<Button onClick={() => setShowQuestion(false)} variant="outline">
											Hủy
										</Button>
										<Button onClick={handleSubmitAnswer} disabled={selectedAnswer === null} className="min-w-[120px]">
											Xác nhận
										</Button>
									</>
								) : selectedAnswer !== questions[currentQuestion].correctAnswer ? (
									<>
										<Button onClick={() => setShowQuestion(false)} variant="outline">
											Đóng
										</Button>
										<Button onClick={handleTryAgain} variant="default" className="min-w-[120px]">
											Thử lại
										</Button>
									</>
								) : (
									<Button onClick={() => setShowQuestion(false)} variant="outline">
										Đóng
									</Button>
								)}
							</div>
						</div>
					</DialogContent>
				</Dialog>

				{/* Instructions */}
				{!showQuestion && (
					<div className="mt-8">
						<Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50">
							<CardContent className="p-0">
								<h3 className="text-xl font-semibold text-gray-800 mb-3">Hướng dẫn chơi</h3>
								<div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
									<div className="flex items-center gap-3">
										<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
											<span className="text-blue-600 font-bold">1</span>
										</div>
										<span>Nhấp vào các ô được đánh số để mở modal câu hỏi</span>
									</div>
									<div className="flex items-center gap-3">
										<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
											<span className="text-green-600 font-bold">2</span>
										</div>
										<span>Trả lời đúng để mở khóa phần tương ứng của tranh</span>
									</div>
									<div className="flex items-center gap-3">
										<div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
											<span className="text-purple-600 font-bold">3</span>
										</div>
										<span>Hoàn thành tất cả để nhận được tin nhắn đặc biệt!</span>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				)}
			</div>
		</div>
	);
}
