import prisma from "@/lib/prisma";
import {NextRequest, NextResponse} from "next/server";


// Pour declencher cette route tu vas a /api/pokemons/1 par exemple pour chopper bulbizarre tu dois choper le pokemon en fonction de l'id qui est dans le console.log
export const GET = async (req: NextRequest, {params}: { params: { id: string } }) => {
    const url = new URL(req.url)
    console.log(params.id)
    const pokemonId = params.id !== null && params.id !== undefined ? parseInt(params.id) : null

    if (pokemonId !== null) {
        return NextResponse.json(await getPokemonById(pokemonId))
    } else {
        return NextResponse.json({error: 'Invalid Pokemon ID'})
    }
}

function getPokemonById(id: number) {
    return prisma.pokemon_v2_pokemon.findFirst({
        where: {
            id: id
        },
        include: {
            pokemon_v2_pokemonform: {
                include: {
                    pokemon_v2_pokemonformgeneration: {
                        include: {
                            pokemon_v2_generation: true
                        }
                    }
                }
            },
            pokemon_v2_pokemonstat: {
                include: {
                    pokemon_v2_stat: true
                }
            },

            pokemon_v2_pokemonability: {
                include: {
                    pokemon_v2_ability: true

                }
            },

            pokemon_v2_pokemonmove: {
                where: {
                    version_group_id: 1
                },
                include: {
                    pokemon_v2_move: true

                }
            },
            pokemon_v2_pokemontype: {
                include: {
                    pokemon_v2_type: true,
                }
            },
            pokemon_v2_encounter: true
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

