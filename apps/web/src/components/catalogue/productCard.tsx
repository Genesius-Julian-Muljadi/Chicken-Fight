"use client";

import siteMetadata from "@/data/siteMetadata";
import { Product } from "@/interfaces/databaseTables";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import React from "react";
import DashboardSpeedDial from "../dashboard/SpeedDial";
import speedDialContent from "../dashboard/speedDialContent";
import ContactToPurchase from "./contactToPurchase";
import noImages from "@/assets/noImage";

export function ProductCard({
  product,
  dashboard,
  edit,
}: {
  product: Product;
  dashboard?: boolean;
  edit?: boolean;
}) {
  return (
    <Card className="w-full max-w-[30rem] mx-auto bg-[#fffcf6] dark:bg-gray-900 dark:shadow-gray-800">
      {dashboard ? (
        <div className="absolute bottom-4 right-4 rounded-full z-40">
          {/* <div className="absolute top-4 right-4 rounded-full z-40"> */}
          <DashboardSpeedDial contents={speedDialContent(product)} />
        </div>
      ) : null}
      <CardHeader
        shadow={false}
        floated={false}
        className="m-auto w-full rounded-b-none"
      >
        <Image
          src={
            product.image.slice(0, 3) === "AVT"
              ? "../../../../api/src/public/images/" + product.image
              : noImages[0]
          }
          width={500}
          height={800}
          alt={product.name}
          className="h-full w-full object-cover"
          priority
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
            }).format(new Date(product.dateCreated))}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="blue-gray"
          className="font-medium dark:text-blue-gray-50 normal-case"
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
        <ContactToPurchase dashboard={dashboard || false} />
      </CardFooter>
    </Card>
  );
}
