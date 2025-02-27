"use client";

import React from "react";
import {
  Button,
  Navbar,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import CatalogueHeaderTab from "@/components/catalogue/headerTab";
import { Product } from "@/interfaces/databaseTables";
import productTypes from "@/data/productTypes";
import { useSelector } from "react-redux";

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
  const mainFormActive = useSelector(
    (state: { TAMPSlice: { formActive: boolean } }) =>
      state.TAMPSlice.formActive
  );
  const mainEditActive = useSelector(
    (state: { TEMPSlice: { editActive: boolean } }) =>
      state.TEMPSlice.editActive
  );

  return (
    <header
      className="min-h-18 w-fit ml-4 sm:ml-6 md:ml-8 lg:ml-10 xl:ml-12 bg-primary-100 dark:bg-backtheme-900 rounded-t-xl shadow-md shadow-gray-700 dark:shadow-primary-900 pb-1 -mb-1"
      id="dashboard-header"
    >
      <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-2 bg-primary-100 dark:bg-backtheme-900 border-primary-100 dark:border-backtheme-900 rounded-b-none shadow-none">
        <div className="grid grid-cols-1 grid-rows-1">
          <div className="col-start-1 col-end-2 row-start-1 row-end-2 container mx-auto flex items-center justify-between text-blue-gray-900">
            <CatalogueHeaderTab
              props={
                products ? countProductTypes(products) : countProductTypes([])
              }
            />
          </div>
          <div
            className={
              (mainFormActive || mainEditActive ? "" : "hidden ") +
              "col-start-1 col-end-2 row-start-1 row-end-2 w-full z-50 bg-transparent"
            }
            aria-label="Type select disabled. Please cancel or complete the current form."
          >
            <Popover
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <PopoverHandler>
                <Button className="flex w-full h-full items-center gap-3 text-black dark:text-gray-100 bg-blue-gray-300/10 dark:bg-black/10 shadow-none hover:shadow-none hover:bg-blue-gray-100/10 active:bg-white/20 dark:hover:bg-black/15 dark:active:bg-black/20">
                  {""}
                </Button>
              </PopoverHandler>
              <PopoverContent className="flex flex-row gap-2 items-center py-1 text-black dark:text-gray-100 border-none shadow-md bg-primary-100 dark:bg-backtheme-900">
                <span className="dark:text-white font-semibold py-1">
                  Type select disabled. Please cancel or complete the current
                  form.
                </span>
                {/* {siteMetadata.whatsapp
                  ? "WhatsApp: " + siteMetadata.whatsapp
                  : "WhatsApp phone number"} */}
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </Navbar>
    </header>
  );
}
