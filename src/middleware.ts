import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { ROUTES_LOGIN } from '@helpers/constants';


const matcherRoutes = [...ROUTES_LOGIN, '/dashboard', '/dashboard/:path*']

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if(!token && request.nextUrl.pathname === '/'){ // Validation to allow logout
    return NextResponse.next()
  }
  if(token && ROUTES_LOGIN.includes(request.nextUrl.pathname)){ // Validation when you are already logged in and try to go to the login page.
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  if(!token && matcherRoutes.includes(request.nextUrl.pathname)){
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next()
}

// Routes protected
export const config = {
  matcher: matcherRoutes,
}
