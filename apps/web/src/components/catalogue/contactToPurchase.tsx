import siteMetadata from "@/data/siteMetadata";
import { PhoneArrowUpRightIcon } from "@heroicons/react/24/solid";
import {
  Button,
  IconButton,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import { createElement } from "react";

export default function ContactToPurchase({
  dashboard,
}: {
  dashboard: boolean;
}) {
  return (
    <div className="grid grid-cols-1 grid-rows-1">
      <a
        href={
          siteMetadata.whatsapp
            ? "tel:" + siteMetadata.whatsapp
            : dashboard
            ? "/dashboard"
            : "/catalogue"
        }
        className="col-start-1 row-start-1 col-end-2 row-end-2 inline-block sm:hidden mt-8"
      >
        <Button
          variant="text"
          className="flex items-center gap-3 dark:text-gray-100 bg-backtheme-300 dark:bg-backtheme-600 shadow-sm shadow-backtheme-800 dark:shadow-sm dark:shadow-backtheme-800/30 hover:bg-backtheme-200 active:bg-backtheme-100 dark:hover:bg-backtheme-700 dark:active:bg-backtheme-800"
          ripple={true}
        >
          {createElement(PhoneArrowUpRightIcon, {
            className: "w-5 h-5 -ml-1",
          })}
          Contact to purchase
        </Button>
      </a>
      <div className="col-start-1 row-start-1 col-end-2 row-end-2 mt-8 hidden sm:block">
        <Popover
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
        >
          <PopoverHandler>
            <Button className="flex items-center gap-3 text-black dark:text-gray-100 bg-backtheme-300 dark:bg-backtheme-600 shadow-sm shadow-backtheme-800 dark:shadow-md dark:shadow-backtheme-800 hover:bg-backtheme-200 active:bg-backtheme-100 dark:hover:bg-backtheme-700 dark:active:bg-backtheme-800">
              {createElement(PhoneArrowUpRightIcon, {
                className: "w-5 h-5 -ml-1",
              })}
              Contact to Purchase
            </Button>
          </PopoverHandler>
          <PopoverContent className="flex flex-row gap-2 items-center py-1 text-black dark:text-gray-100 border-none bg-backtheme-300 dark:bg-backtheme-600 shadow-sm shadow-backtheme-800 dark:shadow-md dark:shadow-backtheme-800">
            <IconButton variant="text" className="text-[#62c076]">
              <i className="fa-brands fa-whatsapp text-3xl not-italic opacity-75"></i>
            </IconButton>
            {siteMetadata.whatsapp
              ? "WhatsApp: " + siteMetadata.whatsapp
              : "WhatsApp phone number"}
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
