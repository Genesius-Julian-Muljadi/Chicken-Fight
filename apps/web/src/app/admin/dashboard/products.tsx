import { MainCard } from "@/components/catalogue/mainCard";
import { ProductCard } from "@/components/catalogue/productCard";
import { ProductSamples } from "@/data/samples/productSamples";
import { Product } from "@/interfaces/databaseTables";
import { useSelector } from "react-redux";

export default function DashboardProducts({
  products,
}: {
  products?: Array<Product> | undefined;
}) {
  const currentType = useSelector(
    (state: { TPTSlice: { type: number | null } }) => state.TPTSlice.type
  );

  const PRODUCTS: Array<Product> = (products || ProductSamples).filter(
    (product: Product) => product.type === currentType
  );
  const PRODUCTMAIN: Product = PRODUCTS.filter(
    (product: Product) => product.promoted
  )[0];

  return (
    <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 bg-gradient-to-b from-primary-100 via-primary-50 to-primary-50 dark:from-backtheme-700 dark:via-backtheme-800 dark:to-backtheme-900 rounded-xl rounded-tl-none shadow-md shadow-gray-700 dark:shadow-backtheme-900 px-6 py-4">
      <div className="flex flex-col gap-8">
        <div className={`${products && !PRODUCTMAIN ? "hidden " : ""}mx-auto`}>
          <MainCard product={PRODUCTMAIN || ProductSamples[0]} dashboard={true} />
        </div>
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-10 xl:gap-6 *:items-center">
          {PRODUCTS.filter(
            (product: Product) => product.id != PRODUCTMAIN.id
          ).map((product: Product) => (
            <div key={`product-${product.id}`}>
              <ProductCard product={product} dashboard={true} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
