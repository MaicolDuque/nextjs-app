import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  if(!token){
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next()
}

// Routes protected
export const config = {
  matcher: ['/dashboard', '/dashboard/:path*'],
}
