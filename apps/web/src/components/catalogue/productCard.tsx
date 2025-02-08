"use client";

import siteMetadata from "@/data/siteMetadata";
import { Product } from "@/interfaces/databaseTables";
import { PhoneArrowUpRightIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="w-full max-w-[30rem] mx-auto bg-[#fffcf6] dark:bg-gray-900 dark:shadow-gray-800">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-auto w-full rounded-b-none"
      >
        <Image
          src={product.image}
          width={500}
          height={800}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography
            color="blue-gray"
            className="font-extrabold dark:text-blue-gray-50 uppercase"
          >
            {product.name}
          </Typography>
          <Typography
            color="blue-gray"
            className="font-semibold dark:text-blue-gray-50"
          >
            {Intl.DateTimeFormat(siteMetadata.locale, {
              year: "numeric",
              month: "short",
              day: "numeric",
            }).format(product.dateCreated)}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="blue-gray"
          className="font-medium dark:text-blue-gray-50 uppercase"
        >
          {product.overview || ""}
        </Typography>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75 dark:text-gray-50"
        >
          {product.desc || ""}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <a
          href={
            siteMetadata.whatsapp
              ? "tel:" + siteMetadata.whatsapp
              : "/catalogue"
          }
          className="inline-block mt-0"
        >
          <Button
            variant="text"
            className="flex items-center gap-2 dark:text-gray-100 bg-backtheme-300 dark:bg-backtheme-600 shadow-sm shadow-backtheme-800 dark:shadow-md dark:shadow-backtheme-800 hover:bg-backtheme-200 active:bg-backtheme-100 dark:hover:bg-backtheme-700 dark:active:bg-backtheme-800"
            ripple={true}
          >
            {React.createElement(PhoneArrowUpRightIcon, {
              className: "w-5 h-5 -ml-1",
            })}
            Contact to purchase
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
