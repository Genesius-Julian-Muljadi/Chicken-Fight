import { Testimonial } from "@/interfaces/databaseTables";
import siteMetadata from "../siteMetadata";

const TestimonialSamples: Array<Testimonial> = [
  {
    testifier: "Rhode",
    testimony: "This is a sample testimony.",
    dateCreated: new Date("2024-07-01T09:16:47.000Z"),
  },
  {
    testimony: "This is a testimony without a testifier. Date locale set to: " + siteMetadata.locale,
    dateCreated: new Date("2024-12-25T09:17:51.000Z"),
  },
  {
    testifier: "Testifier character limit is 50",
    testimony:
      "Testimony has no character limit. This sample will be replaced once there is at least one testimony in the database. Only the most recent 3 will be displayed",
    dateCreated: new Date("2025-01-31T09:18:14.000Z"),
  },
];

export { TestimonialSamples };
