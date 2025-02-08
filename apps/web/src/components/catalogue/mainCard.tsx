"use client";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Popover,
  PopoverHandler,
  PopoverContent,
  IconButton,
} from "@material-tailwind/react";
import { Product } from "@/interfaces/databaseTables";
import siteMetadata from "@/data/siteMetadata";
import { PhoneArrowUpRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import Image from "next/image";

export function MainCard({ product }: { product: Product }) {
  return (
    <Card className="w-full max-w-[56rem] flex-col md:flex-row bg-[#fffcf6] dark:bg-gray-900 dark:shadow-gray-800">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 md:w-[45%] lg:w-1/2 shrink-0 rounded-r-none"
      >
        <Image
          src={product.image}
          width={500}
          height={800}
          alt="main-product-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography
          variant="h6"
          color="gray"
          className="mb-4 uppercase dark:text-white"
        >
          {product.name}
        </Typography>
        <Typography
          variant="h4"
          color="blue-gray"
          className="mb-2 dark:text-blue-gray-200"
        >
          {product.overview || ""}
        </Typography>
        <Typography color="gray" className="font-normal dark:text-white">
          {product.desc || ""}
        </Typography>
        <Typography
          color="blue-gray"
          className="font-medium text-right mt-4 dark:text-blue-gray-50"
        >
          {Intl.DateTimeFormat(siteMetadata.locale, {
            year: "numeric",
            month: "short",
            day: "numeric",
          }).format(product.dateCreated)}
        </Typography>
        <div className="grid grid-cols-1 grid-rows-1">
          <a
            href={
              siteMetadata.whatsapp
                ? "tel:" + siteMetadata.whatsapp
                : "/catalogue"
            }
            className="col-start-1 row-start-1 col-end-2 row-end-2 inline-block sm:hidden mt-8"
          >
            <Button
              variant="text"
              className="flex items-center gap-3 dark:text-gray-100 bg-backtheme-300 dark:bg-backtheme-600 shadow-sm shadow-backtheme-800 dark:shadow-md dark:shadow-backtheme-800 hover:bg-backtheme-200 active:bg-backtheme-100 dark:hover:bg-backtheme-700 dark:active:bg-backtheme-800"
              ripple={true}
            >
              {React.createElement(PhoneArrowUpRightIcon, {
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
                  {React.createElement(PhoneArrowUpRightIcon, {
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
                  : "whatsapp phone number"}
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
