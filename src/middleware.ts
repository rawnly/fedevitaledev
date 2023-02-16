import { handlePaths } from "next-wayfinder";
import { NextResponse } from "next/server";

export const config = {
  /*
   * Match all request paths except for the ones starting with:
   * - api (API routes)
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - favicon.ico (favicon file)
   */
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)", "/"],
};

export default handlePaths([
  // on blog.fedevitale.dev
  // host contents from `/pages/blog`
  {
    domain: /^blog/,
    handler: [
      {
        matcher: "/:path*",
        handler: (req) => {
          const host = req.headers.get("HOST") ?? req.nextUrl.host;
          let path = req.params.path;
          path = Array.isArray(path) ? path.join("/") : path;

          const base = host.replace("blog.", "");
          const protocol = req.nextUrl.protocol;

          return NextResponse.redirect(
            new URL(
              `/${path ?? ""}`,
              new URL({
                ...req.nextUrl.clone(),
                protocol,
                host: base,
                pathname: path ?? "/",
              })
            )
          );
        },
      },
    ],
  },
]);
