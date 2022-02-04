import { NextResponse } from "next/server";
import routes from "../routes";

export function middleware(req) {
  let { pathname } = req.nextUrl
  if (routes[pathname]) {
    return NextResponse.redirect(routes[req.nextUrl.pathname])
  }
  else{
    const url = req.nextUrl.clone()
    url.pathname = '/'
    return NextResponse.redirect(url)
  }
}
