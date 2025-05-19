import { useState } from "react";
import {
	ChevronDown,
	ChevronUp,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";

const images = [
	"/images/croissant-main.jpg",
	"/images/croissant-thumb1.jpg",
	"/images/croissant-thumb2.jpg",
];

export default function ProductSection() {
	const [quantity, setQuantity] = useState(1);
	const [showIngredients, setShowIngredients] = useState(false);
	const [currentImage, setCurrentImage] = useState(0);

	const nextImage = () =>
		setCurrentImage((prev) => (prev + 1) % images.length);
	const prevImage = () =>
		setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

	return (
		<section className="flex-grow flex flex-col gap-6 p-6 font-mono text-gray-800">
			{/* Header */}
			<h1 className="text-2xl uppercase border-b-4 border-blue-300 pb-2">
				🥐 Croissant
			</h1>

			{/* Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{/* Left Column */}
				<div className="flex flex-col items-center">
					{/* Browser-style window frame */}
					<div className="w-full max-w-md border-4 border-orange-300 bg-white">
						<div className="flex gap-2 bg-orange-200 p-1 border-b-4 border-orange-300">
							<div className="w-3 h-3 rounded-full bg-red-400" />
							<div className="w-3 h-3 rounded-full bg-yellow-400" />
							<div className="w-3 h-3 rounded-full bg-green-400" />
						</div>
						<div className="relative h-[400px] w-full overflow-hidden bg-white">
							<img
								src={images[currentImage]}
								alt={`Croissant ${currentImage + 1}`}
								className="h-full w-full object-cover"
							/>
						</div>

						{/* Image nav */}
						<div className="flex justify-between items-center p-2 bg-orange-100">
							<button
								onClick={prevImage}
								className="hover:scale-105 transition"
							>
								<ChevronLeft size={20} />
							</button>
							<span className="text-xs">
								Image {currentImage + 1} of {images.length}
							</span>
							<button
								onClick={nextImage}
								className="hover:scale-105 transition"
							>
								<ChevronRight size={20} />
							</button>
						</div>
					</div>
				</div>

				{/* Right Column */}
				<div className="flex flex-col justify-between gap-4 w-100">
					<div>
						<h2 className="text-xl">Croissant</h2>
						<p className="text-orange text-lg mt-1">7 AED</p>
						<p className="mt-2 text-sm">
							A flaky, buttery croissant baked fresh every
							morning. Perfect for breakfast or a snack.
						</p>

						{/* Quantity Selector */}
						<div className="mt-4 flex items-center gap-3">
							<span className="text-sm">Qty:</span>
							<button
								onClick={() =>
									setQuantity(Math.max(1, quantity - 1))
								}
								className="px-2 py-1 bg-purple-300 border-2 border-purple-500 hover:bg-purple-400 cursor-pointer"
							>
								−
							</button>
							<span className="px-3">{quantity}</span>
							<button
								onClick={() => setQuantity(quantity + 1)}
								className="px-2 py-1 bg-purple-300 border-2 border-purple-500 hover:bg-purple-400 cursor-pointer"
							>
								+
							</button>
						</div>

						{/* Action Buttons */}
						<div className="mt-4 flex flex-col gap-2">
							<button
								onClick={() =>
									alert(
										`Added ${quantity} croissant(s) to cart!`
									)
								}
								className="bg-purple-300 border-3 border-purple-500 px-4 py-2 uppercase font-bold hover:bg-purple-400 transition active:scale-95 w-full cursor-pointer"
							>
								Add {quantity} to Cart
							</button>
							<button
								onClick={() =>
									alert(
										`Buying ${quantity} croissant(s) now!`
									)
								}
								className="bg-orange-200 border-3 border-orange-400 px-4 py-2 uppercase font-bold hover:bg-orange-300 transition active:scale-95 w-full cursor-pointer"
							>
								Buy Now
							</button>
						</div>
					</div>

					{/* Ingredients Section */}
					<div className="h-full">
						<div
							className="flex items-center gap-2 cursor-pointer select-none hover:opacity-90"
							onClick={() => setShowIngredients(!showIngredients)}
						>
							<span className="text-sm font-bold uppercase">
								Ingredients
							</span>
							{showIngredients ? (
								<ChevronUp size={16} />
							) : (
								<ChevronDown size={16} />
							)}
						</div>

						{showIngredients && (
							<ul className="bg-blue-200 border-2 border-blue-500 p-2">
								<li>Flour</li>
								<li>Almond milk</li>
								<li>Plant butter</li>
								<li>Brown sugar</li>
								<li>Sea salt</li>
							</ul>
						)}
					</div>

					{/* Tags */}
					<div className="flex flex-wrap gap-2 mt-4">
						{["🌱 Vegan", "🥐 Hand-rolled", "💖 Best Seller"].map(
							(tag) => (
								<span
									key={tag}
									className="px-3 py-1 text-sm font-mono rounded-md border border-pastel-purple bg-pastel-purple/20 text-pastel-purple"
								>
									{tag}
								</span>
							)
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
