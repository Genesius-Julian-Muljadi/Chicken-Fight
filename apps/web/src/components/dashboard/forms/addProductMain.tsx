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
import { toggleAddMainProduct } from "@/redux/slices/toggleAddMainProduct";
import { useRouter } from "next/navigation";
import { updateDashboardProduct } from "@/redux/slices/updateDashboardProduct";
import productTypes from "@/data/productTypes";
import ErrorHandler from "@/errorhandler/error-handler";

export default function AddProductMain() {
  const currentType = useSelector(
    (state: { TPTSlice: { type: number | null } }) => state.TPTSlice.type
  );
  const mainFormActive = useSelector(
    (state: { TAMPSlice: { formActive: boolean } }) =>
      state.TAMPSlice.formActive
  );
  const [submitted, setSubmitted] = useState<boolean>(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const postProductMain = async (params: ProductForm) => {
    try {
      const API: string =
        process.env.NEXT_PUBLIC_BASE_API_URL + "/data/product";
      const output = await axios.post(API, {
        image: params.image,
        promoted: "true",
        name: params.name,
        type: params.type,
        overview: params.overview,
        desc: params.desc,
      });

      if (!output) throw Error();

      Swal.fire({
        icon: "success",
        title: "Product created!",
      });

      router.push("/admin/dashboard");
      router.refresh();

      dispatch(updateDashboardProduct({ product: output.data.data }));
      dispatch(toggleAddMainProduct(false));
    } catch (err) {
      setSubmitted(false);
      ErrorHandler(err);
    }
  };

  useEffect(() => {
    if (!mainFormActive) {
      setSubmitted(false);
    }
  }, [mainFormActive]);

  return (
    <Formik
      initialValues={{
        // image: "",
        image: "",
        promoted: "true",
        name: "",
        type: "0",
        overview: "",
        desc: "",
      }}
      validationSchema={productSchema}
      onSubmit={(values) => {
        setSubmitted(true);
        // console.log(values);
        postProductMain(values);
      }}
    >
      {(props: FormikProps<ProductForm>) => {
        const { setFieldValue, resetForm, isValid } = props;

        const speedDialContents: Array<SpeedDialContent> = [
          {
            title: "Cancel",
            icon: XCircleIcon,
            action: () => {
              dispatch(toggleAddMainProduct(false));
              resetForm();
              ["name", "overview", "desc"].forEach((inputField: string) => {
                ["light", "dark"].forEach((theme: string) => {
                  const input = document.getElementById(
                    "main-" + inputField + "-input-" + theme
                  ) as HTMLInputElement;
                  input.value = "";
                });
              });
            },
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
            buttonType: "submit",
            action: async () => {
              await setFieldValue("type", String(currentType));
              if (isValid) {
                resetForm();
                ["name", "overview", "desc"].forEach((inputField: string) => {
                  ["light", "dark"].forEach((theme: string) => {
                    const input = document.getElementById(
                      "main-" + inputField + "-input-" + theme
                    ) as HTMLInputElement;
                    input.value = "";
                  });
                });
              }
            },
          },
        ];

        return (
          <Form>
            <Field type="hidden" name="image" />
            <Field type="hidden" name="promoted" value="false" />
            <Field type="hidden" name="name" />
            <Field type="hidden" name="type" />
            <Field type="hidden" name="overview" />
            <Field type="hidden" name="desc" />
            <Card className="relative mx-auto w-full max-w-[56rem] flex-col md:flex-row bg-[#fffcf6] dark:bg-gray-900 dark:shadow-gray-800">
              <div className="absolute bottom-4 right-4 rounded-full">
                <DashboardSpeedDial contents={speedDialContents} />
              </div>
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 md:w-[45%] lg:w-1/2 shrink-0 rounded-r-xl md:rounded-r-none"
              >
                <Image
                  // src={product.image}
                  src={noImages[0]}
                  width={500}
                  height={800}
                  alt="main-product-image"
                  className="h-full w-full object-cover"
                  priority
                />
              </CardHeader>
              <CardBody className="w-full">
                <div className="mb-9 w-full relative">
                  <div className="grid grid-cols-1 grid-rows-1">
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
                            "main-name-input-dark"
                          ) as HTMLInputElement;
                          darkInput.value = e.target.value;
                        }}
                        disabled={submitted}
                        className="uppercase"
                        id="main-name-input-light"
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
                            "main-name-input-light"
                          ) as HTMLInputElement;
                          lightInput.value = e.target.value;
                        }}
                        disabled={submitted}
                        className="text-blue-gray-50 uppercase"
                        id="main-name-input-dark"
                      />
                    </div>
                  </div>
                  <Typography
                    color="blue-gray"
                    className="absolute top-[60%] left-0 text-xs translate-y-full mt-2 flex items-center gap-1 font-normal dark:text-blue-gray-50"
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
                    <ErrorMessage name="name">
                      {(err) => (
                        <div
                          aria-label={`Error message: ${err}`}
                          className="absolute top-[50%] right-4 translate-x-full translate-y-full mt-[0.1rem] flex flex-col text-right text-sm text-red-600"
                        >
                          <span>{err}</span>
                        </div>
                      )}
                    </ErrorMessage>
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
                            "main-overview-input-dark"
                          ) as HTMLInputElement;
                          darkInput.value = e.target.value;
                        }}
                        disabled={submitted}
                        className="normal-case"
                        id="main-overview-input-light"
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
                            "main-overview-input-light"
                          ) as HTMLInputElement;
                          lightInput.value = e.target.value;
                        }}
                        disabled={submitted}
                        className="normal-case"
                        id="main-overview-input-dark"
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
                            "main-desc-input-dark"
                          ) as HTMLInputElement;
                          darkInput.value = e.target.value;
                        }}
                        disabled={submitted}
                        className="normal-case"
                        id="main-desc-input-light"
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
                            "main-desc-input-light"
                          ) as HTMLInputElement;
                          lightInput.value = e.target.value;
                        }}
                        disabled={submitted}
                        className="normal-case"
                        id="main-desc-input-dark"
                      />
                    </div>
                  </div>
                </div>
                <Typography
                  color="blue-gray"
                  className="font-medium text-right mt-4 dark:text-blue-gray-50"
                >
                  {Intl.DateTimeFormat(siteMetadata.locale, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  }).format(new Date())}
                </Typography>
                {/* <ContactToPurchase dashboard={true} /> */}
                <p className="dark:text-white">
                  Type: {productTypes[(currentType ? currentType : 1) - 1]}
                </p>
              </CardBody>
            </Card>
          </Form>
        );
      }}
    </Formik>
  );
}
