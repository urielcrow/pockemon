import React from 'react';
import { Text, View, Image,SafeAreaView, ActivityIndicator,FlatList} from 'react-native';
import { Pokemon } from '../components/Pokemon';
import { usePokemonPagination } from '../hooks/usePokemonPagination';
import { GLOBALS } from '../styles/globals';

export const HomeScreen = ()=> {

    const { load,data,loadPokemons } = usePokemonPagination();

    return (
        <SafeAreaView style={{height:'100%'}}>
           
                <Image 
                    source={require('../assets/pokebola.png')}
                    style={{width:300,height: 300,position:'absolute',top:-100,right:-100,opacity:.2}}
                />

                {
                    load ? 

                    <View style={{height:150}}>
                        <ActivityIndicator size={20}/>
                    </View> :

                   <View style={{alignItems:'center'}}>
                        <FlatList
                            data={data}
                            renderItem={ ({item}) => <Pokemon  pokemon={item}/> }
                            numColumns={2}
                            keyExtractor ={ item => item.id }
                            onEndReached = {loadPokemons}
                            onEndReachedThreshold = {0.8}
                            ListHeaderComponent={(
                                <Text style={{
                                    ...GLOBALS.title,
                                    ...GLOBALS.globalMargin
                                }}>
                                    Home Screen
                                </Text>
                            )}
                            showsVerticalScrollIndicator={false}
                            ListFooterComponent={()=>(
                                <View style={{height:150}}>
                                    <ActivityIndicator size={20}/>
                                </View>
                            )}
                        />
                    </View>

                }
        </SafeAreaView>
    )
}

