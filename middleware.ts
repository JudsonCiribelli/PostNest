// middleware.ts
import { NextResponse } from "next/server";

import { auth } from "@/lib/auth";

export async function middleware(request: Request) {
  const session = await auth();

  if (!session) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Protege essas rotas específicas:
     */
    "/dashboard/:path*",
    "/admin/:path*",
  ],
};
