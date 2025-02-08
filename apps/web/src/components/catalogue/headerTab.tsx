"use client";

import React from "react";
import { Tabs, TabsHeader, Tab } from "@material-tailwind/react";
import { ArrowUpRightIcon, ArrowDownIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { toggleProductType } from "@/redux/slices/toggleProductType";

const typeData = [
  {
    label: "Male",
    value: "Male",
    icon: ArrowUpRightIcon,
  },
  {
    label: "Female",
    value: "Female",
    icon: ArrowDownIcon,
  },
];

export default function CatalogueHeaderTab() {
  const dispatch = useDispatch();

  return (
    <Tabs value="Male">
      <TabsHeader
        className="dark:bg-opacity-20"
        indicatorProps={{
          className: "bg-white dark:bg-black/40 text-gray-900 dark:text-white",
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
            <div className="flex items-center gap-2 px-8 dark:text-white">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
    </Tabs>
  );
}
