"use client";

import { useEffect } from "react";
import { deleteCloudinaryImage } from "./functions";

// Delete lingering localStorage publicIDs from cloudinary database on render
export default function CloudinaryManager() {
  useEffect(() => {
    if (typeof localStorage.CloudinaryPendingUploads === "string") {
      const storageCopy: Array<string> =
        localStorage.CloudinaryPendingUploads.split("||");
      localStorage.removeItem("CloudinaryPendingUploads");

      storageCopy.forEach((publicID: string) => {
        if (publicID) {
          deleteCloudinaryImage(publicID);
        }
      });
    }
  }, []);

  return null;
}
