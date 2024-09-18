import { type NextRequest, NextResponse } from 'next/server'

export function GET(request: NextRequest) {
	return NextResponse.redirect(new URL('/destination', request.url))
}
