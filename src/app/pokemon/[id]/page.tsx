"use client"
import React, {useEffect} from 'react';


type Props = {
    params: {
        id: number
    }
}
const Page = ({params}: Props) => {
    useEffect(() => {
        fetch(`/api/pokemons/${params.id}`)
    }, [])
    return (
        <div>
        </div>
    );
};

export default Page;
