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
  Option,
  Select,
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
import { useRouter } from "next/navigation";
import { updateDashboardProduct } from "@/redux/slices/updateDashboardProduct";
import { Product } from "@/interfaces/databaseTables";
import productTypes from "@/data/productTypes";
import { toggleEditMainProduct } from "@/redux/slices/toggleEditMainProduct";
import ErrorHandler from "@/errorhandler/error-handler";
import { promoteDemoteProduct } from "@/redux/slices/promoteDemoteProduct";

export default function EditProductMain({
  product,
  allProducts,
}: {
  product: Product;
  allProducts: Array<Product>;
}) {
  const mainEditActive = useSelector(
    (state: { TEMPSlice: { editActive: boolean } }) =>
      state.TEMPSlice.editActive
  );
  const [submitted, setSubmitted] = useState<boolean>(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const postProduct = async (params: ProductForm) => {
    const otherMainProducts: Array<Product> = allProducts.filter(
      (product: Product) => {
        return product.type === parseInt(params.type) && product.promoted;
      }
    );

    try {
      if (
        params.type !== String(product.type) &&
        siteMetadata.maxMainProducts === 1 &&
        otherMainProducts.length >= 1
      ) {
        const otherMainProduct: Product = otherMainProducts[0];

        Swal.fire({
          title: "Confirm product type change",
          html:
            "<span>Submitting this edit will demote the following product:</span>" +
            "<br>" +
            `<b>${productTypes[otherMainProduct.type - 1]}</b>: ` +
            `<b>${otherMainProduct.name.toLocaleUpperCase()}</b>`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#948916",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Confirm",
        }).then(async (result) => {
          if (result.isConfirmed) {
            // Demote
            const API: string =
              process.env.NEXT_PUBLIC_BASE_API_URL + "/data/product";
            const outputDemote = await axios.post(API, {
              id: String(otherMainProduct.id),
              image: otherMainProduct.image,
              promoted: "false",
              name: otherMainProduct.name,
              type: String(otherMainProduct.type),
              overview: otherMainProduct.overview || "",
              desc: otherMainProduct.desc || "",
            });

            if (!outputDemote) throw Error();

            // Type change edit
            const outputEdit = await axios.post(API, {
              id: String(product.id),
              image: params.image,
              promoted: "true",
              name: params.name,
              type: params.type,
              overview: params.overview,
              desc: params.desc,
            });

            if (!outputEdit) throw Error();

            Swal.fire({
              icon: "success",
              title: "Product editted!",
              html:
                `<b>${otherMainProduct.name.toLocaleUpperCase() + " "}</b>` +
                "<span>has been demoted</span>",
            });

            router.push("/admin/dashboard");
            router.refresh();

            dispatch(
              promoteDemoteProduct({
                demote: true,
                demoteProduct: outputDemote.data.data,
              })
            );
            dispatch(
              updateDashboardProduct({
                product: outputEdit.data.data,
                edit: true,
              })
            );
            dispatch(toggleEditMainProduct(false));
          } else {
            setSubmitted(false);
          }
        });
      } else if (
        params.type !== String(product.type) &&
        siteMetadata.maxMainProducts > 1 &&
        otherMainProducts.length >= siteMetadata.maxMainProducts
      ) {
        Swal.fire({
          icon: "error",
          title:
            productTypes[parseInt(params.type) - 1] +
            " main products at maximum capacity",
          html:
            "<span>Please demote or delete a</span>" +
            `<b>${" " + productTypes[parseInt(params.type) - 1] + " "}</b>` +
            "<span>main product first</span>",
        });
        setSubmitted(false);
      } else {
        const API: string =
          process.env.NEXT_PUBLIC_BASE_API_URL + "/data/product";
        const output = await axios.post(API, {
          id: String(product.id),
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
          title: "Product editted!",
        });

        router.push("/admin/dashboard");
        router.refresh();

        dispatch(
          updateDashboardProduct({ product: output.data.data, edit: true })
        );
        dispatch(toggleEditMainProduct(false));
      }
    } catch (err) {
      setSubmitted(false);
      ErrorHandler(err);
    }
  };

  useEffect(() => {
    if (!mainEditActive) {
      setSubmitted(false);
    }
  }, [mainEditActive]);

  return (
    <Formik
      initialValues={{
        // image: "",
        image: product.image,
        promoted: "true",
        name: product.name,
        type: String(product.type),
        overview: product.overview || "",
        desc: product.desc || "",
      }}
      enableReinitialize={true}
      validationSchema={productSchema}
      onSubmit={(values) => {
        setSubmitted(true);
        // console.log(values);
        postProduct(values);
      }}
    >
      {(props: FormikProps<ProductForm>) => {
        const { values, setFieldValue, submitForm, resetForm } = props;

        const speedDialContents: Array<SpeedDialContent> = [
          {
            title: "Cancel",
            icon: XCircleIcon,
            action: () => {
              dispatch(toggleEditMainProduct(false));
              router.push("#dashboard-header");
              resetForm();
              ["light", "dark"].forEach((theme: string) => {
                const nameInput = document.getElementById(
                  "main-name-input-edit-" + theme
                ) as HTMLInputElement;
                nameInput.value = product.name;

                const overviewInput = document.getElementById(
                  "main-overview-input-edit-" + theme
                ) as HTMLInputElement;
                overviewInput.value = product.overview || "";

                const descInput = document.getElementById(
                  "main-desc-input-edit-" + theme
                ) as HTMLInputElement;
                descInput.value = product.desc || "";
              });

              const typeInput = document.getElementById(
                "main-type-input-edit-" + product.id
              ) as HTMLSelectElement;
              typeInput.value = String(product.type);
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
              // console.log(values)
              await submitForm();
            },
          },
        ];

        return (
          <Form>
            <Field type="hidden" name="image" />
            <Field type="hidden" name="promoted" value="true" />
            <Field type="hidden" name="name" />
            <Field type="hidden" name="type" />
            <Field type="hidden" name="overview" />
            <Field type="hidden" name="desc" />
            <Card className="relative mx-auto w-full max-w-[56rem] flex-col md:flex-row bg-productCard-light dark:bg-productCard-dark dark:shadow-gray-800">
              <div className="absolute bottom-4 right-4 rounded-full">
                <DashboardSpeedDial contents={speedDialContents} />
              </div>
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 md:w-[45%] lg:w-1/2 shrink-0 rounded-r-xl md:rounded-r-none"
              >
                {/* going to need to file input using regular input tag, then onChange event setFieldValue event.currentTarget into the formik Field */}
                <Image
                  src={noImages[0]}
                  width={500}
                  height={800}
                  alt={values.name}
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
                        value={values.name}
                        crossOrigin={undefined}
                        onChange={(e: any) => {
                          setFieldValue("name", e.target.value);

                          const darkInput = document.getElementById(
                            "main-name-input-edit-dark"
                          ) as HTMLInputElement;
                          darkInput.value = e.target.value;
                        }}
                        disabled={submitted}
                        className="uppercase"
                        id="main-name-input-edit-light"
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
                            "main-name-input-edit-light"
                          ) as HTMLInputElement;
                          lightInput.value = e.target.value;
                        }}
                        disabled={submitted}
                        className="text-blue-gray-50 uppercase"
                        id="main-name-input-edit-dark"
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
                <div className="mb-7 w-full relative">
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
                            "main-overview-input-edit-dark"
                          ) as HTMLInputElement;
                          darkInput.value = e.target.value;
                        }}
                        disabled={submitted}
                        className="normal-case"
                        id="main-overview-input-edit-light"
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
                            "main-overview-input-edit-light"
                          ) as HTMLInputElement;
                          lightInput.value = e.target.value;
                        }}
                        disabled={submitted}
                        className="normal-case"
                        id="main-overview-input-edit-dark"
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
                        value={values.desc}
                        onChange={(e: any) => {
                          setFieldValue("desc", e.target.value);

                          const darkInput = document.getElementById(
                            "main-desc-input-edit-dark"
                          ) as HTMLInputElement;
                          darkInput.value = e.target.value;
                        }}
                        disabled={submitted}
                        className="normal-case"
                        id="main-desc-input-edit-light"
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
                            "main-desc-input-edit-light"
                          ) as HTMLInputElement;
                          lightInput.value = e.target.value;
                        }}
                        disabled={submitted}
                        className="normal-case"
                        id="main-desc-input-edit-dark"
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
                <div className="w-3/4 grid grid-cols-1 grid-rows-1">
                  <span className="text-blue-gray-500 dark:text-white text-sm mb-2">
                    Change product type (Will demote previous main product on
                    new type)
                  </span>
                  <Select
                    variant="static"
                    value={values.type}
                    onChange={(val) => {
                      setFieldValue("type", val);
                    }}
                    disabled={submitted}
                    className="dark:text-blue-gray-50 bg-gray-700/5 dark:bg-gray-400/40 rounded-t-md *:pl-2 grid *:my-auto *:py-0"
                    id={"main-type-input-edit-" + product.id}
                  >
                    {productTypes.map((type: string, index: number) => (
                      <Option
                        key={"main-edit-type-" + type}
                        value={String(index + 1)}
                      >
                        {type}
                      </Option>
                    ))}
                  </Select>
                </div>
              </CardBody>
            </Card>
          </Form>
        );
      }}
    </Formik>
  );
}
