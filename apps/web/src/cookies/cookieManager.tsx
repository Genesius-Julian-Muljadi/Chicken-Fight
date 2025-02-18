"use client";

import { useEffect } from "react";
import { useCookies } from "react-cookie";
import COOKIE_EXPIRATION_MINUTES from "../../../cookieExpiration";
import { Provider, useSelector } from "react-redux";
import { store } from "@/redux/store";

function CookieManager() {
  const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);
  const currentCookie = useSelector(
    (state: { UCSlice: { cookie: string | null } }) => state.UCSlice.cookie
  );

  const extendCookieExpiration = (e: any) => {
    if (
      cookies.access_token !== "undefined" &&
      cookies.access_token &&
      e.target.id !== "LogoutButton"
    ) {
      setCookie("access_token", cookies.access_token, {
        path: "/",
        expires: new Date(
          new Date().valueOf() + COOKIE_EXPIRATION_MINUTES * 60000
        ),
      });
    }
  };

  const addGlobalEventListeners = () => {
    ["click", "scroll", "keydown"].forEach((event) => {
      window.addEventListener(event, extendCookieExpiration);
    });

    window.addEventListener("click", (e: any) => {
      if (e.target.id === "LogoutButton") {
        setCookie("access_token", "undefined", {
          path: "/",
          expires: new Date(),
        });
      }
    });
  };

  useEffect(() => {
    if (currentCookie) {
      if (currentCookie === "undefined") {
        removeCookie("access_token", { path: "/" });
      } else {
        setCookie("access_token", currentCookie, {
          path: "/",
          expires: new Date(
            new Date().valueOf() + COOKIE_EXPIRATION_MINUTES * 60000
          ),
        });
        console.log(cookies);
      }
    }

    addGlobalEventListeners();

    return () => {
      ["click", "scroll", "keydown"].forEach((event) =>
        window.removeEventListener(event, extendCookieExpiration)
      );
    };
  }, [currentCookie]);

  return null;
}

export default function CookieManagerProvider() {
  return (
    <Provider store={store}>
      <CookieManager />
    </Provider>
  );
}
