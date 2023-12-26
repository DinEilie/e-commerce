import Brands from "./components/Brands/Brands";
import Categories from "./components/Categories/Categories";
import Incentives from "./components/Incentives/Incentives";
import Introduction from "./components/Intorduction/Introduction";
import OnSale from "./components/OnSale/OnSale";
import Thanks from "./components/Thanks/Thanks";

export default function Home() {
	return (
		<main>
			<Introduction />
			<OnSale />
			<Brands />
			<Categories />
			<Incentives />
			<Thanks />
		</main>
	);
}
