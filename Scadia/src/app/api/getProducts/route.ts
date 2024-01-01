import { productsData } from "@/app/types/productsData";
export async function GET() {
	return Response.json(productsData);
}
