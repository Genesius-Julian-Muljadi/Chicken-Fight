import axios from "axios";
import ProviderAdminDashboard from "./providerPage";
import CloudinaryManager from "@/cloudinary/manager";

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
      <CloudinaryManager />
      <ProviderAdminDashboard products={products} />
    </>
  );
}
