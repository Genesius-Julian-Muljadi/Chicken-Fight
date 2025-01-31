"use client";

import React from "react";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";
import { UserIcon } from "@heroicons/react/24/solid";
import TestimonialCard from "../components/testimonial-card";
import siteMetadata from "@/data/siteMetadata";
import { TestimonialSamples } from "@/data/testimonialSamples";
import TestimonialTypography from "@/components/testimonial-typography";
import { Testimonial } from "@/interfaces/databaseTables";

export function Testimonials({
  testimonials,
}: {
  testimonials?: Array<Testimonial>;
}) {
  const TESTIMONIALS = testimonials || TestimonialSamples;

  return (
    <section className="px-10 !py-20">
      <div className="container mx-auto">
        <div className="mb-20 flex w-full flex-col items-center">
          <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-950 dark:bg-gray-50 text-white dark:text-gray-950">
            <UserIcon className="h-8 w-8" />
          </div>
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-2 dark:text-white"
          >
            {siteMetadata.testimonialHeader || "testimonialHeader"}
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 max-w-3xl text-center text-gray-600 dark:text-gray-200"
          >
            {siteMetadata.testimonialDescription || "testimonialDescription"}
          </Typography>
        </div>
        <div className="flex flex-col gap-4 lg:px-20">
          {TESTIMONIALS.map((props, key) => (
            <TestimonialTypography key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
