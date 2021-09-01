import React from 'react'
import { Image, Text, View,Dimensions } from 'react-native'
import { Colores } from '../styles/Colores';
const windowHeight = Dimensions.get('window').height;
export const ExperienciasComponent = ({primerP,segundoP,img}) => {
    return (
        <View style={{marginBottom:img==3?30:0,borderRadius:15,marginTop:10,backgroundColor:Colores.gray800,flexDirection:'row',height:windowHeight/3,padding:10}} >
          <View style={{flex:5,marginRight:10}}>
            {
                img==1?(
                    <Image  
                    source={require('../assets/Rectangle480.png')} 
                    style={{width:'100%',height:'100%',borderRadius:10}}
                    />
                ):
                img==2?(
                    <Image  
                        source={require('../assets/image14.png')} 
                        style={{width:'100%',height:'100%',borderRadius:10}}
                    />
                ):(
                    <Image  
                    source={require('../assets/image13.png')} 
                    style={{width:'100%',height:'100%',borderRadius:10}}
                    />
                )
            }
          </View>
          <View style={{flex:8}} >
            <Text style={{fontSize:18,fontWeight:'bold',color:'white'}} >{primerP}</Text>
            <Text style={{color:'white',marginTop:2.5,fontSize:13}}>{segundoP}</Text>
          </View>
        </View>
    )
}
