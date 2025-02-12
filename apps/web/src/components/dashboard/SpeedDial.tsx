import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Typography,
} from "@material-tailwind/react";
import {
  PencilIcon,
  PencilSquareIcon,
  HomeIcon,
  CogIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";

interface SpeedDialContent {
  title: string;
  icon: any;
  href: string;
}

const speedDialContentSample: Array<SpeedDialContent> = [
  {
    title: "Very long menu title",
    icon: HomeIcon,
    href: "/",
  },
  {
    title: "Settings",
    icon: CogIcon,
    href: "/",
  },
  {
    title: "Pages",
    icon: Square3Stack3DIcon,
    href: "/",
  },
];

export default function DashboardSpeedDial({
  contents,
}: {
  contents?: Array<SpeedDialContent>;
}) {
  const SPEED_DIAL_CONTENT: Array<SpeedDialContent> =
    contents && contents.length > 0 ? contents : speedDialContentSample;

  return (
    <SpeedDial>
      <SpeedDialHandler>
        <IconButton
          size="sm"
          className="rounded-xl bg-primary-800 dark:bg-primary-100 group-hover:bg-primary-200 dark:group-hover:bg-primary-700"
        >
          <PencilIcon className="hidden h-5 w-5 transition-transform group-hover:block dark:text-black group-hover:text-black dark:group-hover:text-white" />
          <PencilSquareIcon className="block h-5 w-5 transition-transform group-hover:hidden dark:text-black group-hover:text-black dark:group-hover:text-white" />
        </IconButton>
      </SpeedDialHandler>
      <SpeedDialContent className="flex-col z-50">
        {SPEED_DIAL_CONTENT.map((content: SpeedDialContent) => (
          <SpeedDialAction
            key={content.title}
            className="relative bg-primary-50 shadow-md shadow-gray-400"
          >
            <content.icon className="h-6 w-6" />
            <Typography
              variant="small"
              className="absolute top-2/4 -left-[15%] -translate-y-2/4 -translate-x-full font-normal bg-primary-50 px-4 py-2 rounded-xl shadow-md shadow-gray-400 text-nowrap"
            >
              <span>{content.title}</span>
            </Typography>
          </SpeedDialAction>
        ))}
      </SpeedDialContent>
    </SpeedDial>
  );
}
