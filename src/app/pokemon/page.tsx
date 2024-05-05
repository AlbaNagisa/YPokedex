"use client"
import {useEffect, useState} from "react";
import PokemonCard from "@/components/PokemonCard";

export default function Page() {
    const [pokemons, setPokemons] = useState([])
    const [hasNextPage, setHasNextPage] = useState(false)
    const [page, setPage] = useState(0)
    const [maxPage, setMaxPage] = useState(0)

    useEffect(() => {
        fetch(`/api/pokemons?page=${page}`).then((res) => res.json()).then((data) => {
            setPokemons(data.data)
            setMaxPage(data.page)
            setHasNextPage(data.hasNext)
        })
    }, [page])

    return <div className="flex h-fit flex-col justify-evenly">
        <div className="flex flex-row justify-evenly">
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
