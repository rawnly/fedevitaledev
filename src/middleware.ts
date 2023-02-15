import { handlePaths } from "next-wayfinder";
import { NextResponse } from "next/server";

export default handlePaths([
  // on blog.fedevitale.dev
  // host contents from `/pages/blog`
  {
    domain: /^blog/,
    handler: [
      {
        matcher: "/:path*",
        handler: (req) => {
          let path = req.params.path;
          path = Array.isArray(path) ? path.join("/") : path;
          return NextResponse.rewrite(new URL(`/blog/${path}`, req.url));
        },
      },
    ],
  },
]);
