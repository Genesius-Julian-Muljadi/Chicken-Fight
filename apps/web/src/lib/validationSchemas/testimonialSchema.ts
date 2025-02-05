import { object, string } from "yup";

const testimonialSchema = object({
  testimony: string()
    .max(100, "Testimony max character limit is 100.")
    .required("Testimony is required."),
  testifier: string().notRequired(),
});

export { testimonialSchema };
