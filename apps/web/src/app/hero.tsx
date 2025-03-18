"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import siteMetadata from "@/data/siteMetadata";

function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-gradient-to-r from-backtheme-400 via-backtheme-300 to-backtheme-200 dark:bg-gradient-to-r dark:from-backtheme-950 dark:via-backtheme-900 dark:to-backtheme-800 px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography
              variant="h1"
              aria-label={`${siteMetadata.homeHeader1 || "homeHeader1"}\n${
                siteMetadata.homeHeader2 || "homeHeader2"
              }`}
              className="mb-4 text-black dark:text-white"
            >
              {siteMetadata.homeHeader1 || "homeHeader1"} <br />{" "}
              {siteMetadata.homeHeader2 || "homeHeader2"}
            </Typography>
            <Typography
              variant="lead"
              aria-label={
                siteMetadata.homeHeaderDescription1 || "homeHeaderDescription1"
              }
              className="mb-7 text-black dark:text-white md:pr-16 xl:pr-28"
            >
              {siteMetadata.homeHeaderDescription1 || "homeHeaderDescription1"}
            </Typography>
            {/* <Typography className="mb-4" color="white" variant="h6">
              Get the app
            </Typography>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-apple.png"
                  alt="metamask"
                  className="w-6 h-6"
                />
                App Store
              </Button>
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-google.png"
                  alt="metamask"
                  className="w-6 h-6"
                />
                Google Play
              </Button>
            </div> */}
          </div>
          {/* <Image
            width={470}
            height={576}
            src="/image/iphones.png"
            alt="team work"
            className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          /> */}
          {siteMetadata.homeImage ? (
            <Image
              src={siteMetadata.homeImage}
              width={470}
              height={576}
              alt={siteMetadata.homeHeader1 + "Img"}
              className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
            />
          ) : (
            <span className="text-black dark:text-white">
              insert home page image here
            </span>
          )}
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md dark:bg-gray-950 dark:shadow-blue-gray-900">
        <div>
          <Typography
            variant="h3"
            color="blue-gray"
            aria-label={siteMetadata.homeHeader3 || "homeHeader3"}
            className="mb-3 dark:text-white"
          >
            {siteMetadata.homeHeader3 || "homeHeader3"}
          </Typography>
          <Typography
            variant="paragraph"
            aria-label={
              siteMetadata.homeHeaderDescription2 || "homeHeaderDescription2"
            }
            className="font-normal text-gray-500 lg:w-5/12 dark:text-gray-200"
          >
            {siteMetadata.homeHeaderDescription2 || "homeHeaderDescription2"}
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
