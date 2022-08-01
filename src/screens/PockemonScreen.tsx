import React from 'react'
import { Dimensions,Text, View , TouchableOpacity, Image, ActivityIndicator} from 'react-native'
import { StackScreenProps }  from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetails } from '../components/PokemonDetails';


const {height,width} = Dimensions.get('window');

interface Props extends StackScreenProps <RootStackParams,'PockemonScreen'>{};

export const PockemonScreen = ( {navigation,route} : Props )=> {

   const {color,pokemon} = route.params;
   const {top} = useSafeAreaInsets();//similar a safeAreaView
   const {data,load} = usePokemon(pokemon.id);

    return (
        <View style={{flex:1}}>
            <View 
                style={{
                    height:height/2,
                    backgroundColor:color,
                    zIndex: 999,
                    alignItems:'center',
                    borderBottomEndRadius: 1000,
                    borderBottomStartRadius: 1000
                }}
            >
               <TouchableOpacity
                    activeOpacity={.7}
                    style={{position:'absolute', left:10, top:top +10}}
                    onPress={()=>navigation.pop()}
               >
                    <FontAwesome name="arrow-left" color="white" size={35}/>
               </TouchableOpacity>

                <Text
                    style={{
                        color:'white',
                        fontSize:40,
                        top:top + 10,
                        right: 10,
                        position:'absolute'
                    }}
                >
                     #{pokemon.id}
               </Text>

               <Text
                style={{
                    color:'white',
                    fontSize:40,
                    top:top + 40,
                    // alignSelf:'flex-start'
                }}
               >
                   {pokemon.name}
               </Text>

               <Image 
                    source={
                        require('../assets/pokebola-blanca.png')
                    }
                    style={{
                        width:width/1.8,
                        height:width/1.8,
                        opacity: 0.4
                    }}
               />
               <Image 
                source={{
                    uri: pokemon.img
                }}
                style={{
                    width:width/1.3,
                    height:width/1.3,
                    position:'absolute',
                    top:top + 70,
                }}
               />

            </View>

            {
                load ? 

                <View style={{flex:1}}>
                    <ActivityIndicator 
                        color={color}
                        size={50}
                        style={{
                            flex:1,
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                    />
                </View> :

                
                <PokemonDetails pokemon={data}/>            
                

            }
        </View>
    )
}

