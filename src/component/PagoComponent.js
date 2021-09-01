import React from 'react'
import { TouchableOpacity, View,Text } from 'react-native'
import { Colores } from '../styles/Colores'

export const PagoComponent = ({monto}) => {
    return (
        <View>
            <Text style={{fontSize:16,color:'white'}} >Paga únicamente</Text>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                    <Text style={{color:'white',fontSize:27,fontWeight:'bold'}}>${monto}</Text><Text style={{fontSize:22,fontWeight:'300',color:'white'}} >/año</Text>
                </View>
                <View style={{backgroundColor:Colores.gray600,paddingHorizontal:15,paddingVertical:5,borderRadius:10}} >
                    <Text style={{color:'white'}} >
                        Lo que equivale{'\n'}a ${69000 / 12} el mes
                    </Text>
                </View>
            </View>
            <TouchableOpacity style={{alignItems:'center',marginTop:20,backgroundColor:Colores.sunshineGold,padding:15,borderRadius:10}}>
                <Text style={{fontSize:16,fontWeight:'bold'}} >Adquirir membresia</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center',marginBottom:20,marginTop:10}} >
                <Text style={{color:Colores.sunshineGold,fontSize:14}} >Aplican terminos y condiciones</Text>
            </TouchableOpacity>
        </View>
    )
}
