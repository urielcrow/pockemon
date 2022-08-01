import React from 'react';
import { Pokemons,  SimplePokemon } from '../interfaces/pokemonsInterfaces';

interface Data {
    load : boolean,
    data : SimplePokemon[]
}

export const usePokemonSearch = ()=> {


    console.log('useSearch')
    

    const [state, setstate] = React.useState<Data>({
        load:true,
        data:[]
    });

    const loadPokemons = async()=>{
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1200');
        const POKEMONS : Pokemons = await resp.json();
      
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
            data 
        })
    };

    React.useEffect(() => {
        loadPokemons();
    }, [])

    return {
        ...state,
    }
}
