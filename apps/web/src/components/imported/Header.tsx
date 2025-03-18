"use client";

import siteMetadata from "@/data/siteMetadata";
import headerNavLinks from "@/data/headerNavLinks";
import Link from "./Link";
import MobileNav from "./MobileNav";
import ThemeSwitch from "./ThemeSwitch";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import LogoutButton from "./LogoutButton";
import { AccessTokenUser } from "@/interfaces/accesstokens";
import headerNavLinksLoggedIn from "@/data/headerNavLinksLoggedIn";
import { Provider, useSelector } from "react-redux";
import { store } from "@/redux/store";
import Image from "next/image";
import noImages from "@/assets/noImage";

const Header = ({ token }: { token: AccessTokenUser | null }) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);
  const [navLinks, setNavLinks] = useState(
    token ? headerNavLinksLoggedIn : headerNavLinks
  );

  const activeLinks = useSelector(
    (state: {
      UHLSlice: { headerLinks: Array<{ href: string; title: string }> | null };
    }) => state.UHLSlice.headerLinks
  );

  useEffect(() => {
    if (activeLinks) {
      setNavLinks(activeLinks);
    }
  }, [activeLinks]);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  try {
    return (
      <header
        className={`w-full${
          isScrolling
            ? " bg-gradient-to-t from-white via-white to-95% to-[#fffcf0] dark:bg-gradient-to-t dark:from-gray-950 dark:to-gray-950 shadow-lg dark:shadow-md dark:shadow-gray-800"
            : " bg-transparent hover:bg-gradient-to-t hover:from-white hover:via-white to-95% hover:to-[#fffcf0] hover:dark:bg-gradient-to-t hover:dark:from-gray-950 hover:dark:to-gray-950 hover:shadow-lg hover:dark:shadow-md hover:dark:shadow-gray-800"
        } py-4 px-4 sm:px-6 xl:px-8 rounded-b-lg${
          siteMetadata.stickyNav ? " sticky top-0 z-50" : ""
        }`}
        id="global-header"
      >
        <div className="flex items-center justify-between mx-auto max-w-3xl xl:max-w-full">
          <Link
            href="/"
            aria-label={
              (siteMetadata.headerTitle || "headerTitle") + " home page"
            }
          >
            <div className="flex items-center justify-between">
              <div
                className={`block sm:hidden md:block mr-3${
                  isScrolling ? "" : " text-black dark:text-white"
                }`}
              >
                {siteMetadata.headerLogo ? (
                  <Image
                    src={siteMetadata.headerLogo || noImages[0]}
                    width={siteMetadata.headerLogoWidth || 32}
                    height={siteMetadata.headerLogoHeight || 32}
                    alt={siteMetadata.headerTitle}
                    className="h-full w-full object-cover"
                    priority
                  />
                ) : (
                  <span>logo</span>
                )}
              </div>
              {typeof siteMetadata.headerTitle === "string" ? (
                <div
                  className={`hidden m-auto text-xl font-semibold sm:block${
                    isScrolling ? "" : " text-black dark:text-white"
                  }`}
                >
                  {siteMetadata.headerTitle || "headerTitle"}
                </div>
              ) : (
                "invalid headerTitle"
              )}
            </div>
          </Link>
          <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
            <div className="no-scrollbar hidden max-w-40 items-center space-x-4 overflow-x-auto md:flex md:space-x-6 md:max-w-72 lg:max-w-96">
              {navLinks.length > 1 ? (
                navLinks
                  .filter((link) => link.href !== "/")
                  .map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      aria-label={link.title}
                      className={`block font-medium hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400${
                        isScrolling
                          ? " text-gray-900"
                          : " text-black dark:text-white"
                      }`}
                    >
                      {link.title}
                    </Link>
                  ))
              ) : (
                <span
                  className={`${
                    isScrolling ? "" : "text-black dark:text-white"
                  }`}
                >
                  {token ? "headerNavLinksLoggedIn" : "headerNavLinks"}
                </span>
              )}
              {cookies.access_token !== "undefined" && cookies.access_token ? (
                <LogoutButton mobile={false} />
              ) : null}
            </div>
            <ThemeSwitch scrolling={isScrolling} />
            {/* <MobileNav loggedIn={token ? true : false} /> */}
            <MobileNav
              scrolling={isScrolling}
              loggedIn={
                cookies.access_token !== "undefined" && cookies.access_token
              }
            />
          </div>
        </div>
      </header>
    );
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default function HeaderProvider({
  token,
}: {
  token: AccessTokenUser | null;
}) {
  return (
    <Provider store={store}>
      <Header token={token} />
    </Provider>
  );
}
