// import { NextResponse } from "next/server";

// export function middleware(request) {
//   console.log(request);

//   return NextResponse.redirect(new URL("/about", request.url));
// }

export { auth as middleware } from "./app/_lib/auth";

export const config = {
  matcher: ["/account/:path*"],
};
