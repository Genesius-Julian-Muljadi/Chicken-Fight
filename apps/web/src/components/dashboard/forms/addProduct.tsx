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
  Textarea,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import { createElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import DashboardSpeedDial, { SpeedDialContent } from "../SpeedDial";
import { toggleAddProduct } from "@/redux/slices/toggleAddProduct";
import { useRouter } from "next/navigation";
import { updateDashboardProduct } from "@/redux/slices/updateDashboardProduct";
import productTypes from "@/data/productTypes";
import ErrorHandler from "@/errorhandler/error-handler";
import {
  CldUploadWidget,
  CloudinaryUploadWidgetInfo,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import {
  clearCloudinaryLocalStorage,
  deleteCloudinaryImage,
  setCloudinaryLocalStorage,
} from "@/cloudinary/functions";

export default function AddProduct() {
  const currentType = useSelector(
    (state: { TPTSlice: { type: number | null } }) => state.TPTSlice.type
  );
  const formActive = useSelector(
    (state: { TAPSlice: { formActive: boolean } }) => state.TAPSlice.formActive
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
      const API: string =
        process.env.NEXT_PUBLIC_BASE_API_URL + "/data/product";
      const output = await axios.post(API, {
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
        title: "Product created!",
      });

      clearCloudinaryLocalStorage(params.image, false);

      router.push("/admin/dashboard");
      router.refresh();

      dispatch(updateDashboardProduct({ product: output.data.data }));
      dispatch(toggleAddProduct(false));
    } catch (err) {
      setSubmitted(false);
      ErrorHandler(err);
    }
  };

  useEffect(() => {
    if (!formActive) {
      setSubmitted(false);
    }
  }, [formActive]);

  return (
    <Formik
      initialValues={{
        image: "",
        promoted: "false",
        name: "",
        type: "0",
        overview: "",
        desc: "",
      }}
      validationSchema={productSchema}
      onSubmit={(values) => {
        setSubmitted(true);
        postProduct(values);
      }}
    >
      {(props: FormikProps<ProductForm>) => {
        const {
          values,
          errors,
          handleSubmit,
          setFieldValue,
          resetForm,
          isValid,
          isSubmitting,
          submitForm,
        } = props;

        const speedDialContents: Array<SpeedDialContent> = [
          {
            title: "Cancel",
            icon: XCircleIcon,
            action: () => {
              dispatch(toggleAddProduct(false));
              const prevImage: string = values.image;

              resetForm();
              ["name", "overview", "desc"].forEach((inputField: string) => {
                ["light", "dark"].forEach((theme: string) => {
                  const input = document.getElementById(
                    inputField + "-input-" + theme
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
              await setFieldValue("type", String(currentType));
              if (!isSubmitting) {
                await submitForm();
              }
            },
          },
        ];

        return (
          <Form
            onSubmit={(e) => {
              handleSubmit(e);

              if (isValid) {
                resetForm();
                ["name", "overview", "desc"].forEach((inputField: string) => {
                  ["light", "dark"].forEach((theme: string) => {
                    const input = document.getElementById(
                      inputField + "-input-" + theme
                    ) as HTMLInputElement;
                    input.value = "";
                  });
                });
              }
            }}
          >
            <Field type="hidden" name="image" />
            <Field type="hidden" name="promoted" value="false" />
            <Field type="hidden" name="name" />
            <Field type="hidden" name="type" />
            <Field type="hidden" name="overview" />
            <Field type="hidden" name="desc" />
            <Card className="w-full max-w-[30rem] mx-auto bg-productCard-light dark:bg-productCard-dark dark:shadow-gray-800">
              <div
                aria-label="Product speed dial"
                className="absolute bottom-4 right-4 rounded-full"
              >
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

                      if (
                        typeof localStorage.CloudinaryPendingUploads ===
                          "string" &&
                        localStorage.CloudinaryPendingUploads.split("||").find(
                          (publicID: string) => {
                            return publicID === prevImage;
                          }
                        )
                      ) {
                        let newString: string = "";
                        localStorage.CloudinaryPendingUploads.split("||")
                          .filter((publicID: string) => {
                            return publicID && publicID !== prevImage;
                          })
                          .forEach((publicID: string) => {
                            newString += publicID + "||";
                          });
                        localStorage.CloudinaryPendingUploads = newString;

                        deleteCloudinaryImage(prevImage);
                      }
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
                            ripple={true}
                            onClick={() => open()}
                            aria-label="Upload image"
                            aria-invalid={errors.image !== undefined}
                            aria-describedby={String(errors.image)}
                            className="flex items-center gap-3 dark:text-gray-100 bg-backtheme-300 dark:bg-backtheme-600 shadow-sm shadow-backtheme-800 dark:shadow-sm dark:shadow-backtheme-800/30 hover:bg-backtheme-200 active:bg-backtheme-100 dark:hover:bg-backtheme-700 dark:active:bg-backtheme-800"
                          >
                            {createElement(CloudArrowUpIcon, {
                              className: "w-5 h-5 -ml-1",
                            })}
                            <div className="flex flex-row gap-2">
                              <span>
                                {values.image ? "Uploaded: " : "Upload image"}
                              </span>
                              <span
                                className={
                                  values.image ? "normal-case" : "hidden"
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
                          crossOrigin={undefined}
                          onChange={(e: any) => {
                            setFieldValue("name", e.target.value);

                            const darkInput = document.getElementById(
                              "name-input-dark"
                            ) as HTMLInputElement;
                            darkInput.value = e.target.value;
                          }}
                          disabled={submitted}
                          aria-label="Product name"
                          aria-invalid={errors.name !== undefined}
                          aria-describedby={String(errors.name)}
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
                          aria-label="Product name"
                          aria-invalid={errors.name !== undefined}
                          aria-describedby={String(errors.name)}
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
                    aria-label={Intl.DateTimeFormat(siteMetadata.locale, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }).format(new Date())}
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
                        onChange={(e: any) => {
                          setFieldValue("overview", e.target.value);

                          const darkInput = document.getElementById(
                            "overview-input-dark"
                          ) as HTMLInputElement;
                          darkInput.value = e.target.value;
                        }}
                        disabled={submitted}
                        aria-label="Product overview"
                        aria-invalid={errors.overview !== undefined}
                        aria-describedby={String(errors.overview)}
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
                        aria-label="Product overview"
                        aria-invalid={errors.overview !== undefined}
                        aria-describedby={String(errors.overview)}
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
                <div className="mt-7 w-full">
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
                        aria-label="Product description"
                        aria-invalid={errors.desc !== undefined}
                        aria-describedby={String(errors.desc)}
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
                        aria-label="Product description"
                        aria-invalid={errors.desc !== undefined}
                        aria-describedby={String(errors.desc)}
                        className="normal-case"
                        id="desc-input-dark"
                      />
                    </div>
                  </div>
                </div>
              </CardBody>
              <CardFooter className="pt-0 dark:text-white">
                <p>Type: {productTypes[(currentType ? currentType : 1) - 1]}</p>
                <a href="#dashboard-title">Select a different type</a>
              </CardFooter>
            </Card>
          </Form>
        );
      }}
    </Formik>
  );
}
