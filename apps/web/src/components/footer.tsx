"use client";
import Image from "next/image";
import { Typography, IconButton, Button } from "@material-tailwind/react";
import siteMetadata from "@/data/siteMetadata";
import Link from "next/link";

// const LINKS = ["About Us", "Careers", "Press", "Blog", "Pricing"];
// const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 bg-backtheme-400 dark:bg-backtheme-950 px-4 md:px-8">
      <div className="container md:mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-y-4 gap-x-8 py-7 md:justify-between">
          <a
            href={siteMetadata.whatsapp ? "tel:" + siteMetadata.whatsapp : "/"}
            className="flex flex-row gap-2 cursor-pointer"
          >
            <IconButton
              variant="text"
              aria-label="WhatsApp"
              className="text-[#62c076] bg-backtheme-950 dark:bg-backtheme-50 bg-opacity-5 dark:bg-opacity-10 hover:bg-backtheme-950/20 dark:hover:bg-backtheme-50/20"
            >
              <i className="fa-brands fa-whatsapp text-3xl not-italic opacity-75"></i>
            </IconButton>
            <Typography
              color="blue-gray"
              aria-label={siteMetadata.whatsapp}
              className="text-center font-semibold opacity-75 m-auto dark:text-white text-sm sm:text-base"
            >
              {siteMetadata.whatsapp
                ? "WhatsApp: " + siteMetadata.whatsapp
                : "WhatsApp phone number"}
            </Typography>
          </a>

          <div className="flex gap-3 sm:gap-6">
            <Typography
              color="blue-gray"
              className="text-center font-semibold opacity-75 m-auto dark:text-white text-sm sm:text-base"
            >
              Links
            </Typography>
            <Link
              href={siteMetadata.lynk || "/"}
              aria-label="Lynk links"
              className="bg-white cursor-pointer hover:opacity-85 active:opacity-75 w-24 rounded-md grid"
            >
              <Image
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHaTIM-e-mqAp97U0YjwpPjyhjD-1LrVuRvg&s"
                }
                width={500}
                height={500}
                alt={"Lynk logo"}
                className="size-14 m-auto"
              ></Image>
            </Link>
            {/* <IconButton variant="text" color="white">
              <i className="fa-brands fa-linkedin text-2xl not-italic opacity-75"></i>
            </IconButton>
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-facebook text-2xl not-italic opacity-75"></i>
            </IconButton>
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-github text-2xl not-italic opacity-75"></i>
            </IconButton>
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-dribbble text-2xl not-italic opacity-75"></i>
            </IconButton> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
