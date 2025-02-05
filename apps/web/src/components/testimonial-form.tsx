"use client";

import BasicSpinner from "@/assets/BasicSpinner/BasicSpinner";
import { testimonialSchema } from "@/lib/validationSchemas/testimonialSchema";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Field, Form, Formik, FormikProps } from "formik";
import { useState } from "react";

interface TestimonialSubmit {
  testimony: string;
  testifier: string;
}

export default function TestimonialForm() {
  const [submitted, setSubmitted] = useState<boolean>(false);

  //   const postTestimony = async (params: TestimonialSubmit) => {
  //     try {
  //       const API: string = process.env.NEXT_PUBLIC_BASE_API_URL + '/auth/login'
  //       const output = await axios.post(
  //         API,
  //         {
  //           email: params.email,
  //           password: params.password,
  //         },
  //         { withCredentials: true }
  //       )

  //       if (!output) throw Error()

  //       Swal.fire({
  //         icon: 'success',
  //         title: 'Login success!',
  //       })
  //       // Vercel cookie issue fix
  //       document.cookie = `access_token=${output.data.cookie}; expires=${new Date(new Date().valueOf() + 1200000)}`

  //       router.push('/')
  //       router.refresh()
  //     } catch (err) {
  //       setSubmitted(false)
  //       ErrorHandler(err)
  //     }
  //   }

  return (
    <Card
      color="transparent"
      shadow={false}
      className="place-items-center mx-6 sm:mx-10 md:mx-14"
    >
      <Typography variant="h4" color="blue-gray">
        Add your testimony
      </Typography>
      <Formik
        initialValues={{
          testimony: "",
          testifier: "",
        }}
        validationSchema={testimonialSchema}
        onSubmit={(values) => {
          setSubmitted(true);
          console.log(values);
          //   postLogin(values);
        }}
      >
        {(props: FormikProps<TestimonialSubmit>) => {
          const { values, errors, touched, setFieldValue, submitCount } = props;

          return (
            <Form className="mt-4 mb-2 w-full max-w-7xl lg:px-6 xl:px-12">
              <div className="mb-1 flex flex-col xl:flex-row gap-6 justify-between">
                <div className="flex flex-col gap-6 w-full">
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Testimony
                  </Typography>
                  <Field
                    type="hidden"
                    name="testimony"
                    value={values.testimony}
                  />
                  <Input
                    size="lg"
                    placeholder="Type your testimony here"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    crossOrigin={undefined}
                    onChange={(e) => {
                      setFieldValue(`testimony`, e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-row gap-6 justify-between min-w-80 *:w-full">
                  <div className="flex flex-col gap-6">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Testifier name (Optional)
                    </Typography>
                    <Field
                      type="hidden"
                      name="testifier"
                      value={values.testifier}
                    />
                    <Input
                      size="lg"
                      placeholder="ex: John Doe"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900 max-w-full"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      crossOrigin={undefined}
                      onChange={(e) => {
                        setFieldValue(`testifier`, e.target.value);
                      }}
                    />
                  </div>
                  {/* <div className="flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Date
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                crossOrigin={undefined}
              />
            </div> */}
                </div>
              </div>
              <div className="w-full max-w-xl mx-auto flex flex-col">
                {/* <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
            crossOrigin={undefined}
          /> */}
                <Button
                  type="submit"
                  className="mt-6 mx-auto w-full"
                  ripple={true}
                  disabled={submitted}
                >
                  <span className="relative">
                    <span>Submit</span>
                    <span
                      className={`${
                        submitted ? "" : "hidden "
                      }absolute left-14 -mt-1 size-9 my-auto`}
                    >
                      <BasicSpinner size={6} />
                    </span>
                  </span>
                </Button>
                {touched.testimony && errors.testimony && submitCount > 0 ? (
                  <div className="mt-2 flex flex-col text-center text-sm text-red-600">
                    <span>{errors.testimony}</span>
                  </div>
                ) : null}
                {/* <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="#" className="font-medium text-gray-900">
              Sign In
            </a>
          </Typography> */}
              </div>
            </Form>
          );
        }}
      </Formik>
    </Card>
  );
}
