import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Typography,
} from "@material-tailwind/react";
import {
  HomeIcon,
  CogIcon,
  Square3Stack3DIcon,
  Cog8ToothIcon as CogOutline,
} from "@heroicons/react/24/outline";
import { MouseEventHandler } from "react";
import { Cog8ToothIcon as CogSolid } from "@heroicons/react/24/solid";

export interface SpeedDialContent {
  title: string;
  icon: any;
  action: MouseEventHandler;
  buttonType?: "button" | "submit" | "reset";
}

const speedDialContentSample: Array<SpeedDialContent> = [
  {
    title: "Very long menu title",
    icon: HomeIcon,
    action: () => console.log("Hello, world!"),
  },
  {
    title: "Settings",
    icon: CogIcon,
    action: () => console.log("Hello, world!"),
  },
  {
    title: "Pages",
    icon: Square3Stack3DIcon,
    action: () => console.log("Hello, world!"),
  },
];

export default function DashboardSpeedDial({
  contents,
  placement,
}: {
  contents?: Array<SpeedDialContent>;
  placement?: "top" | "left" | "right" | "bottom";
}) {
  const SPEED_DIAL_CONTENT: Array<SpeedDialContent> =
    contents && contents.length > 0 ? contents : speedDialContentSample;

  return (
    <SpeedDial placement={placement || "top"}>
      <SpeedDialHandler>
        <IconButton
          size="sm"
          className="rounded-xl bg-primary-800 dark:bg-primary-100 group-hover:bg-primary-200 dark:group-hover:bg-primary-700"
        >
          <CogSolid className="hidden h-5 w-5 transition-transform group-hover:block dark:text-black group-hover:text-black dark:group-hover:text-white" />
          <CogOutline className="block h-5 w-5 transition-transform group-hover:hidden dark:text-black group-hover:text-black dark:group-hover:text-white" />
        </IconButton>
      </SpeedDialHandler>
      <SpeedDialContent className="flex-col z-50">
        {SPEED_DIAL_CONTENT.map((content: SpeedDialContent, index: number) => (
          <SpeedDialAction
            key={content.title + index}
            aria-label={content.title}
            className="relative bg-primary-200 dark:bg-primary-700 dark:border-primary-800/40 shadow-md shadow-gray-400 dark:shadow-gray-700/40 text-black dark:text-white"
            onClick={content.action}
            type={content.buttonType ? content.buttonType : "button"}
          >
            <content.icon className="h-6 w-6" />
            <Typography
              variant="small"
              className="absolute top-2/4 -left-[15%] -translate-y-2/4 -translate-x-full font-medium bg-primary-50 dark:bg-primary-800 dark:border dark:border-primary-800/40 shadow-md shadow-gray-400 dark:shadow-md dark:shadow-gray-700/40 text-black dark:text-white px-4 py-2 rounded-xl text-nowrap"
            >
              <span>{content.title}</span>
            </Typography>
          </SpeedDialAction>
        ))}
      </SpeedDialContent>
    </SpeedDial>
  );
}
