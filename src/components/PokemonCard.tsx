"use client"
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Tilt from 'react-parallax-tilt';

type Props = {
    pokemon: {
        id: number,
        name: string,
    }
}
const PokemonCard = ({pokemon}: Props) => {
    return (
        <Tilt className="m-5 bg-[#222323] flex w-[10vw] h-[25vh] rounded-xl flex-col">
            <Link href={"/pokemon/" + pokemon.id}
                  className="bg-[#222323] flex w-[10vw] min-h-[25vh] h-fit rounded-xl flex-col">
                <div className="flex w-full rounded-xl h-[70%] relative">
                    <div className="absolute mt-2 ml-2 text-xl">{pokemon.id}</div>
                    <Image className="aspect-square object-contain" fill
                           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                           src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                           alt={"img"}/>
                </div>
                <div className="bg-[#FFFFFF10] min-h-[30%] h-fit w-full rounded-b-xl flex justify-center items-center">
                    <h2 className="text-4xl flex-wrap flex break-all">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                </div>
            </Link>
        </Tilt>
    );
};

export default PokemonCard;
