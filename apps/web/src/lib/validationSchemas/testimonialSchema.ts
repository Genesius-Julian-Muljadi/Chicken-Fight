import { object, string } from "yup";

const testimonialSchema = object({
  testimony: string().required("Testimony is required."),
  testifier: string()
    .max(50, "Testifier max character limit is 50.")
    .notRequired(),
});

export { testimonialSchema };
