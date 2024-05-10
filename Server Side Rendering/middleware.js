import {NextResponse} from "next/server";

export default async function middleware(req) {
    console.log(req);
    const { pathname } = req.nextUrl


    console.log(pathname)

    if (pathname.startsWith('/render-slug/')) {

        // middleware should force the URI to lowercase

        return NextResponse.rewrite(
            new URL(`${req.nextUrl.pathname.toLowerCase()}/`, req.nextUrl)
        )

    }
}