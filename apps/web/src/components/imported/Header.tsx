import siteMetadata from "@/data/siteMetadata";
import headerNavLinks from "@/data/headerNavLinks";
import Link from "./Link";
import MobileNav from "./MobileNav";
import ThemeSwitch from "./ThemeSwitch";
// import VerifyTokenServer from 'verifytoken/verifytokenserver'
// import headerNavLinksLoggedIn from "@/data/headerNavLinksLoggedIn";
// import LogoutButton from './LogoutButton'

const Header = async () => {
  try {
    // const token = await VerifyTokenServer()

    let headerClass =
      "w-full bg-gradient-to-t from-white via-white to-95% to-[#fffcf0] dark:bg-gradient-to-t dark:from-gray-950 dark:to-gray-950 py-10 px-4 sm:px-6 xl:px-0 rounded-b-lg shadow-lg dark:shadow-md dark:shadow-gray-800 mb-[-0.5rem]";
    if (siteMetadata.stickyNav) {
      headerClass += " sticky top-0 z-50";
    }

    return (
      <header className={headerClass}>
        <div className="flex items-center justify-between mx-auto max-w-3xl xl:max-w-5xl">
          <Link href="/" aria-label={siteMetadata.headerTitle || "headerTitle"}>
            <div className="flex items-center justify-between">
              <div className="mr-3">{/* <Logo /> */}Logo</div>
              {typeof siteMetadata.headerTitle === "string" ? (
                <div className="hidden h-6 text-2xl font-semibold sm:block">
                  {siteMetadata.headerTitle || "headerTitle"}
                </div>
              ) : (
                siteMetadata.headerTitle || "headerTitle"
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
                      className="block font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                    >
                      {link.title}
                    </Link>
                  ))
              ) : (
                <span>headerNavLinks</span>
              )}
              {/* {token ? <LogoutButton mobile={false} /> : null} */}
            </div>
            <ThemeSwitch />
            {/* <MobileNav loggedIn={token ? true : false} /> */}
            <MobileNav loggedIn={false} />
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
