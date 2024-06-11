import { profile } from "console";
import { NextResponse, type NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = {
//   matcher: "/profile",
// };
// if user navigate to localhost:3000/profile, he will be redirect automatically to the
// home page: localhost:3000

//-------------------- conditional statement -------------------------

// export function middleware(request: NextRequest) {
//     if (request.nextUrl.pathname === "/profile") {
//         return NextResponse.redirect(new URL("/hello", request.url));
//     }
//   }
// if user navigate to localhost:3000/profile, he will be redirect automatically to
// hello page: localhost:3000/hello

//-------------------- URL rewrite -------------------------

// export function middleware(request: NextRequest) {
//     if (request.nextUrl.pathname === "/profile") {
//         return NextResponse.rewrite(new URL("/hello", request.url));
//     }
//   }

// URL rewrite a useful tool for legacy URL support or SEO optimization
// if user navigate to localhost:3000/profile, url remains the same, but
// the response content changes to hello.ts page

//-------------- using cookie and header in middleware ---------------

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const themePreference = request.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  } // if the user doesn't set his device theme, this request makes his theme to dark.

  response.headers.set("custom-header", "custom-value");
  
  return response;
}
