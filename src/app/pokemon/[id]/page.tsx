"use client"
import React, {useEffect, useState} from 'react';
import Image from "next/image";


type Props = {
    params: {
        id: number
    }
}
const Page = ({params}: Props) => {
    const [pokemon, setPokemon] = useState({})
    const [showShiny, setShowShiny] = useState(false)
    useEffect(() => {
        fetch(`/api/pokemons/${params.id}`).then(res => res.json()).then(data => setPokemon(data))
    }, [])
    return (
        <div className="bg-[#222323] min-h-[95vh] h-fit w-full p-5 rounded-2xl flex flex-col">
            <div className="flex flex-row justify-between h-full">
                <div className="flex flex-row w-1/2">
                    <div onClick={() => {
                        setShowShiny(!showShiny)
                    }} className="w-[15vw] h-[25vh] cursor-pointer">
                        <Image className="aspect-square object-contain"
                               width={400}
                               height={400}
                            /*@ts-ignore next-line*/
                               src={showShiny ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png` : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                               alt={"img"}/>
                    </div>
                    <div className="flex justify-center items-center  h-[25vh]">
                        {/*@ts-ignore next-line*/}
                        <h2 className="text-6xl">{pokemon.name?.charAt(0).toUpperCase() + pokemon.name?.slice(1)}</h2>
                    </div>
                </div>
                <div className="flex flex-col w-1/2 mt-16 items-center">
                    <div className="mb-5">
                        <h2 className="text-5xl">Base stats</h2>
                    </div>
                    <div className="flex-col flex">
                        {/*@ts-ignore*/}
                        {pokemon.pokemon_v2_pokemonstat?.map((stat, i) => {
                            return <div className="mt-3 text-xl">{stat.pokemon_v2_stat.name.charAt(0).toUpperCase() +
                                stat.pokemon_v2_stat.name.slice(1).replaceAll("-", " ") + ": " + stat.base_stat + " pts"}
                            </div>
                        })}
                    </div>
                </div>
            </div>
            <>
                <div className="text-2xl flex">
                    <h2 className="mr-5">Types :</h2>
                    {/*@ts-ignore next-line*/}
                    {pokemon.pokemon_v2_pokemontype?.map((type, i) =>
                        /*@ts-ignore next-line*/
                        type.pokemon_v2_type.name.charAt(0).toUpperCase() + type.pokemon_v2_type.name.slice(1) + (i == pokemon.pokemon_v2_pokemontype.length - 1 ? "" : ", ")
                    )}
                </div>
                <div className="text-2xl mt-5 flex">
                    <h2 className="mr-5">Talents :</h2>
                    {/*@ts-ignore next-line*/}
                    {pokemon.pokemon_v2_pokemonability?.map((type, i) =>
                        /*@ts-ignore next-line*/
                        type.pokemon_v2_ability.name.charAt(0).toUpperCase() + type.pokemon_v2_ability.name.slice(1) + (i == pokemon.pokemon_v2_pokemontype.length - 1 ? "" : ", ")
                    )}
                </div>
                <div className="text-2xl mt-5 flex">
                    <h2 className="mr-5">Min level you can encounter :</h2>
                    {/*@ts-ignore next-line*/}
                    {Math.min.apply(Math, pokemon.pokemon_v2_encounter?.map(v => v.min_level))}

                </div>
                <div className="text-2xl mt-5 flex">
                    <h2 className="mr-5">Max level you can encounter :</h2>
                    {/*@ts-ignore next-line*/}
                    {Math.max.apply(Math, pokemon.pokemon_v2_encounter?.map(v => v.max_level))}

                </div>
            </>
            <div className="mt-20">
                <div className="flex w-full justify-center h-[10vh] items-center text-5xl">
                    <h2>EVOLUTIONS</h2>
                </div>
                <div className="flex w-full justify-center h-[10vh] items-center text-3xl mt-10">
                    <h2>COMING SOON</h2>
                </div>
            </div>
        </div>
    );
};

export default Page;
