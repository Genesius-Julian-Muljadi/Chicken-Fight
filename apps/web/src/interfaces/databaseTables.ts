interface Testimonial {
  testifier?: string;
  testimony: string;
  dateCreated: Date;
}

interface Product {
  id: number;
  image: string;
  promoted?: boolean;
  name: string;
  type: number;
  overview?: string;
  desc?: string;
  dateCreated: Date;
  updated: Date;
}

export type { Testimonial, Product };
