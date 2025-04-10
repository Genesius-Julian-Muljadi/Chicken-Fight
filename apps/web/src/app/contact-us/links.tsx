"use client";

import noImages from "@/assets/noImage";
import contactUsData from "@/data/contact-us/contactUsData";
import { ContactUsData } from "@/interfaces/contactData";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";

export default function ContactUsLinks() {
  return (
    <div className="container flex flex-col gap-20 pt-10 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 *:mx-auto">
        {contactUsData.contactData.map((data: ContactUsData, index: number) => (
          <div key={data.title + index} className="w-80">
            <a
              href={data.href}
              aria-label={data.title}
              className="flex flex-row"
            >
              <Card className="flex flex-row gap-4 w-full bg-backtheme-50 dark:bg-backtheme-800">
                <CardHeader
                  shadow={false}
                  floated={false}
                  className="m-auto p-3 w-44 bg-transparent"
                >
                  <Image
                    src={data.image || noImages[0]}
                    width={data.imageWidth || 200}
                    height={data.imageHeight || 200}
                    alt={data.imageAlt || "contactUsImage"}
                    className="object-fill rounded-xl"
                  />
                </CardHeader>
                <CardBody className="p-0 w-full flex flex-col gap-2 items-start justify-center">
                  <Typography
                    variant="paragraph"
                    className="text-center font-semibold dark:text-blue-gray-50"
                  >
                    {data.title}
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="text-center font-semibold dark:text-blue-gray-50"
                  >
                    {data.contact || "contact info"}
                  </Typography>
                </CardBody>
              </Card>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
