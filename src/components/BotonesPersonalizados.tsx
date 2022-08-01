import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SimplePokemon } from '../interfaces/pokemonsInterfaces';



export type ScreenParams = {
    HomeScreen : undefined,
    BusquedaScreen : { data:SimplePokemon[], load: boolean }
};

export default function BotonesPersonalizados({data,load} : {data:SimplePokemon[],load:boolean}) {

     const navigation = useNavigation<StackNavigationProp<ScreenParams>>();

    return (
        <View>
            <View style={{
                backgroundColor:'rgba(0,0,0,0.3)',
                height:70,
                position:'absolute',
                bottom:0,
                left:0,
                right:0,
                justifyContent:'space-between',
                flexDirection:'row',
                alignItems:'center',
                paddingHorizontal:50,

                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.20,
                shadowRadius: 1.41,
                
                elevation: 2,
            }}
            >
                <TouchableOpacity
                        activeOpacity={.7}
                        onPress={()=>navigation.navigate('HomeScreen')}
                >
                        <FontAwesome name="list" color="white" size={35}/>
                        <Text style={{color:'white',fontWeight:'bold'}}>Lista</Text>
                </TouchableOpacity>

                <TouchableOpacity
                        activeOpacity={.7}
                        onPress={()=>navigation.navigate('BusquedaScreen',{data,load})}
                >
                        <FontAwesome name="search" color="white" size={35}/>
                        <Text style={{color:'white',fontWeight:'bold'}}>Buscar</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    )
}
