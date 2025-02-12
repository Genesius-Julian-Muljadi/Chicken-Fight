import { object, string } from "yup";

const LoginSchema = object({
  key: string().notRequired(),
  password: string().required("Please input a password."),
});

export { LoginSchema };
