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
    <Typography variant="paragraph" className="font-serif text-xl flex justify-between gap-4">
      <i className="text-left">&quot;{`${testimony}`}&quot;</i>
      <span className="text-nowrap text-right">{`- ${testifier ? testifier + ", " : ""}${dateDisplay}`}</span>
    </Typography>
  );
}
