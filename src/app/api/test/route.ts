
import { pagination } from "@/lib/pagination";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'


export const GET = async (req: NextRequest, res: NextResponse) => {
    const url = new URL(req.url)

    const pageString = url.searchParams.get("page")
    const reqPage = parseInt(pageString ? pageString : "0")

    const elemPerPage = url.searchParams.get("elemPerPage")
    const reqElemPerPage = parseInt(elemPerPage ? elemPerPage : "5")

    return NextResponse.json(await pagination(reqElemPerPage, reqPage, "pokemon_v2_pokemon"))
}


// export default function SearchBar() {
//     const searchParams = useSearchParams()

//     const search = searchParams.get('page')

//     pagination(5, parseInt(search), "pokemon_v2_pokemon")

//     // URL -> `/dashboard?search=my-project`
//     // `search` -> 'my-project'
//     return <>Search: { search } </>
// }

