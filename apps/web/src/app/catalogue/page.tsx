import axios from "axios";
import ProviderCatalogue from "./providerPage";

export default async function Catalogue() {
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
      <ProviderCatalogue props={{ products: products }} />
    </>
  );
}
