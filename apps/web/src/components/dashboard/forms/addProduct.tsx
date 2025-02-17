"use client";

import noImages from "@/assets/noImage";
import siteMetadata from "@/data/siteMetadata";
import { ProductForm } from "@/interfaces/forms/products";
import { productSchema } from "@/lib/validationSchemas/productSchema";
import { XCircleIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import DashboardSpeedDial, { SpeedDialContent } from "../SpeedDial";
import { toggleAddProduct } from "@/redux/slices/toggleAddProduct";
import ContactToPurchase from "@/components/catalogue/contactToPurchase";

export default function AddProduct() {
  const currentType = useSelector(
    (state: { TPTSlice: { type: number | null } }) => state.TPTSlice.type
  );
  const [submitted, setSubmitted] = useState<boolean>(false);

  const dispatch = useDispatch();

  //   const postCreateQuiz = async (params: ProductForm) => {
  //     try {
  //       const API: string =
  //         process.env.NEXT_PUBLIC_BASE_API_URL + "/quiz/create/" + userID;
  //       const output = await axios.post(API, { quiz: params });

  //       if (!output) throw Error();

  //       Swal.fire({
  //         icon: "success",
  //         title: "Quiz created!",
  //       });
  //     } catch (err) {
  //       setSubmitted(false);
  //     }
  //   };

  return (
    <Formik
      initialValues={{
        // image: "",
        image: "test",
        promoted: "false",
        name: "",
        type: "0",
        overview: "",
        desc: "",
      }}
      validationSchema={productSchema}
      onSubmit={(values) => {
        setSubmitted(true);
        // console.log(values);
        // postCreateQuiz(values);
      }}
    >
      {(props: FormikProps<ProductForm>) => {
        const {
          values,
          errors,
          touched,
          handleChange,
          submitCount,
          setFieldValue,
          submitForm,
        } = props;

        const speedDialContents: Array<SpeedDialContent> = [
          {
            title: "Cancel",
            icon: XCircleIcon,
            action: () => dispatch(toggleAddProduct(false)),
          },
          {
            title: "Submit",
            icon: () => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 -rotate-45 pl-1"
              >
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
              </svg>
            ),
            action: async () => {
              await setFieldValue("type", String(currentType));
              submitForm();
            },
          },
        ];

        return (
          <Form>
            <Field type="hidden" name="image" value="No Value" />
            <Field type="hidden" name="promoted" value="false" />
            <Field type="hidden" name="name" />
            <Field type="hidden" name="type" />
            <Field type="hidden" name="overview" />
            <Field type="hidden" name="desc" />
            <Card className="w-full max-w-[30rem] mx-auto bg-[#fffcf6] dark:bg-gray-900 dark:shadow-gray-800">
              <div className="absolute bottom-4 right-4 rounded-full">
                <DashboardSpeedDial contents={speedDialContents} />
              </div>
              <CardHeader
                shadow={false}
                floated={false}
                className="m-auto w-full rounded-b-none"
              >
                {/* going to need to file input using regular input tag, then onChange event setFieldValue event.currentTarget into the formik Field */}
                <Image
                  src={noImages[0]}
                  width={500}
                  height={800}
                  alt={values.name}
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody>
                <div className="mb-9 flex items-center gap-2">
                  <div className="w-full relative">
                    <div className="grid grid-cols-1 grid-rows-1 -mt-2">
                      <div className="col-start-1 row-start-1 block dark:hidden">
                        <Input
                          variant="standard"
                          type="text"
                          color="blue-gray"
                          label="Product name"
                          crossOrigin={undefined}
                          onChange={(e: any) => {
                            setFieldValue("name", e.target.value);

                            const darkInput = document.getElementById(
                              "name-input-dark"
                            ) as HTMLInputElement;
                            darkInput.value = e.target.value;
                          }}
                          disabled={submitted}
                          className="uppercase"
                          id="name-input-light"
                        />
                      </div>
                      <div className="col-start-1 row-start-1 hidden dark:block">
                        <Input
                          variant="standard"
                          type="text"
                          color="white"
                          label="Product name"
                          crossOrigin={undefined}
                          onChange={(e: any) => {
                            setFieldValue("name", e.target.value);

                            const lightInput = document.getElementById(
                              "name-input-light"
                            ) as HTMLInputElement;
                            lightInput.value = e.target.value;
                          }}
                          disabled={submitted}
                          className="text-blue-gray-50 uppercase"
                          id="name-input-dark"
                        />
                      </div>
                    </div>
                    <Typography
                      color="blue-gray"
                      className="absolute top-[50%] left-0 text-xs translate-y-full mt-2 flex items-center gap-1 font-normal dark:text-blue-gray-50"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="-mt-px h-4 w-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Max. characters 30</span>
                    </Typography>
                  </div>
                  <Typography
                    color="blue-gray"
                    className="font-semibold dark:text-blue-gray-50 text-nowrap w-fit"
                  >
                    {Intl.DateTimeFormat(siteMetadata.locale, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }).format(new Date())}
                  </Typography>
                </div>
                <div className="mb-7 w-full relative">
                  <div className="grid grid-cols-1 grid-rows-1">
                    <div className="col-start-1 row-start-1 block dark:hidden">
                      <Textarea
                        variant="standard"
                        label="Overview (Optional)"
                        color="blue-gray"
                        onChange={(e: any) => {
                          setFieldValue("overview", e.target.value);

                          const darkInput = document.getElementById(
                            "overview-input-dark"
                          ) as HTMLInputElement;
                          darkInput.value = e.target.value;
                        }}
                        disabled={submitted}
                        className="normal-case"
                        id="overview-input-light"
                      />
                    </div>
                    <div className="col-start-1 row-start-1 hidden dark:block">
                      <Textarea
                        variant="standard"
                        label="Overview (Optional)"
                        color="white"
                        onChange={(e: any) => {
                          setFieldValue("overview", e.target.value);

                          const lightInput = document.getElementById(
                            "overview-input-light"
                          ) as HTMLInputElement;
                          lightInput.value = e.target.value;
                        }}
                        disabled={submitted}
                        className="normal-case"
                        id="overview-input-dark"
                      />
                    </div>
                  </div>
                  <Typography
                    color="blue-gray"
                    className="absolute top-[80%] left-0 text-xs translate-y-full mt-2 flex items-center gap-1 font-normal dark:text-blue-gray-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="-mt-px h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Max. characters 60</span>
                  </Typography>
                </div>
                <div className="w-full">
                  <div className="grid grid-cols-1 grid-rows-1">
                    <div className="col-start-1 row-start-1 block dark:hidden">
                      <Textarea
                        variant="standard"
                        label="Description (Optional)"
                        color="blue-gray"
                        onChange={(e: any) => {
                          setFieldValue("desc", e.target.value);

                          const darkInput = document.getElementById(
                            "desc-input-dark"
                          ) as HTMLInputElement;
                          darkInput.value = e.target.value;
                        }}
                        disabled={submitted}
                        className="normal-case"
                        id="desc-input-light"
                      />
                    </div>
                    <div className="col-start-1 row-start-1 hidden dark:block">
                      <Textarea
                        variant="standard"
                        label="Description (Optional)"
                        color="white"
                        onChange={(e: any) => {
                          setFieldValue("desc", e.target.value);

                          const lightInput = document.getElementById(
                            "desc-input-light"
                          ) as HTMLInputElement;
                          lightInput.value = e.target.value;
                        }}
                        disabled={submitted}
                        className="normal-case"
                        id="desc-input-dark"
                      />
                    </div>
                  </div>
                </div>
              </CardBody>
              <CardFooter className="pt-0">
                <ContactToPurchase dashboard={true} />
              </CardFooter>
            </Card>
          </Form>
        );
      }}
    </Formik>
  );
}
