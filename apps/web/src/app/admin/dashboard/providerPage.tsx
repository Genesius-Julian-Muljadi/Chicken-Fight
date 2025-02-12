"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { Product } from "@/interfaces/databaseTables";
import DashboardHeader from "./header";
import DashboardProducts from "./products";
import siteMetadata from "@/data/siteMetadata";
import { IconButton, Typography } from "@material-tailwind/react";
import DashboardSpeedDial from "@/components/dashboard/SpeedDial";

interface CatalogueProps {
  products: Array<Product> | undefined;
}

export default function ProviderAdminDashboard({
  props,
}: {
  props: CatalogueProps;
}) {
  return (
    <Provider store={store}>
      <div className="flex flex-row justify-between mt-20 mb-4 mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 text-center dark:text-white text-xl sm:text-2xl md:text-3xl font-bold">
        <span>Admin Dashboard</span>
        <div className="flex flex-row gap-2">
          <IconButton
            variant="text"
            ripple={false}
            className="text-[#62c076] hover:bg-inherit dark:hover:bg-inherit active:bg-inherit dark:active:bg-inherit cursor-default"
          >
            <i className="fa-brands fa-whatsapp text-3xl not-italic opacity-75"></i>
          </IconButton>
          <Typography
            color="blue-gray"
            className="text-center font-semibold opacity-75 m-auto dark:text-white"
          >
            {siteMetadata.whatsapp
              ? "WhatsApp: " + siteMetadata.whatsapp
              : "whatsapp phone number"}
          </Typography>
          <DashboardSpeedDial />
        </div>
      </div>
      <DashboardHeader />
      <DashboardProducts products={props.products} />
    </Provider>
  );
}
