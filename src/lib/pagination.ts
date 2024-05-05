import {useState} from "react";
import prisma from "@/lib/prisma";

/**
 * @param n number d'élément par page
 * @param include  {
 pokemon_v2_pokemonability: {
 include: {
 pokemon_v2_ability: true
 }
 },
 pokemon_v2_pokemonstat: {
 include: {
 pokemon_v2_stat: true
 }
 }
 }
 */
export async function pagination(n: number, page: number, tableName: any, include: any) {
    // @ts-ignore
    const pageN = Math.trunc((await prisma.pokemon_v2_pokemon.count()) / n)
    // @ts-ignore
    const data = await prisma.pokemon_v2_pokemon.findMany({
        skip: page * n,
        take: n,
        include
    })

    console.log(page)

    return {hasNext: pageN > page, page: pageN, data}
}

/*
    {
        hasNext: true or false
        data: [tout les pokemon],
        pageN: 0
    }
*/