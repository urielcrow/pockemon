import React from 'react';
import { Pokemon } from '../interfaces/pokemonsInterfaces';

interface DataPokemon{
    load:boolean,
    data:Pokemon
}

export const usePokemon = (id:string)=>{

    const [state, setstate] = React.useState<DataPokemon>({
        load:true,
        data:{} as Pokemon
    });

    const obtenerDataPokemon = async()=>{
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const POKEMON : Pokemon = await resp.json();
        setstate({
            load:false,
            data : POKEMON
        })
    }

    React.useEffect(() => {
      obtenerDataPokemon();
    }, [])

    return{
        ...state
    }
}