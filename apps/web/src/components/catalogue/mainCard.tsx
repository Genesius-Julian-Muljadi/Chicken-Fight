"use client";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Product } from "@/interfaces/databaseTables";
import siteMetadata from "@/data/siteMetadata";
import React from "react";
import Image from "next/image";
import DashboardSpeedDial from "../dashboard/SpeedDial";
import speedDialContent from "../dashboard/speedDialContent";
import ContactToPurchase from "./contactToPurchase";

export function MainCard({
  product,
  dashboard,
  edit,
}: {
  product: Product;
  dashboard?: boolean;
  edit?: boolean;
}) {
  return (
    <Card className="relative w-full max-w-[56rem] flex-col md:flex-row bg-[#fffcf6] dark:bg-gray-900 dark:shadow-gray-800">
      {dashboard ? (
        <div className="absolute bottom-4 right-4 rounded-full">
          <DashboardSpeedDial contents={speedDialContent(product)} />
        </div>
      ) : null}
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 md:w-[45%] lg:w-1/2 shrink-0 rounded-r-xl md:rounded-r-none"
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
        <ContactToPurchase dashboard={dashboard || false} />
      </CardBody>
    </Card>
  );
}
