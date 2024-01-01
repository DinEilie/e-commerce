import { productsData } from "@/app/types/productsData";

export async function GET(request: Request) {
	const id = request.url.slice(request.url.lastIndexOf("/") + 1);
	const idNumber = parseInt(id);
	const product = productsData.find((item) => item.productID === idNumber);
	return Response.json({ data: product });
}
