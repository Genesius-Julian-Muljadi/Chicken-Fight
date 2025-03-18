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
import noImages from "@/assets/noImage";
import { ProductSamples } from "@/data/samples/productSamples";
import { CldImage } from "next-cloudinary";

export function MainCard({
  product,
  dashboard,
  allProducts,
}: {
  product: Product;
  dashboard?: boolean;
  allProducts?: Array<Product>;
}) {
  return (
    <Card className="relative mx-auto w-full max-w-[56rem] flex-col md:flex-row bg-productCard-light dark:bg-productCard-dark dark:shadow-gray-800">
      {dashboard ? (
        <div
          aria-label="Main product speed dial"
          className="absolute bottom-4 right-4 rounded-full z-40"
        >
          {/* <div className="absolute top-4 right-4 rounded-full z-40"> */}
          <DashboardSpeedDial
            contents={speedDialContent(product, allProducts || ProductSamples)}
          />
        </div>
      ) : null}
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 md:max-w-[45%] lg:w-1/2 shrink-0 rounded-r-xl md:rounded-r-none"
      >
        {noImages.includes(product.image) ? (
          <Image
            src={noImages[0]}
            width={500}
            height={800}
            alt={"Featured: " + product.name}
            aria-label={"Featured: " + product.name}
            className="h-full w-full object-cover"
            priority
          />
        ) : (
          <CldImage
            src={product.image}
            width={500}
            height={800}
            alt={"Featured: " + product.name}
            aria-label={"Featured: " + product.name}
            className="h-full w-full object-cover"
            priority
          />
        )}
      </CardHeader>
      <CardBody className="w-full">
        <Typography
          variant="h6"
          color="gray"
          aria-label={product.name}
          className="mb-4 uppercase dark:text-white"
        >
          {product.name}
        </Typography>
        <Typography
          variant="h4"
          color="blue-gray"
          aria-label={product.overview || ""}
          className="mb-2 dark:text-blue-gray-200"
        >
          {product.overview || ""}
        </Typography>
        <Typography
          color="gray"
          aria-label={product.desc || ""}
          className="font-normal dark:text-white"
        >
          {product.desc || ""}
        </Typography>
        <Typography
          color="blue-gray"
          aria-label={Intl.DateTimeFormat(siteMetadata.locale, {
            year: "numeric",
            month: "short",
            day: "numeric",
          }).format(new Date(product.dateCreated))}
          className="font-medium text-right mt-4 dark:text-blue-gray-50"
        >
          {Intl.DateTimeFormat(siteMetadata.locale, {
            year: "numeric",
            month: "short",
            day: "numeric",
          }).format(new Date(product.dateCreated))}
        </Typography>
        <ContactToPurchase dashboard={dashboard || false} />
      </CardBody>
    </Card>
  );
}
