

export default function Navbar() {
	return (
		<header className="w-full border-b-4 border-blue-400 text-gray-800 px-4 py-3 font-mono text-sm shadow-sm">
			<div className="max-w-6xl mx-auto flex justify-between items-center">
				<span className="uppercase tracking-wider">8-Bit Bakery</span>
				<nav className="space-x-4">
					<a href="#" className="hover:underline">
						Home
					</a>
					<a href="#" className="hover:underline">
						About
					</a>
					<a href="#" className="hover:underline">
						Contact
					</a>
					
				</nav>
			</div>
		</header>
	);
}
