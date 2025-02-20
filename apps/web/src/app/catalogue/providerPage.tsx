"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";
import CatalogueHeader from "./header";
import CatalogueProducts from "./products";
import { Product } from "@/interfaces/databaseTables";

interface CatalogueProps {
    products: Array<Product> | undefined
}

export default function ProviderCatalogue({ props }: { props: CatalogueProps }) {
  return (
    <Provider store={store}>
      <CatalogueHeader products={props.products} />
      <CatalogueProducts products={props.products} />
    </Provider>
  );
}
