import { NextResponse } from 'next/server'
import { auth } from './lib/auth' // Ensure this path is correct
import { headers } from 'next/headers'

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  const { pathname } = request.nextUrl

  if (!session) {
    const loginUrl = new URL('/login', request.url)
    
    loginUrl.searchParams.set('redirectAfterLogin', pathname)
    
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/products/:id*',      
    '/profile',            
    '/profile/edit-page',
  ],
}
