"use client";

import siteMetadata from "@/data/siteMetadata";
import headerNavLinks from "@/data/headerNavLinks";
import Link from "./Link";
import MobileNav from "./MobileNav";
import ThemeSwitch from "./ThemeSwitch";
import React from "react";
// import VerifyTokenServer from 'verifytoken/verifytokenserver'
// import headerNavLinksLoggedIn from "@/data/headerNavLinksLoggedIn";
// import LogoutButton from './LogoutButton'

const Header = () => {
  try {
    const [isScrolling, setIsScrolling] = React.useState(false);

    React.useEffect(() => {
      function handleScroll() {
        if (window.scrollY > 600) {
          setIsScrolling(true);
        } else {
          setIsScrolling(false);
        }
      }

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <header
        className={`w-full${
          isScrolling
            ? " bg-gradient-to-t from-white via-white to-95% to-[#fffcf0] dark:bg-gradient-to-t dark:from-gray-950 dark:to-gray-950 shadow-lg dark:shadow-md dark:shadow-gray-800"
            : " bg-transparent"
        } py-4 px-4 sm:px-6 xl:px-8 rounded-b-lg mb-[-4rem]${
          siteMetadata.stickyNav ? " sticky top-0 z-50" : ""
        }`}
      >
        <div className="flex items-center justify-between mx-auto max-w-3xl xl:max-w-full">
          <Link href="/" aria-label={siteMetadata.headerTitle || "headerTitle"}>
            <div className="flex items-center justify-between">
              <div className={`mr-3${isScrolling ? "" : " text-white"}`}>
                {/* <Logo /> */}logo
              </div>
              {typeof siteMetadata.headerTitle === "string" ? (
                <div
                  className={`hidden m-auto text-xl font-semibold sm:block${
                    isScrolling ? "" : " text-white"
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
            <div className="no-scrollbar hidden max-w-40 items-center space-x-4 overflow-x-auto sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96">
              {/* {(token ? headerNavLinksLoggedIn : headerNavLinks) */}
              {headerNavLinks.length > 1 ? (
                headerNavLinks
                  .filter((link) => link.href !== "/")
                  .map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      className={`block font-medium hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400${
                        isScrolling ? " text-gray-900" : " text-white"
                      }`}
                    >
                      {link.title}
                    </Link>
                  ))
              ) : (
                <span className={`${isScrolling ? "" : "text-white"}`}>
                  headerNavLinks
                </span>
              )}
              {/* {token ? <LogoutButton mobile={false} /> : null} */}
            </div>
            <ThemeSwitch scrolling={isScrolling} />
            {/* <MobileNav loggedIn={token ? true : false} /> */}
            <MobileNav scrolling={isScrolling} loggedIn={false} />
          </div>
        </div>
      </header>
    );
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default Header;
