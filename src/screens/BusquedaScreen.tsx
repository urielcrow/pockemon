import React from 'react'
import { View, Text ,SafeAreaView, ActivityIndicator, FlatList,StyleSheet} from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import { SearchInput } from '../components/SearchInput'
import { usePokemonSearch } from '../hooks/usePokemonSearch'
import { Pokemon } from '../components/Pokemon';
import { SimplePokemon } from '../interfaces/pokemonsInterfaces';
import { RootStackParams } from '../navigator/StackNavigator'
import { StackScreenProps }  from '@react-navigation/stack';

interface Props extends StackScreenProps <RootStackParams,'BusquedaScreen'>{};

export const BusquedaScreen = ({route,navigation} : Props)=> {

    const {load,data} = route.params;//la carga se realiza en el stack y se carga una sola vez la petición :-/
    //const {data,load} = usePokemonSearch();//la carga se realiza cada que llamo al componente :-(

    const [state, setstate] = React.useState<SimplePokemon[]>([]);

    const callBackTextInput = (word:string)=>{

        if(word===""){
            setstate([]);
            return;
        }
        const coincidencias = data.filter(pokemon=> pokemon.name.includes(word.toLocaleLowerCase()));
        setstate(coincidencias);
    }

    // React.useEffect(() => {
    //     const unsubscribe = navigation.addListener('focus', () => {
    //       console.log('montado')
    //       setstate({
    //           data:ref.current.data,
    //           load:ref.current.load
    //       });
    //     });
    
    //     return()=>{
    //         console.log('desmontado')
    //         unsubscribe;
    //     }
    //   }, [navigation]);
    
    if(load){
        return(
            <View
            style={{
                flex:1,
                justifyContent: 'center',
                alignItems:'center'
            }}>
                <ActivityIndicator 
                    size={50} 
                    color="grey">
                </ActivityIndicator>
            </View>
        )
    }

    return (
        <SafeAreaView style={{height:'100%'}}>
            <View style={{flex:1}}>

                <SearchInput textInput ={(resp)=>callBackTextInput(resp)}/>

                <View style={{alignItems:'center',...StyleSheet.absoluteFillObject}}>
                    <FlatList
                        data={state}
                        renderItem={ ({item}) => <Pokemon  pokemon={item}/> }
                        numColumns={2}
                        keyExtractor ={ item => item.id }
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={(
                            <Text style={{
                                marginTop:60,
                                textAlign:'center',
                                fontSize:21,
                                fontWeight:'bold'
                            }}>
                                coincidencias Pokemon: {  state.length }
                            </Text>
                        )}
                    />
                </View>

            </View>
        </SafeAreaView>
    )
}
