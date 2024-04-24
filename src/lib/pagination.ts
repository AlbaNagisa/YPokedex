import { useState } from "react";
import prisma from "@/lib/prisma";

/**
 * @param n number d'élément par page   
 */
export async function pagination(n: number, page: number, tableName: any) {
    // @ts-ignore
    const pageN = Math.trunc((await prisma[tableName].count()) / n)
    // @ts-ignore
    const data = await prisma[tableName].findMany({
        skip: page * n,
        take: n
    })

    console.log(data)

    return { hasNext: pageN > page, data }
}
/* 
    {
        hasNext: true or false
        data: [tout les pokemon],
        pageN: 0
    }
*/