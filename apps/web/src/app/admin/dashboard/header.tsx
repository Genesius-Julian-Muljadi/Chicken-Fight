"use client";

import React from "react";
import { Navbar } from "@material-tailwind/react";
import CatalogueHeaderTab from "@/components/catalogue/headerTab";
import { Product } from "@/interfaces/databaseTables";
import productTypes from "@/data/productTypes";

function countProductTypes(products: Array<Product>): Array<number> {
  const output: Array<number> = [];
  for (let i = 0; i < productTypes.length; i++) {
    output.push(0);
  }

  products.forEach((product: Product) => {
    output[product.type - 1]++;
  });

  return output;
}

export default function DashboardHeader({
  products,
}: {
  products?: Array<Product> | undefined;
}) {
  return (
    <header
      className="min-h-18 w-fit ml-4 sm:ml-6 md:ml-8 lg:ml-10 xl:ml-12 bg-primary-100 dark:bg-backtheme-900 rounded-t-xl shadow-md shadow-gray-700 dark:shadow-primary-900 pb-1 -mb-1"
      id="dashboard-header"
    >
      <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-2 bg-primary-100 dark:bg-backtheme-900 border-primary-100 dark:border-backtheme-900 rounded-b-none shadow-none">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <CatalogueHeaderTab
            props={
              products ? countProductTypes(products) : countProductTypes([])
            }
          />
        </div>
      </Navbar>
    </header>
  );
}
