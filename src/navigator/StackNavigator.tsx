import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import BotonesPersonalizados from '../components/BotonesPersonalizados';
import { HomeScreen } from '../screens/HomeScreen';
import { PockemonScreen } from '../screens/PockemonScreen';
import { BusquedaScreen } from '../screens/BusquedaScreen';
import { SimplePokemon } from '../interfaces/pokemonsInterfaces';
import { usePokemonSearch } from '../hooks/usePokemonSearch'



export type RootStackParams = {
    HomeScreen:undefined,
    BusquedaScreen:{ data: SimplePokemon[] , load:boolean},//Solución mientras encuentro como dejar keep alive el componente
    PockemonScreen: { pokemon:SimplePokemon, color: string }
}


const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {

    const {data,load} = usePokemonSearch();

    return (
            
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown:false,
                        cardStyle: {
                            backgroundColor: 'white'
                        }
                    }}
                >
                    <Stack.Screen name="HomeScreen" component={HomeScreen} />
                    <Stack.Screen name="BusquedaScreen" component={BusquedaScreen}/> 
                    <Stack.Screen name="PockemonScreen" component={PockemonScreen} />

                </Stack.Navigator>

                <BotonesPersonalizados data={data} load={load}/>
            
            </NavigationContainer>
           
    )
}