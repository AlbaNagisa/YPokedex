"use client"
import Image from "next/image";
import Tilt from 'react-parallax-tilt';
import Link from "next/link";
import {useEffect, useState} from "react";

export default function Page() {
    const [pokemons, setPokemons] = useState([])
    const [page, setPage] = useState(0)

    useEffect(() => {
        fetch(`/api/pokemons?page=${page}`).then((res) => res.json()).then((data) => setPokemons(data))
    }, [])

    return <div className="flex h-fit flex-row flex-wrap">
        {/*container*/}
        //@ts-ignore next-line
        {pokemons ?? pokemons?.data.map((pokemon) => {

        })}
        <Tilt className="bg-[#222323] flex w-[10vw] h-[25vh] rounded-xl flex-col">
            <Link href="#" className="bg-[#222323] flex w-[10vw] h-[25vh] rounded-xl flex-col">
                <div className="flex w-full rounded-xl h-[70%] relative">
                    <Image className="aspect-square" fill objectFit="contain"
                           src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"}
                           alt={"img"}/>
                </div>
                <div className="bg-[#FFFFFF10] h-[30%] w-full rounded-b-xl flex justify-center items-center">
                    <h2 className="text-4xl">Ditto</h2>
                </div>
            </Link>
        </Tilt>
    </div>;
}
