"use client";

import noImages from "@/assets/noImage";
import contactUsData from "@/data/contact-us/contactUsData";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";

export default function ContactUsHeader() {
  return (
    <header className="pt-10 pb-6 flex flex-col lg:flex-row gap-20 items-center justify-evenly lg:w-[75vw]">
      <Typography variant="h1">Contact Us</Typography>
      <div>
        <a
          href={contactUsData.headerData.href}
          aria-label={contactUsData.headerData.title}
          className="flex flex-row"
        >
          <Card className="flex flex-row gap-4 w-64 h-16 bg-backtheme-50 dark:bg-backtheme-800">
            <CardHeader
              shadow={false}
              floated={false}
              className="rounded-md bg-transparent m-auto"
            >
              <Typography
                variant="paragraph"
                className="text-center font-semibold dark:text-blue-gray-50"
              >
                {contactUsData.headerData.title}
              </Typography>
            </CardHeader>
            <CardBody className="p-2">
              <Image
                src={contactUsData.headerData.image || noImages[1]}
                width={contactUsData.headerData.imageWidth || 200}
                height={contactUsData.headerData.imageHeight || 200}
                alt={contactUsData.headerData.imageAlt || "contactUsImage"}
                className="w-12 rounded-lg"
              />
            </CardBody>
          </Card>
        </a>
      </div>
    </header>
  );
}
