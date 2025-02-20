import { MainCard } from "@/components/catalogue/mainCard";
import { ProductCard } from "@/components/catalogue/productCard";
import AddProductCard from "@/components/dashboard/addProductCard";
import AddProduct from "@/components/dashboard/forms/addProduct";
import AddProductMain from "@/components/dashboard/forms/addProductMain";
import { ProductSamples } from "@/data/samples/productSamples";
import { Product } from "@/interfaces/databaseTables";
import { toggleAddProduct } from "@/redux/slices/toggleAddProduct";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function DashboardProducts({
  products,
}: {
  products?: Array<Product> | undefined;
}) {
  const currentType = useSelector(
    (state: { TPTSlice: { type: number | null } }) => state.TPTSlice.type
  );
  const formActive = useSelector(
    (state: { TAPSlice: { formActive: boolean } }) => state.TAPSlice.formActive
  );
  const mainFormActive = useSelector(
    (state: { TAMPSlice: { formActive: boolean } }) =>
      state.TAMPSlice.formActive
  );
  const [currentProducts, setCurrentProducts] = useState<Array<Product>>(
    products || [ProductSamples[0], ProductSamples[7]]
  );
  const updateProduct = useSelector(
    (state: {
      UDPSlice: {
        newProduct: Product | null;
        edit: boolean;
        deleteID: number | null;
      };
    }) => state.UDPSlice
  );

  const dispatch = useDispatch();

  const PRODUCTS: Array<Product> = currentProducts.filter(
    (product: Product) => product.type === currentType
  );
  const PRODUCTMAIN: Product =
    PRODUCTS.filter((product: Product) => product.promoted)[0] ||
    [ProductSamples[0], ProductSamples[7]].filter(
      (product: Product) => product.type === currentType
    )[0];

  useEffect(() => {
    if (updateProduct.deleteID) {
      const deleteIndex: number = currentProducts.findIndex(
        (product: Product) => {
          return product.id === updateProduct.deleteID;
        }
      );
      setCurrentProducts(
        currentProducts.filter((product: Product, index: number) => {
          return index !== deleteIndex;
        })
      );

      dispatch(toggleAddProduct(false));
    } else if (updateProduct.edit) {
      const editIndex: number = currentProducts.findIndex(
        (product: Product) => {
          return product.id === updateProduct.newProduct!.id;
        }
      );
      setCurrentProducts(
        currentProducts.map((product: Product, index: number) => {
          if (index === editIndex) {
            return updateProduct.newProduct!;
          } else {
            return product;
          }
        })
      );

      dispatch(toggleAddProduct(false));
    } else if (updateProduct.newProduct) {
      const newProducts: Array<Product> = currentProducts;
      newProducts.push(updateProduct.newProduct!);
      setCurrentProducts(newProducts);

      dispatch(toggleAddProduct(false));
    }
  }, [updateProduct]);

  return (
    <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 bg-gradient-to-b from-primary-100 via-primary-50 to-primary-50 dark:from-backtheme-900 dark:via-backtheme-950 dark:to-backtheme-950 rounded-xl rounded-tl-none shadow-md shadow-gray-700 dark:shadow-md dark:shadow-white/5 px-6 py-4">
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-1 grid-rows-1">
          <div
            className={`${
              mainFormActive ? "hidden  " : ""
            }col-start-1 row-start-1 grid`}
          >
            <MainCard product={PRODUCTMAIN} dashboard={true} />
          </div>
          <div
            className={`${
              mainFormActive ? "" : "hidden  "
            }col-start-1 row-start-1 grid`}
          >
            <AddProductMain />
          </div>
        </div>
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-10 xl:gap-6 *:items-center">
          {PRODUCTS.filter((product: Product) =>
            PRODUCTMAIN.desc === ProductSamples[0].desc ||
            PRODUCTMAIN.desc === ProductSamples[7].desc
              ? true
              : product.id !== PRODUCTMAIN.id
          ).map((product: Product) => (
            <div key={`product-${product.id}`}>
              <ProductCard product={product} dashboard={true} />
            </div>
          ))}
          <div className="grid grid-cols-1 grid-rows-1">
            <div
              className={`${
                formActive ? "hidden " : ""
              }col-start-1 col-end-2 row-start-1 row-end-2`}
            >
              <AddProductCard />
            </div>
            <div
              className={`${
                formActive ? "" : "hidden "
              }col-start-1 col-end-2 row-start-1 row-end-2`}
            >
              <AddProduct />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
