import { MainCard } from "@/components/catalogue/mainCard";
import { ProductCard } from "@/components/catalogue/productCard";
import AddProductCard from "@/components/dashboard/addProductCard";
import AddProduct from "@/components/dashboard/forms/addProduct";
import AddProductMain from "@/components/dashboard/forms/addProductMain";
import EditProduct from "@/components/dashboard/forms/editProduct";
import EditProductMain from "@/components/dashboard/forms/editProductMain";
import { ProductSamples } from "@/data/samples/productSamples";
import { Product } from "@/interfaces/databaseTables";
import { toggleAddProduct } from "@/redux/slices/toggleAddProduct";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface EditOption {
  productID: number;
  editActive: boolean;
}

export default function DashboardProducts({
  products,
}: {
  products?: Array<Product> | undefined;
}) {
  // Page displays products from current product type only
  const currentType = useSelector(
    (state: { TPTSlice: { type: number | null } }) => state.TPTSlice.type
  );

  // Add product form toggles
  const formActive = useSelector(
    (state: { TAPSlice: { formActive: boolean } }) => state.TAPSlice.formActive
  );
  const mainFormActive = useSelector(
    (state: { TAMPSlice: { formActive: boolean } }) =>
      state.TAMPSlice.formActive
  );

  // Edit product form toggles
  const editOptions = useSelector(
    (state: { TEPSlice: { options: EditOption | null } }) =>
      state.TEPSlice.options
  );
  const mainEditActive = useSelector(
    (state: { TEMPSlice: { editActive: boolean } }) =>
      state.TEMPSlice.editActive
  );

  // Client-side edit form statuses (non-promoted only)
  const [currentEdits, setCurrentEdits] = useState<Array<EditOption>>(
    products
      ? products
          .filter((product: Product) => {
            return !product.promoted;
          })
          .map((product: Product) => {
            return { productID: product.id, editActive: false };
          })
      : []
  );

  // Client-side all products
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

  // Editting form toggles
  useEffect(() => {
    if (editOptions) {
      setCurrentEdits((editArray: Array<EditOption>) => {
        const currentEditsCopy: Array<EditOption> = editArray.map(
          (option: EditOption) => option
        );
        const editIndex: number = currentEditsCopy.findIndex(
          (option: EditOption) => {
            return option.productID === editOptions.productID;
          }
        );

        currentEditsCopy[editIndex].editActive = editOptions.editActive;

        return currentEditsCopy;
      });
    }
  }, [editOptions]);

  // Manual updating of products on client-side after change in database products
  useEffect(() => {
    // Delete product
    if (updateProduct.deleteID) {
      setCurrentProducts((productArray: Array<Product>) => {
        const deleteIndex: number = productArray.findIndex(
          (product: Product) => {
            return product.id === updateProduct.deleteID;
          }
        );

        return productArray.filter((product: Product, index: number) => {
          return index !== deleteIndex;
        });
      });

      if (editOptions) {
        setCurrentEdits((editArray: Array<EditOption>) => {
          const currentEditsCopy: Array<EditOption> = editArray.map(
            (option: EditOption) => option
          );
          return currentEditsCopy.filter((option: EditOption) => {
            return option.productID !== updateProduct.deleteID;
          });
        });
      }

      dispatch(toggleAddProduct(false));

      // Edit product
    } else if (updateProduct.edit) {
      setCurrentProducts((productArray: Array<Product>) => {
        const editIndex: number = productArray.findIndex((product: Product) => {
          return product.id === updateProduct.newProduct!.id;
        });
        return productArray.map((product: Product, index: number) => {
          if (index === editIndex) {
            return updateProduct.newProduct!;
          } else {
            return product;
          }
        });
      });

      if (editOptions) {
        setCurrentEdits((editArray: Array<EditOption>) => {
          const currentEditsCopy: Array<EditOption> = editArray.map(
            (option: EditOption) => option
          );
          const editOptionIndex: number = currentEditsCopy.findIndex(
            (option: EditOption) => {
              return option.productID === updateProduct.newProduct!.id;
            }
          );
          currentEditsCopy[editOptionIndex].editActive = false;

          return currentEditsCopy;
        });
      }

      dispatch(toggleAddProduct(false));

      // Add product
    } else if (updateProduct.newProduct) {
      setCurrentProducts((productArray: Array<Product>) => {
        const newProducts: Array<Product> = productArray.map(
          (product: Product) => product
        );
        newProducts.push(updateProduct.newProduct!);
        return newProducts;
      });

      if (editOptions) {
        setCurrentEdits((editArray: Array<EditOption>) => {
          const currentEditsCopy: Array<EditOption> = editArray.map(
            (option: EditOption) => option
          );
          currentEditsCopy.push({
            productID: updateProduct.newProduct!.id,
            editActive: false,
          });

          return currentEditsCopy;
        });
      }

      dispatch(toggleAddProduct(false));
    }
  }, [updateProduct, dispatch, editOptions]);

  return (
    <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 bg-gradient-to-b from-primary-100 via-primary-50 to-primary-50 dark:from-backtheme-900 dark:via-backtheme-950 dark:to-backtheme-950 rounded-xl rounded-tl-none shadow-md shadow-gray-700 dark:shadow-md dark:shadow-white/5 px-6 py-4">
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-1 grid-rows-1">
          <div
            className={`${
              !mainFormActive && !mainEditActive ? "" : "hidden "
            }col-start-1 row-start-1 grid`}
          >
            <MainCard product={PRODUCTMAIN} dashboard={true} />
          </div>
          <div
            className={`${
              mainFormActive && !mainEditActive ? "" : "hidden "
            }col-start-1 row-start-1 grid`}
          >
            <AddProductMain />
          </div>
          <div
            className={`${
              !mainFormActive && mainEditActive ? "" : "hidden "
            }col-start-1 row-start-1 grid`}
          >
            <EditProductMain product={PRODUCTMAIN} />
          </div>
        </div>
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-10 xl:gap-6">
          {PRODUCTS.filter((product: Product) =>
            PRODUCTMAIN.desc === ProductSamples[0].desc ||
            PRODUCTMAIN.desc === ProductSamples[7].desc
              ? true
              : product.id !== PRODUCTMAIN.id
          ).map((product: Product) => (
            <div
              key={`product-${product.id}`}
              className="grid grid-cols-1 grid-rows-1"
            >
              <div
                className={`${
                  currentEdits.find((option: EditOption) => {
                    return option.productID === product.id;
                  })?.editActive
                    ? "hidden "
                    : ""
                }col-start-1 col-end-2 row-start-1 row-end-2`}
                id={`dashboard-product-${product.id}`}
              >
                <ProductCard product={product} dashboard={true} />
              </div>
              <div
                className={`${
                  currentEdits.find((option: EditOption) => {
                    return option.productID === product.id;
                  })?.editActive
                    ? ""
                    : "hidden "
                }col-start-1 col-end-2 row-start-1 row-end-2`}
              >
                <EditProduct product={product} />
              </div>
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
