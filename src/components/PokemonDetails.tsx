import React from 'react'
import { View, Text, ScrollView, StyleSheet, Dimensions, Image } from 'react-native';
import { Pokemon } from '../interfaces/pokemonsInterfaces';

const {height,width} = Dimensions.get('window');

export const PokemonDetails = ({pokemon} : {pokemon : Pokemon}) => {
    return (
        <ScrollView
            style={{
                ...StyleSheet.absoluteFillObject,
            }}
        >


            <View style={{
                marginHorizontal:20,
                marginTop: height/2 + 20,
            }}>
               <Text style={{fontSize:20,fontWeight:'bold'}}>
                    Types
               </Text>
               <View style={{flexDirection:'row'}}>
                    {
                        pokemon.types.map( pokemon => (
                            <Text key={pokemon.slot} style={{fontSize:17, marginRight:10}}>{pokemon.type.name}</Text>
                        ))
                    }
               </View>
            </View>




            <View style={{
                 marginHorizontal:20,
                marginTop: 20,
            }}>
               <Text style={{fontSize:20,fontWeight:'bold'}}>
                    Peso
               </Text>
               <Text style={{fontSize:18}}>
                    {pokemon.weight} lbs.
               </Text>

            </View>





            <View style={{
                 marginHorizontal:20,
                marginTop: 20,
            }}>
               <Text style={{fontSize:20,fontWeight:'bold'}}>
                    Sprites
               </Text>

            </View>


            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <Image 
                    source={{
                        uri:  pokemon.sprites.front_default
                    }}
                    style={{height:100,width:100}}
                />
                 <Image 
                    source={{
                        uri:  pokemon.sprites.back_default
                    }}
                    style={{height:100,width:100}}
                />
                 <Image 
                    source={{
                        uri:  pokemon.sprites.front_shiny
                    }}
                    style={{height:100,width:100}}
                />
                 <Image 
                    source={{
                        uri:  pokemon.sprites.back_shiny
                    }}
                    style={{height:100,width:100}}
                />
            </ScrollView>




            <View style={{
                marginHorizontal:20,
                marginTop: 20,
            }}>
               <Text style={{fontSize:20,fontWeight:'bold'}}>
                    Habilidades
               </Text>
               <View style={{flexDirection:'row'}}>
                    {
                        pokemon.abilities.map( pokemon => (
                            <Text key={pokemon.slot} style={{fontSize:17, marginRight:10}}>{pokemon.ability.name}</Text>
                        ))
                    }
               </View>
            </View>


            <View style={{
                marginHorizontal:20,
                marginTop: 20,
            }}>
               <Text style={{fontSize:20,fontWeight:'bold'}}>
                    Movimientos
               </Text>
               <View
                   style={{
                       flexDirection:'row',
                       flexWrap:'wrap'
                   }}
               >
                    {
                        pokemon.moves.map( pokemon => (
                            <Text key={pokemon.move.name} style={{fontSize:17, marginRight:10}}>{pokemon.move.name}</Text>
                        ))
                    }
               </View>
            </View>


            
            <View style={{
                marginHorizontal:20,
                marginTop: 20,
            }}>
               <Text style={{fontSize:20,fontWeight:'bold'}}>
                    Stats
               </Text>
               <View
                style={{flexDirection:'row',flexWrap:'wrap'}}
               >
                    {
                        pokemon.stats.map( pokemon => (
                            <Text key={pokemon.stat.name} style={{fontSize:17, marginRight:10}}>{pokemon.stat.name}</Text>
                        ))
                    }
               </View>
            </View>


            <View
            style={{
                marginBottom:80,
                alignItems:'center'
            }}>
                <Image 
                    source={{
                        uri:  pokemon.sprites.front_default
                    }}
                    style={{height:100,width:100}}
                />
            </View>




        </ScrollView>
    )
}
