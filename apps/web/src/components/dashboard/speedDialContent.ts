import {
  ArrowDownIcon,
  ArrowUpIcon,
  PencilSquareIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import { SpeedDialContent } from "./SpeedDial";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Product } from "@/interfaces/databaseTables";
import { useDispatch } from "react-redux";
import { toggleAddMainProduct } from "@/redux/slices/toggleAddMainProduct";
import { toggleEditProduct } from "@/redux/slices/toggleEditProduct";
import { toggleEditMainProduct } from "@/redux/slices/toggleEditMainProduct";
import { useRouter } from "next/navigation";
import axios from "axios";
import Swal from "sweetalert2";
import { updateDashboardProduct } from "@/redux/slices/updateDashboardProduct";
import siteMetadata from "@/data/siteMetadata";
import ErrorHandler from "@/errorhandler/error-handler";
import { promoteDemoteProduct } from "@/redux/slices/promoteDemoteProduct";

function useSpeedDialContent(
  product: Product,
  allProducts: Array<Product>
): Array<SpeedDialContent> {
  const dispatch = useDispatch();
  const router = useRouter();

  const contents: Array<SpeedDialContent> = [
    {
      title: "Add main product",
      icon: PlusIcon,
      action: () => dispatch(toggleAddMainProduct(true)),
    },
    {
      title: "Promote",
      icon: ArrowUpIcon,
      action: async () => {
        const currentMainProducts: Array<Product> = allProducts.filter(
          (prod: Product) => {
            return prod.type === product.type && prod.promoted;
          }
        );

        if (
          siteMetadata.maxMainProducts === 1 &&
          currentMainProducts.length >= 1
        ) {
          const currentMainProduct: Product = currentMainProducts[0];

          Swal.fire({
            title: "Confirm promotion",
            html:
              "<span>This action will convert</span>" +
              `<b>${" " + product.name.toLocaleUpperCase() + " "}</b>` +
              "<span>from a regular product to a main product</span>" +
              "<br>" +
              "<br>" +
              "<span>This action will convert</span>" +
              `<b>${
                " " + currentMainProduct.name.toLocaleUpperCase() + " "
              }</b>` +
              "<span>from a main product to a regular product</span>",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#948916",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Promote",
          }).then(async (result) => {
            if (result.isConfirmed) {
              try {
                // Demote
                const API: string =
                  process.env.NEXT_PUBLIC_BASE_API_URL + "/data/product";
                const outputDemote = await axios.post(API, {
                  id: String(currentMainProduct.id),
                  image: currentMainProduct.image,
                  promoted: "false",
                  name: currentMainProduct.name,
                  type: String(currentMainProduct.type),
                  overview: currentMainProduct.overview || "",
                  desc: currentMainProduct.desc || "",
                });

                if (!outputDemote) throw Error();

                // Promote
                const outputPromote = await axios.post(API, {
                  id: String(product.id),
                  image: product.image,
                  promoted: "true",
                  name: product.name,
                  type: String(product.type),
                  overview: product.overview || "",
                  desc: product.desc || "",
                });

                if (!outputPromote) throw Error();

                Swal.fire({
                  icon: "success",
                  title: "Product promoted!",
                  html:
                    `<b>${
                      currentMainProduct.name.toLocaleUpperCase() + " "
                    }</b>` + "<span>has been demoted</span>",
                });

                router.push("/admin/dashboard");
                router.refresh();

                dispatch(
                  promoteDemoteProduct({
                    promote: true,
                    promoteProduct: outputPromote.data.data,
                    demote: true,
                    demoteProduct: outputDemote.data.data,
                  })
                );
              } catch (err) {
                ErrorHandler(err);
              }
            }
          });
        } else if (
          siteMetadata.maxMainProducts > 1 &&
          currentMainProducts.length >= siteMetadata.maxMainProducts
        ) {
          Swal.fire({
            icon: "error",
            title: "Main products at maximum capacity",
            text: "Please demote or delete a main product first",
          });
        } else {
          Swal.fire({
            title: "Confirm promotion",
            html:
              "<span>This action will convert</span>" +
              `<b>${" " + product.name.toLocaleUpperCase() + " "}</b>` +
              "<span>from a regular product to a main product</span>",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#948916",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Promote",
          }).then(async (result) => {
            if (result.isConfirmed) {
              try {
                const API: string =
                  process.env.NEXT_PUBLIC_BASE_API_URL + "/data/product";
                const output = await axios.post(API, {
                  id: String(product.id),
                  image: product.image,
                  promoted: "true",
                  name: product.name,
                  type: String(product.type),
                  overview: product.overview || "",
                  desc: product.desc || "",
                });

                if (!output) throw Error();

                Swal.fire({
                  icon: "success",
                  title: "Product promoted!",
                });

                router.push("/admin/dashboard");
                router.refresh();

                dispatch(
                  promoteDemoteProduct({
                    promote: true,
                    promoteProduct: output.data.data,
                  })
                );
              } catch (err) {
                ErrorHandler(err);
              }
            }
          });
        }
      },
    },
    {
      title: "Demote",
      icon: ArrowDownIcon,
      action: async () => {
        Swal.fire({
          title: "Confirm demotion",
          html:
            "<span>This action will convert</span>" +
            `<b>${" " + product.name.toLocaleUpperCase() + " "}</b>` +
            "<span>from a main product to a regular product</span>",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#948916",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Demote",
        }).then(async (result) => {
          if (result.isConfirmed) {
            try {
              const API: string =
                process.env.NEXT_PUBLIC_BASE_API_URL + "/data/product";
              const output = await axios.post(API, {
                id: String(product.id),
                image: product.image,
                promoted: "false",
                name: product.name,
                type: String(product.type),
                overview: product.overview || "",
                desc: product.desc || "",
              });

              if (!output) throw Error();

              Swal.fire({
                icon: "success",
                title: "Product demoted!",
              });

              router.push("/admin/dashboard");
              router.refresh();

              dispatch(
                promoteDemoteProduct({
                  demote: true,
                  demoteProduct: output.data.data,
                })
              );
            } catch (err) {
              ErrorHandler(err);
            }
          }
        });
      },
    },
    {
      title: "Edit",
      icon: PencilSquareIcon,
      action: product.promoted
        ? () => dispatch(toggleEditMainProduct(true))
        : () =>
            dispatch(
              toggleEditProduct({ productID: product.id, editActive: true })
            ),
    },
    {
      title: "Delete",
      icon: TrashIcon,
      action: async () => {
        Swal.fire({
          title: "Confirm delete",
          html: `<span>Please confirm that you want to delete this product:</span><br><b>${product.name.toLocaleUpperCase()}</b>`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Delete",
        }).then(async (result) => {
          if (result.isConfirmed) {
            try {
              const API: string =
                process.env.NEXT_PUBLIC_BASE_API_URL +
                "/data/product/" +
                product.id;
              const output = await axios.delete(API);

              if (!output) throw Error();

              Swal.fire({
                icon: "success",
                title: "Product deleted!",
              });

              router.push("/admin/dashboard");
              router.refresh();

              dispatch(updateDashboardProduct({ deleteID: product.id }));
            } catch (err) {
              ErrorHandler(err);
            }
          }
        });
      },
    },
  ];

  if (!product.promoted) {
    return [contents[1], contents[3], contents[4]];
  } else if (
    product.dateCreated.valueOf() !== // Promoted sample product
    new Date("2023-01-11T09:18:14.000Z").valueOf()
  ) {
    return [contents[2], contents[3], contents[4]];
  } else {
    return [contents[0]];
  }
}

export default useSpeedDialContent;
