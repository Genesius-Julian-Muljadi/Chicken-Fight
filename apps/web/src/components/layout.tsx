"use client";

import React from "react";
import { ThemeProvider } from "@material-tailwind/react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="bg-gradient-to-b from-white via-[#fffaf7] to-80% to-backtheme-50 dark:bg-gradient-to-br dark:from-black dark:to-[#292827]">
        {children}
      </div>
    </ThemeProvider>
  );
}

export default Layout;
