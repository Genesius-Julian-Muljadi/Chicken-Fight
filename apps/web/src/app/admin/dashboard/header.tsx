"use client";

import React from "react";
import { Navbar } from "@material-tailwind/react";
import CatalogueHeaderTab from "@/components/catalogue/headerTab";

export default function DashboardHeader() {
  return (
    <header className="min-h-18 w-fit ml-4 sm:ml-6 md:ml-8 lg:ml-10 xl:ml-12 bg-primary-100 dark:bg-backtheme-700 rounded-t-xl shadow-md shadow-gray-700 dark:shadow-primary-900 pb-1 -mb-1">
      <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-2 bg-primary-100 dark:bg-backtheme-700 border-primary-100 dark:border-backtheme-700 rounded-b-none shadow-none">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <CatalogueHeaderTab />
        </div>
      </Navbar>
    </header>
  );
}
