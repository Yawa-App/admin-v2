import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const isPublicPath = path === '/auth/login'
  const isRootPath = path === '/'
  const token = request.cookies.get('token')?.value || ''

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  if (isRootPath && !token) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }
}

// Add the paths that need to be protected
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/auth/login',
    '/',
  ]
} 