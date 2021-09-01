import { StyleSheet } from "react-native";
import { Colores } from "./Colores";

export const styles=StyleSheet.create({
    title:{
        fontSize:45
    },
    primaryTitle:{
        textTransform:'uppercase',
        color:'white'
    },
    secondTitle:{
        textTransform:'capitalize',
        color:Colores.sunshineGold,
        fontWeight:'bold'
    },
    text:{
        fontSize:18,
        color:'white'
    },
    textSecondary:{
        fontSize:14,
        color:'white'
    },
    text1:{
        textAlign:'center'
    }

})

