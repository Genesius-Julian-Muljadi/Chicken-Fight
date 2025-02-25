"use client";

import React from "react";
import { Tabs, TabsHeader, Tab } from "@material-tailwind/react";
import { ArrowUpRightIcon, ArrowDownIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { toggleProductType } from "@/redux/slices/toggleProductType";
import productTypes from "../../data/productTypes";

const typeData = [
  {
    label: productTypes[0],
    value: 1,
    icon: ArrowUpRightIcon,
  },
  {
    label: productTypes[1],
    value: 2,
    icon: ArrowDownIcon,
  },
];

export default function CatalogueHeaderTab({
  props,
}: {
  // Array of counts for each product type
  props?: Array<number>;
}) {

  const dispatch = useDispatch();

  return (
    <Tabs value={1}>
      <TabsHeader
        className="dark:bg-opacity-20 border border-gray-700/10"
        indicatorProps={{
          className:
            "bg-white dark:bg-black/40 text-gray-900 dark:text-white shadow-sm shadow-gray-400 dark:shadow-gray-700/40",
        }}
      >
        {typeData.map(({ label, value, icon }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => {
              dispatch(toggleProductType(value));
            }}
          >
            <div className="flex items-center gap-2 px-8 dark:text-white font-medium text-nowrap">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {`${label}${props ? ` (${props[value - 1]})` : ""}`}
            </div>
          </Tab>
        ))}
      </TabsHeader>
    </Tabs>
  );
}
