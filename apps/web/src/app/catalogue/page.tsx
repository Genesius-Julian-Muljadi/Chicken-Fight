import axios from "axios";
import ProviderCatalogue from "./providerPage";
import { Metadata } from "next";
import catalogueData from "@/data/catalogue/catalogueData";

export const metadata: Metadata = {
  title: catalogueData.title || "catalogueTitle",
  description: catalogueData.metaDescription || "catalogueMetaDescription",
};

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
