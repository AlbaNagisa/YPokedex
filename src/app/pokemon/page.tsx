"use client"
import {useEffect, useState} from "react";
import PokemonCard from "@/components/PokemonCard";

export default function Page() {
    const [pokemons, setPokemons] = useState([])
    const [hasNextPage, setHasNextPage] = useState(false)
    const [page, setPage] = useState(0)
    const [maxPage, setMaxPage] = useState(0)
    const [pokemonsPerPage, setPokemonsPerPage] = useState("100")

    useEffect(() => {

        fetch(`/api/pokemons?page=${page}&elemPerPage=${pokemonsPerPage}`).then((res) => res.json()).then((data) => {
            if (page > data.page) {
                setPage(data.page)
                return;
            }
            setPokemons(data.data)
            setMaxPage(data.page)
            setHasNextPage(data.hasNext)
        })
    }, [page, pokemonsPerPage])

    return <div className="flex h-fit flex-col items-center">
        <div className="flex flex-row justify-center mb-10">
            <div className="mr-5">
                Number of pokemon per page:
            </div>

            <select defaultValue={100} onChange={(e) => setPokemonsPerPage(e.target.value)} className="text-black">
                <option value={10} label="10"/>
                <option value={25} label="25"/>
                <option value={50} label="50"/>
                <option value={100} label="100"/>
            </select>
        </div>
        <div className="flex flex-row w-[25%] justify-between">
            <button onClick={() => {
                if (page > 0) {
                    setPage(page - 1)
                }
            }}>Previous
            </button>
            <div>{page + 1}/{maxPage + 1}</div>
            <button onClick={() => {
                console.log(hasNextPage)

                if (hasNextPage) {
                    setPage(page + 1)
                }
            }}>Next
            </button>
        </div>
        <div className="flex h-fit flex-row flex-wrap justify-evenly">
            {/*@ts-ignore next-line*/}
            {pokemons && pokemons.map((pokemon: any, i: number) => <PokemonCard key={i} pokemon={pokemon}/>)}
        </div>
    </div>;
}
