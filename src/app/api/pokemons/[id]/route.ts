import {NextRequest, NextResponse} from "next/server";


// Pour declencher cette route tu vas a /api/pokemons/1 par exemple pour chopper bulbizarre tu dois choper le pokemon en fonction de l'id qui est dans le console.log
export const GET = async (req: NextRequest, {params}: { params: { id: string } }) => {
    console.log(params.id)
    return NextResponse.json({monPokemon: {}})

}


// export default function SearchBar() {
//     const searchParams = useSearchParams()

//     const search = searchParams.get('page')

//     pagination(5, parseInt(search), "pokemon_v2_pokemon")

//     // URL -> `/dashboard?search=my-project`
//     // `search` -> 'my-project'
//     return <>Search: { search } </>
// }

