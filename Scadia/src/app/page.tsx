import Introduction from "./components/Intorduction/Introduction";
import Navbar from "./components/Navbar/Navbar";
import ProductCard from "./shared/ProductCard/ProductCard";

export default function Home() {
	return (
		<main>
			{/* <Navbar /> */}
			<Introduction />
			<div className="flex justify-center">
				<ProductCard isOnSale={false} productID={22} />
			</div>
		</main>
	);
}
