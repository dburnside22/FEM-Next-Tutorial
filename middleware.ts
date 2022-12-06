import { NextResponse } from "next/server";

const signedinPages = ["/", "/playlist", "/library"];

export default function middleware(req) {
  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    console.log("match", req.cookies.get("TRAK_ACCESS_TOKEN"));
    const url = req.nextUrl.clone();
    const token = req.cookies.get("TRAK_ACCESS_TOKEN");
    if (!token) {
      url.pathname = "/signin";
      return NextResponse.redirect(url);
    }
  }
}
