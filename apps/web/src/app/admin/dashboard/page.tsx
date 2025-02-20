import axios from "axios";
import ProviderAdminDashboard from "./providerPage";

export default async function AdminDashboardServer() {
  let products = undefined;
  try {
    const productsRaw = await axios.get(
      process.env.NEXT_PUBLIC_BASE_API_URL + "/data/products"
    );
    products = productsRaw.data.data;
  } catch (err) {
    console.log(err);
  }

  return (
    <>
      <ProviderAdminDashboard products={products} />
    </>
  );
}
