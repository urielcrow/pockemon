import React from 'react';


export const  useDebonce = ( input : string )=>{

    const[value,setValue] = React.useState('');

    React.useEffect(()=>{
        const timer = setTimeout(()=>{
            setValue(input)
        },500);
        
        return ()=>{
            clearInterval(timer);
        }

    },[input])

    return value;
}