import React from 'react';
import { Pokemons, SimplePokemon } from '../interfaces/pokemonsInterfaces';

interface Data {
    load : boolean,
    data : SimplePokemon[]
}

export const usePokemonPagination = ()=> {


    console.log('usePagination')

    const [state, setstate] = React.useState<Data>({
        load:true,
        data:[]
    });

    const nextPageUrl = React.useRef('https://pokeapi.co/api/v2/pokemon?limit=40'); 


    const loadPokemons = async()=>{
        const resp = await fetch(nextPageUrl.current);
        const POKEMONS : Pokemons = await resp.json();
        nextPageUrl.current = POKEMONS.next;
        
        const data : SimplePokemon[] = POKEMONS.results.map( ({name,url}) =>{
            const id = url.split('/')[6];
            return{
                name,
                img:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
                id
            }
        });

        setstate({
            load:false,
            data : [
                ...state.data,
                ...data
            ]

        })
    };

    React.useEffect(() => {
        loadPokemons();
    }, [])

    return {
        ...state,
        loadPokemons
    }
}
