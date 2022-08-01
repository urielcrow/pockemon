import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useDebonce } from '../hooks/useDebonce';

export const SearchInput = ({textInput} : {textInput : (value:string)=>void} )=> {

    const [state, setstate] = React.useState('');
    const value = useDebonce(state);
    
    React.useEffect(() => {
        textInput(value);
    }, [value])

    return (
        <View style = {styles.container}>
            <View style={styles.background}>
                <TextInput
                    placeholder="Nombre o ID..."
                    style={styles.textInput}
                    autoCapitalize="none"
                    autoCorrect={false}
                    // value={state}
                    onChangeText={(text)=>setstate(text)}
                />
                 <FontAwesome name="search" color="gray" size={35}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
       marginVertical:10,
       zIndex:9999,
       position:'absolute',
       width:'100%'

    },
    background:{
        backgroundColor:'#F3F1F3',
        borderRadius:50,
        height:40,
        paddingHorizontal:20,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    textInput:{
        flex:1,
        fontSize:18,
    }
})
