import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const response = NextResponse.next()
  
  // Check if the i18n_redirected cookie exists and delete it
  if (request.cookies.has('i18n_redirected')) {
    // Attempt to delete with specific options to handle cross-site contexts
    response.cookies.set('i18n_redirected', '', { 
      maxAge: 0,
      path: '/',
      sameSite: 'none',
      secure: true 
    })
  }
  
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
