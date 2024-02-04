import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath =
    path === "/login" || path === "/register" || path === "/";
  const token = request.cookies.get("AccessToken")?.value || "";
  // console.log(token);

  if (isPublicPath && token)
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl));

  if (!isPublicPath && !token)
    return NextResponse.redirect(new URL("/login", request.nextUrl));

  // return NextResponse.redirect(new URL("/home", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/login", "/register", "/dashboard", "/dashboard/:path*"],
};

// multer middleware
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage: storage });
