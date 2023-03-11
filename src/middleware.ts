import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { ROUTES_LOGIN } from '@helpers/constants';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  if(token && ROUTES_LOGIN.includes(request.nextUrl.pathname)){
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  if(!token){
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next()
}

// Routes protected
export const config = {
  matcher: [...ROUTES_LOGIN, '/dashboard', '/dashboard/:path*'],
}
