export async function GET(request: Request) {
  // Get arguments
  const searchParams = new URL(request.url).searchParams;
  const product_id = searchParams.get('id');
  const product_size = searchParams.get('size');
}
