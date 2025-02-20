import productTypes from "@/data/productTypes";
import { object, string } from "yup";

const productSchema = object({
  image: string().required("Please upload an image"),
  promoted: string()
    .oneOf(["true", "false"])
    .required("Promoted value not selected!"),
  name: string().max(30, "Max. char 30").required("Name is required"),
  type: string()
    .oneOf(productTypes.map((type: string, index: number) => String(index + 1)))
    .required("Type value not selected!"),
  overview: string().max(60, "Max. char 60").notRequired(),
  desc: string().notRequired(),
});

export { productSchema };
