"use client";

import headerNavLinks from "@/data/headerNavLinks";
import { updateCookie } from "@/redux/slices/updateCookie";
import { updateHeaderLinks } from "@/redux/slices/updateHeaderLinks";
import { store } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import { Provider, useDispatch } from "react-redux";

function LogoutButton({ mobile }: { mobile: boolean }) {
  const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);
  const router = useRouter();
  const dispatch = useDispatch();

  if (mobile) {
    return (
      <button
        className="mb-4 py-2 pr-4 text-2xl font-bold tracking-widest text-gray-900 outline outline-0 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
        aria-label="Log out"
        onClick={() => {
          router.push("/");
          dispatch(updateCookie("undefined"));
          removeCookie("access_token", { path: "/" });
          // Vercel cookie issue fix
          document.cookie = `access_token=-; expires=${new Date(0)}`;
          router.refresh();
        }}
        id="LogoutButton"
      >
        Log out
      </button>
    );
  } else {
    return (
      <button
        className="block font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
        id="LogoutButton"
        onClick={() => {
          router.push("/");
          dispatch(updateCookie("undefined"));
          dispatch(updateHeaderLinks(headerNavLinks));
          removeCookie("access_token", {
            path: "/",
          });
          // Vercel cookie issue fix
          document.cookie = `access_token=-; expires=${new Date(0)}`;
          router.refresh();
        }}
      >
        Log out
      </button>
    );
  }
}

export default function LogoutProvider({ mobile }: { mobile: boolean }) {
  return (
    <Provider store={store}>
      <LogoutButton mobile={mobile} />
    </Provider>
  );
}
