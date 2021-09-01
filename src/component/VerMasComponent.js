import React from 'react'
import { Image, Text, View } from 'react-native'

export const VerMasComponent = ({texto}) => {
    return (
        <View style={{flexDirection:'row',marginBottom:20}} >
            <Image source={require("../assets/arrow.png")} style={{width:20,height:20}} />
            <Text style={{marginLeft:10,fontSize:16,color:'white',fontWeight:'300'}} >{texto}</Text>
        </View>
    )
}
