"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { Product } from "@/interfaces/databaseTables";
import DashboardHeader from "./header";
import DashboardProducts from "./products";
import siteMetadata from "@/data/siteMetadata";
import { IconButton, Typography } from "@material-tailwind/react";
import DashboardSpeedDial, {
  SpeedDialContent,
} from "@/components/dashboard/SpeedDial";
import { PhoneIcon } from "@heroicons/react/24/solid";

export default function ProviderAdminDashboard({
  products,
}: {
  products: Array<Product> | undefined;
}) {
  const speedDialContent: Array<SpeedDialContent> = [
    {
      title: "Edit phone number",
      icon: PhoneIcon,
      action: () => console.log("edit phone number action!"),
    },
  ];

  return (
    <Provider store={store}>
      <div className="flex flex-row justify-between mt-20 mb-4 mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 text-center dark:text-white text-xl sm:text-2xl md:text-3xl font-bold">
        <span
          aria-label="Admin Dashboard"
          className="my-auto md:my-0"
          id="dashboard-title"
        >
          Admin Dashboard
        </span>
        <div className="flex flex-row gap-2 my-auto md:my-0">
          <IconButton
            variant="text"
            ripple={false}
            className="my-auto text-[#62c076] hover:bg-inherit dark:hover:bg-inherit active:bg-inherit dark:active:bg-inherit cursor-default"
          >
            <i className="fa-brands fa-whatsapp text-3xl not-italic opacity-75"></i>
          </IconButton>
          <Typography
            color="blue-gray"
            aria-label={
              siteMetadata.whatsapp
                ? "WhatsApp: " + siteMetadata.whatsapp
                : "whatsapp phone number"
            }
            className="text-center font-semibold opacity-75 m-auto dark:text-white"
          >
            {siteMetadata.whatsapp
              ? "WhatsApp: " + siteMetadata.whatsapp
              : "whatsapp phone number"}
          </Typography>
          <div aria-label="WhatsApp speed dial" className="my-auto md:my-0">
            <DashboardSpeedDial
              contents={speedDialContent}
              placement="bottom"
            />
          </div>
        </div>
      </div>
      <DashboardHeader products={products} />
      <DashboardProducts products={products} />
    </Provider>
  );
}
