"use client";

import siteMetadata from "@/data/siteMetadata";
import { ProductForm } from "@/interfaces/forms/products";
import { productSchema } from "@/lib/validationSchemas/productSchema";
import { CloudArrowUpIcon, XCircleIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import { createElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import DashboardSpeedDial, { SpeedDialContent } from "../SpeedDial";
import { useRouter } from "next/navigation";
import { updateDashboardProduct } from "@/redux/slices/updateDashboardProduct";
import { Product } from "@/interfaces/databaseTables";
import { toggleEditProduct } from "@/redux/slices/toggleEditProduct";
import productTypes from "@/data/productTypes";
import ErrorHandler from "@/errorhandler/error-handler";
import {
  clearCloudinaryLocalStorage,
  deleteCloudinaryImage,
  setCloudinaryLocalStorage,
} from "@/cloudinary/functions";
import {
  CldUploadWidget,
  CloudinaryUploadWidgetInfo,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";

interface EditOption {
  productID: number;
  editActive: boolean;
}

export default function EditProduct({ product }: { product: Product }) {
  const editOptions = useSelector(
    (state: { TEPSlice: { options: EditOption | null } }) =>
      state.TEPSlice.options
  );
  const [currentOriginalFileName, setOriginalFileName] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const postProduct = async (params: ProductForm) => {
    if (!params.image || !params.name) {
      return;
    }

    try {
      const prevImage: string = product.image;

      const API: string =
        process.env.NEXT_PUBLIC_BASE_API_URL + "/data/product";
      const output = await axios.post(API, {
        id: String(product.id),
        image: params.image,
        promoted: "false",
        name: params.name,
        type: params.type,
        overview: params.overview,
        desc: params.desc,
      });

      if (!output) throw Error();

      Swal.fire({
        icon: "success",
        title: "Product editted!",
      });

      clearCloudinaryLocalStorage(params.image, false);
      if (prevImage !== params.image) {
        deleteCloudinaryImage(prevImage);
      }

      router.push("/admin/dashboard");
      router.refresh();

      dispatch(
        updateDashboardProduct({ product: output.data.data, edit: true })
      );
    } catch (err) {
      setSubmitted(false);
      ErrorHandler(err);
    }
  };

  useEffect(() => {
    if (
      !editOptions ||
      (editOptions.productID === product.id && !editOptions.editActive)
    ) {
      setSubmitted(false);
    }
  }, [editOptions, product.id]);

  return (
    <Formik
      initialValues={{
        image: product.image,
        promoted: "false",
        name: product.name,
        type: String(product.type),
        overview: product.overview || "",
        desc: product.desc || "",
      }}
      enableReinitialize={true}
      validationSchema={productSchema}
      onSubmit={(values) => {
        setSubmitted(true);
        postProduct(values);
      }}
    >
      {(props: FormikProps<ProductForm>) => {
        const {
          values,
          handleSubmit,
          setFieldValue,
          resetForm,
          isSubmitting,
          submitForm,
        } = props;

        const speedDialContents: Array<SpeedDialContent> = [
          {
            title: "Cancel",
            icon: XCircleIcon,
            action: () => {
              dispatch(
                toggleEditProduct({ productID: product.id, editActive: false })
              );
              const prevImage: string = values.image;

              resetForm();
              ["name", "overview", "desc"].forEach((inputField: string) => {
                ["light", "dark"].forEach((theme: string) => {
                  const input = document.getElementById(
                    inputField + "-input-edit-" + theme
                  ) as HTMLInputElement;
                  input.value = "";
                });
              });

              clearCloudinaryLocalStorage(prevImage, true);
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
              if (!isSubmitting) {
                await submitForm();
              }
            },
          },
        ];

        return (
          <Form onSubmit={handleSubmit}>
            <Field type="hidden" name="image" />
            <Field type="hidden" name="promoted" value="false" />
            <Field type="hidden" name="name" />
            <Field type="hidden" name="type" />
            <Field type="hidden" name="overview" />
            <Field type="hidden" name="desc" />
            <Card className="w-full max-w-[30rem] mx-auto bg-productCard-light dark:bg-productCard-dark dark:shadow-gray-800">
              <div className="absolute bottom-4 right-4 rounded-full">
                <DashboardSpeedDial contents={speedDialContents} />
              </div>
              <CardHeader
                shadow={false}
                floated={false}
                className="m-auto w-full rounded-b-none"
              >
                <div className="pt-6 pb-2 place-items-center bg-productCard-light dark:bg-productCard-dark">
                  <CldUploadWidget
                    signatureEndpoint={
                      process.env.NEXT_PUBLIC_BASE_API_URL + "/cloudinary/sign"
                    }
                    onUploadAdded={(result: CloudinaryUploadWidgetResults) => {
                      const prevImage: string = values.image;
                      setFieldValue("image", "");

                      clearCloudinaryLocalStorage(prevImage, true);
                    }}
                    onSuccess={(result: CloudinaryUploadWidgetResults) => {
                      const info = result.info as CloudinaryUploadWidgetInfo;
                      setOriginalFileName(info.original_filename);
                      setFieldValue("image", String(info.public_id));
                      setCloudinaryLocalStorage(String(info.public_id));
                    }}
                  >
                    {({ open }) => {
                      return (
                        <div className="flex flex-col gap-2">
                          <Button
                            variant="text"
                            className="flex items-center gap-3 dark:text-gray-100 bg-backtheme-300 dark:bg-backtheme-600 shadow-sm shadow-backtheme-800 dark:shadow-sm dark:shadow-backtheme-800/30 hover:bg-backtheme-200 active:bg-backtheme-100 dark:hover:bg-backtheme-700 dark:active:bg-backtheme-800"
                            ripple={true}
                            onClick={() => open()}
                          >
                            {createElement(CloudArrowUpIcon, {
                              className: "w-5 h-5 -ml-1",
                            })}
                            <div className="flex flex-row gap-2">
                              <span>
                                {currentOriginalFileName
                                  ? "Uploaded: "
                                  : "Upload image"}
                              </span>
                              <span
                                className={
                                  currentOriginalFileName
                                    ? "normal-case"
                                    : "hidden"
                                }
                              >
                                {currentOriginalFileName}
                              </span>
                            </div>
                          </Button>
                          <ErrorMessage name="image">
                            {(err) => (
                              <div
                                aria-label={`Error message: ${err}`}
                                className="mt-[0.1rem] flex flex-col text-center text-sm text-red-600"
                              >
                                <span>{err}</span>
                              </div>
                            )}
                          </ErrorMessage>
                        </div>
                      );
                    }}
                  </CldUploadWidget>
                </div>
              </CardHeader>
              <CardBody>
                <div className="flex items-center gap-2">
                  <div className="w-full relative">
                    <div className="grid grid-cols-1 grid-rows-1 -mt-2">
                      <div className="col-start-1 row-start-1 block dark:hidden">
                        <Input
                          variant="standard"
                          type="text"
                          color="blue-gray"
                          label="Product name"
                          value={values.name}
                          crossOrigin={undefined}
                          onChange={(e: any) => {
                            setFieldValue("name", e.target.value);

                            const darkInput = document.getElementById(
                              "name-input-edit-dark"
                            ) as HTMLInputElement;
                            darkInput.value = e.target.value;
                          }}
                          disabled={submitted}
                          className="uppercase"
                          id="name-input-edit-light"
                        />
                      </div>
                      <div className="col-start-1 row-start-1 hidden dark:block">
                        <Input
                          variant="standard"
                          type="text"
                          color="white"
                          label="Product name"
                          value={values.name}
                          crossOrigin={undefined}
                          onChange={(e: any) => {
                            setFieldValue("name", e.target.value);

                            const lightInput = document.getElementById(
                              "name-input-edit-light"
                            ) as HTMLInputElement;
                            lightInput.value = e.target.value;
                          }}
                          disabled={submitted}
                          className="text-blue-gray-50 uppercase"
                          id="name-input-edit-dark"
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
                <div className="mt-9 w-full relative">
                  <div className="grid grid-cols-1 grid-rows-1">
                    <div className="col-start-1 row-start-1 block dark:hidden">
                      <Textarea
                        variant="standard"
                        label="Overview (Optional)"
                        color="blue-gray"
                        value={values.overview}
                        onChange={(e: any) => {
                          setFieldValue("overview", e.target.value);

                          const darkInput = document.getElementById(
                            "overview-input-edit-dark"
                          ) as HTMLInputElement;
                          darkInput.value = e.target.value;
                        }}
                        disabled={submitted}
                        className="normal-case"
                        id="overview-input-edit-light"
                      />
                    </div>
                    <div className="col-start-1 row-start-1 hidden dark:block">
                      <Textarea
                        variant="standard"
                        label="Overview (Optional)"
                        color="white"
                        value={values.overview}
                        onChange={(e: any) => {
                          setFieldValue("overview", e.target.value);

                          const lightInput = document.getElementById(
                            "overview-input-edit-light"
                          ) as HTMLInputElement;
                          lightInput.value = e.target.value;
                        }}
                        disabled={submitted}
                        className="normal-case"
                        id="overview-input-edit-dark"
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
                <div className="mt-7 w-full">
                  <div className="grid grid-cols-1 grid-rows-1">
                    <div className="col-start-1 row-start-1 block dark:hidden">
                      <Textarea
                        variant="standard"
                        label="Description (Optional)"
                        color="blue-gray"
                        value={values.desc}
                        onChange={(e: any) => {
                          setFieldValue("desc", e.target.value);

                          const darkInput = document.getElementById(
                            "desc-input-edit-dark"
                          ) as HTMLInputElement;
                          darkInput.value = e.target.value;
                        }}
                        disabled={submitted}
                        className="normal-case"
                        id="desc-input-edit-light"
                      />
                    </div>
                    <div className="col-start-1 row-start-1 hidden dark:block">
                      <Textarea
                        variant="standard"
                        label="Description (Optional)"
                        color="white"
                        value={values.desc}
                        onChange={(e: any) => {
                          setFieldValue("desc", e.target.value);

                          const lightInput = document.getElementById(
                            "desc-input-edit-light"
                          ) as HTMLInputElement;
                          lightInput.value = e.target.value;
                        }}
                        disabled={submitted}
                        className="normal-case"
                        id="desc-input-edit-dark"
                      />
                    </div>
                  </div>
                </div>
              </CardBody>
              <CardFooter className="pt-0 dark:text-white">
                <div className="w-3/4 grid grid-cols-1 grid-rows-1">
                  <span className="text-blue-gray-500 dark:text-white text-sm mb-2">
                    Change product type
                  </span>
                  <Select
                    variant="static"
                    value={values.type}
                    onChange={(val) => {
                      setFieldValue("type", val);
                    }}
                    disabled={submitted}
                    className="dark:text-blue-gray-50 bg-gray-700/5 dark:bg-gray-400/40 rounded-t-md *:pl-2 grid *:my-auto *:py-0"
                    id={"type-input-edit-" + product.id}
                  >
                    {productTypes.map((type: string, index: number) => (
                      <Option
                        key={"edit-type-" + type}
                        value={String(index + 1)}
                      >
                        {type}
                      </Option>
                    ))}
                  </Select>
                </div>
                {/* <button type="button" onClick={() => console.log(values)} > hello</button> */}
              </CardFooter>
            </Card>
          </Form>
        );
      }}
    </Formik>
  );
}
