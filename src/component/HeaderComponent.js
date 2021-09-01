import React from 'react'
import { Text, View , Image } from 'react-native'
import { styles } from '../styles/GlobalStyles'

export const HeaderComponent = ({titulo1,titlo2}) => {
    return (
        <>       
            <Image source={require('../assets/arrow_down.png')} style={{transform:[{rotate:'90deg'}],width:30,height:30,marginLeft:'5%',marginTop:'2.5%'}} /> 
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <Text style={[styles.title,styles.primaryTitle]} >{titulo1} </Text>
                <Text style={[styles.title,styles.secondTitle]} >{titlo2}</Text>
            </View>
        </>

    )
}
