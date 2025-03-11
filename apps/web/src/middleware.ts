import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { NextURL } from "next/dist/server/web/next-url";
import { jwtDecode } from "jwt-decode";
import { AccessTokenUser } from "./interfaces/accesstokens";
import userRoles, { RoleAccess } from "./data/userRoles";

const protectedRoutes = ["/admin/dashboard"];
// const protectedRoutes = ["/thispathdoesn'texist"];

export default async function middleware(req: NextRequest) {
  try {
    const cookieStore = await cookies();
    const isProtected = protectedRoutes.some((path) =>
      req.nextUrl.pathname.startsWith(path)
    );

    const token = cookieStore.get("access_token")?.value || "";

    if (isProtected && !token) {
      return NextResponse.redirect(new NextURL("/admin", req.nextUrl));
    }

    let decodedToken: AccessTokenUser | null = null;
    if (token) {
      decodedToken = jwtDecode(token);

      const access: "all" | Array<string> | undefined = userRoles.find(
        (roleAccess: RoleAccess) => {
          return roleAccess.role === decodedToken?.role;
        }
      )?.access;

      if (access) {
        if (
          req.nextUrl.pathname.startsWith("/admin/dashboard") &&
          access !== "all" &&
          !(
            Array.isArray(access) &&
            access.some((value: string) => {
              return value === "dashboard";
            })
          )
          // or another access-restricted path
        ) {
          return NextResponse.redirect(new NextURL("/noaccess", req.nextUrl));
        }
      }
    }

    return NextResponse.next();
  } catch (err) {
    console.log("Something went wrong");
    console.log(err);
    return NextResponse.redirect(new NextURL("/admin", req.nextUrl));
  }
}

export const config = {
  matcher: ["/admin/dashboard/:path*"],
};
