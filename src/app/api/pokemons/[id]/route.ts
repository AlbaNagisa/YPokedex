import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


// Pour declencher cette route tu vas a /api/pokemons/1 par exemple pour chopper bulbizarre tu dois choper le pokemon en fonction de l'id qui est dans le console.log
export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const url = new URL(req.url)
    console.log(params.id)
    const pokemonId = params.id !== null && params.id !== undefined ? parseInt(params.id) : null

    if (pokemonId !== null) {
        return NextResponse.json(await getPokemonById(pokemonId))
    } else {
        return NextResponse.json({ error: 'Invalid Pokemon ID' })
    }
}

async function getPokemonById(id: number) {
    return await prisma.pokemon_v2_pokemon.findFirst({
        where: {
            id: id
        }
    })
}

// export default function SearchBar() {
//     const searchParams = useSearchParams()

//     const search = searchParams.get('page')

//     pagination(5, parseInt(search), "pokemon_v2_pokemon")

//     // URL -> `/dashboard?search=my-project`
//     // `search` -> 'my-project'
//     return <>Search: { search } </>
// }

