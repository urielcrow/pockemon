import React from 'react';
import { Text, Image, TouchableOpacity, View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import ImageColors from 'react-native-image-colors';
import { SimplePokemon } from '../interfaces/pokemonsInterfaces';


export type PokemonParams = {
    PockemonScreen : { pokemon:SimplePokemon, color: string }
};


const {width,height} = Dimensions.get('window');

export const Pokemon = ( { pokemon }:{ pokemon : SimplePokemon })=> {

    const [bgColor, setBgColor] = React.useState('gray');
    const isMounted = React.useRef(true);

    const navigation = useNavigation<StackNavigationProp<PokemonParams>>();

    React.useEffect(() => {
        ImageColors.getColors(pokemon.img,{fallback:'gray'})
        .then( colors =>{

            if(!isMounted.current)
                return;

            if(colors.platform === "android" )
                setBgColor( colors.dominant || 'gray')
            else if(colors.platform === "ios")
                setBgColor( colors.background || 'gray')
        }).catch(console.log)

        return ()=>{
            isMounted.current = false;
        }
        
    }, []);


    return (

        <TouchableOpacity 
            onPress={()=> navigation.navigate(
                'PockemonScreen', 
                { pokemon, color: bgColor } 
            )} 
            key={pokemon.id} 
            activeOpacity={0.7}
        >
            <View style={{
                marginHorizontal:10,
                backgroundColor:bgColor,
                height:120,
                width: width/2-30 ,
                marginBottom: 25,
                borderRadius:4,
                padding:5,

                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                
            }}>

                <Image 
                    source={require('../assets/pokebola-blanca.png')}
                    style={{width:100,height: 100,top:-3,right:-3,opacity:.5,position:'absolute'}}
                />

                <Image 
                    source={{
                        uri: pokemon.img,
                    }}
                    style={{width:100,height: 100,position:'absolute',right:-15,bottom:-15}}
                />

                <View>
                    <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>
                        {pokemon.name}
                        {'\n#' + pokemon.id}
                    </Text>
                </View>

            </View>
            
        </TouchableOpacity>
    )
}
