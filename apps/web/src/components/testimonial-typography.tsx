import React from "react";
import { Typography } from "@material-tailwind/react";
import { Testimonial } from "@/interfaces/databaseTables";
import siteMetadata from "@/data/siteMetadata";

export default function TestimonialTypography({
  testifier,
  testimony,
  dateCreated,
}: Testimonial) {
  const dateDisplay: string = Intl.DateTimeFormat(siteMetadata.locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(dateCreated);

  return (
    <Typography
      variant="paragraph"
      className="font-serif text-lg lg:text-xl flex flex-col xl:flex-row xl:justify-between xl:gap-4"
    >
      <i className="text-left">&quot;{`${testimony}`}&quot;</i>
      <span className="text-wrap flex flex-col xl:inline xl:text-nowrap">
        <span className="text-nowrap text-right">
          <span>{`${testifier ? "- " + testifier : ""}`}</span>
          <span className={`hidden${testifier ? " xl:inline" : ""}`}>
            {", "}
          </span>
        </span>
        <span className="text-nowrap text-right">{`${dateDisplay}`}</span>
      </span>
    </Typography>
  );
}
