import { NextResponse } from 'next/server'
import { auth } from './lib/auth' // Ensure this path is correct
import { headers } from 'next/headers'

// In Next.js 16, the function name must be "proxy" instead of "middleware"
export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  const { pathname } = request.nextUrl

  // Redirect if not logged in
  if (!session) {
    const loginUrl = new URL('/login', request.url)
    
    // Pass the original target path for dynamic redirection after login
    loginUrl.searchParams.set('redirectAfterLogin', pathname)
    
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

// Protected routes matching your requirements
export const config = {
  matcher: [
    '/products/:id*',      // Product Details Page (🔒 Protected)
    '/profile',            // My Profile Page (🔒 Protected)
    '/profile/edit-page',  // Update Information Feature (🔒 Protected)
  ],
}
