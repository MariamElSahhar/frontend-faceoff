import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductSection from "./components/Product";
import { useState } from "react";

function App() {
	const [cartCount, setCartCount] = useState(0);

	return (
		<main className="h-full w-full flex flex-col justify-between bg-blue-50">
			<Navbar cartCount={cartCount} />
			<ProductSection setCartCount={setCartCount} cartCount={cartCount} />
			<Footer />
		</main>
	);
}

export default App;
