import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductSection from "./components/Product";

function App() {

	return (
		<main className="h-full w-full flex flex-col justify-between bg-blue-50">
			<Navbar />
			<ProductSection />
			<Footer />
		</main>
	);
}

export default App;
