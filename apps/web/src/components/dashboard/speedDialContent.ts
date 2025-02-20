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

function speedDialContent(product: Product): Array<SpeedDialContent> {
  const dispatch = useDispatch();

  const contents: Array<SpeedDialContent> = [
    {
      title: "Add main product",
      icon: PlusIcon,
      action: () => dispatch(toggleAddMainProduct(true)),
    },
    {
      title: "Promote",
      icon: ArrowUpIcon,
      action: () => console.log("Hello, world! this is the promote function"),
    },
    {
      title: "Demote",
      icon: ArrowDownIcon,
      action: () => console.log("Hello, world! this is the demote function"),
    },
    {
      title: "Edit",
      icon: PencilSquareIcon,
      action: () =>
        console.log(
          "Hello, world! this is an edit function for product " + product.id
        ),
    },
    {
      title: "Delete",
      icon: TrashIcon,
      action: () =>
        console.log(
          "Hello, world! this is a delete function for product " + product.id
        ),
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

export default speedDialContent;
