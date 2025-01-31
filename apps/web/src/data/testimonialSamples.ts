import { Testimonial } from "@/interfaces/databaseTables";

const TestimonialSamples: Array<Testimonial> = [
  {
    testifier: "Rhode",
    testimony: "This is a sample testimony.",
    dateCreated: new Date("2025-01-31T09:16:47.000Z"),
  },
  {
    testimony: "This is a testimony without a testifier.",
    dateCreated: new Date("2025-01-31T09:17:51.000Z"),
  },
  {
    testifier: "Very long testifier name",
    testimony:
      "This sample will be replaced once there is at least one testimony in the database. Only the most recent 3 will be displayed",
    dateCreated: new Date("2025-01-31T09:18:14.000Z"),
  },
];

export { TestimonialSamples };
