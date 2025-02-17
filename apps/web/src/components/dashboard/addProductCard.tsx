"use client";

import { toggleAddProduct } from "@/redux/slices/toggleAddProduct";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";

export default function AddProductCard() {
  const dispatch = useDispatch();

  return (
    <Card className="grid h-[40rem] w-full max-w-[30rem] rounded-xl bg-none mx-auto overflow-hidden text-center shadow-md dark:shadow-md shadow-gray-700/40 dark:shadow-gray-400/20">
      <CardHeader className="absolute inset-0 m-0 h-full w-full rounded-xl bg-backtheme-100 dark:bg-backtheme-950/90">
        <div className="absolute h-full w-full rounded-xl bg-gradient-to-t dark:bg-gradient-to-b from-blue-gray-400/30 via-blue-gray-400/15" />
      </CardHeader>
      <CardBody className="relative flex w-full h-full">
        <button
          className="flex flex-col place-content-center w-full h-full bg-opacity-0 hover:bg-opacity-20 hover:shadow-none"
          onClick={() => dispatch(toggleAddProduct(true))}
        >
          <div className="mx-auto w-16 h-16 grid rounded-full border-4 border-blue-gray-700 dark:border-blue-gray-50">
            <i className="m-auto fas fa-plus fa-2xl text-blue-gray-700 dark:text-blue-gray-50" />
          </div>
          <Typography
            variant="h3"
            className="mb-6 font-medium leading-[1.5] text-blue-gray-700 dark:text-blue-gray-50"
          >
            Add new product
          </Typography>
        </button>
      </CardBody>
    </Card>
  );
}
