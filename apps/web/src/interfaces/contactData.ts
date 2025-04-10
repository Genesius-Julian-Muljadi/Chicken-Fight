import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface ContactUsData {
  title: string;
  href: string;
  contact: string;
  image?: string | StaticImport | null;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
}

export type { ContactUsData };
