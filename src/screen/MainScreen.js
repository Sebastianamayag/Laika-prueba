import React from 'react'
import { Text, View, ScrollView, Image, Dimensions, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { ExperienciasComponent } from '../component/ExperienciasComponent';
import { HeaderComponent } from '../component/HeaderComponent';
import { PagoComponent } from '../component/PagoComponent';
import { VerMasComponent } from '../component/VerMasComponent';
import { Colores } from '../styles/Colores';
import { styles } from '../styles/GlobalStyles';
import {ver,calcular,value} from '../store/actions';
const windowHeight = Dimensions.get('window').height;
export const MainScreen = () => {

    const {mas,valor,calculo} =useSelector(state=>state.mainReducer);
    console.log(valor);
    const dispatch=useDispatch()
    const handleSubmit=()=>{
        if(valor>69000){
            dispatch(calcular(valor));
        }else{
            Alert.alert(
                "Error",
                "El gasto mensual debe ser mayor al plan",
                [
                  {
                    text: "ok",
                    onPress: () => console.log("Cancel Pressed"),
                  }
                ]
              );
        }
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: Colores.laikaColor, flex: 1 }}>
            <HeaderComponent titulo1="Laika" titlo2="Member" />
            <View style={{ marginTop: 5 }}>
                <Text style={[styles.text, styles.text1]} >Conviertete en miembro, recibe beneficios{"\n"}exclusivos y dale lo mejor a tu mascota</Text>
            </View>
            <View style={{ alignItems: 'center', marginTop: 40 }}>
                <Image source={require("../assets/card_member.png")} style={{ width: '75%', height: windowHeight / 4, borderRadius: 15, borderWidth: 0.2, borderColor: 'black' }} />
            </View>
            <View style={{ backgroundColor: Colores.gray800, marginTop: 45, marginHorizontal: '7%', borderRadius: 15, borderColor: Colores.sunshineGold, borderWidth: 0.5 }} >
                <View style={{ marginHorizontal: '5%' }} >
                    <Text style={[styles.textSecondary, { marginTop: 20 }]} >Beneficios los 365 días del año</Text>
                    <View style={{ flexDirection: 'row', marginVertical: 20 }} >
                        <Image source={require("../assets/pet.png")} style={{ width: 20, height: 20 }} />
                        <Text style={{ marginLeft: 10, fontSize: 20, color: Colores.sunshineGold }} >15% <Text style={{ fontSize: 20, color: 'white' }} >de descuento en todos los productos</Text> </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 20 }} >
                        <Image source={require("../assets/pet.png")} style={{ width: 20, height: 20 }} />
                        <Text style={{ marginLeft: 10, fontSize: 20, color: 'white' }} >Domicilio <Text style={{ fontSize: 20, color: Colores.sunshineGold }} >gratis </Text><Text style={{ fontSize: 14, color: 'white' }} >* a partir de 120.000</Text> </Text>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                            <Text style={{ fontSize: 18, color: 'white' }} >Ver otros beneficios </Text>
                            <TouchableOpacity
                                onPress={()=>dispatch(ver())}
                            >
                                <Image source={require("../assets/arrow_down.png")} style={{ width: 18, height: 18,transform:mas?[{rotate:'180deg'}]:[{rotate:'0deg'}] }} />
                            </TouchableOpacity>
                        </View>
                        {
                            mas &&(
                                <>
                                    <VerMasComponent texto="Regalo de bienvenida" />
                                    <VerMasComponent texto="Bono de Netflix para maratonear" />
                                    <VerMasComponent texto="Beneficios en restaurantes y tiendas" />
                                    <VerMasComponent texto="Por cada pedido que hagas,donaremos un porcentaje a una fundación" />
                                </>
                            )
                        }
                    </View>
                    <Text style={{ color: Colores.sunshineGold, marginBottom: 20 }} >- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </Text>
                    <PagoComponent monto={69900} />
                </View>
            </View>
            <View style={{ marginHorizontal: "8%", marginTop: 30 }}>
                <Text style={{ textAlign: 'center', fontSize: 25, color: 'white', fontWeight: 'bold' }} >Calcula tu ahorro{'\n'}con la membresia</Text>
                <Text style={{ textAlign: 'center', color: 'white' }} >¿Cuánto gastas al mes en tu peludo?</Text>
                <TextInput
                    keyboardType="numeric"
                    placeholder="Valor en pesos"
                    style={{ marginTop: 20, backgroundColor: Colores.gray700, width: "100%", fontSize: 25, padding: 7.5, borderRadius: 10, textAlign: 'center' }}
                    placeholderTextColor="white"
                    onChangeText={(v)=>dispatch(value(v))}
                />
                <TouchableOpacity
                    style={{ marginTop: 7, alignItems: 'center', padding: 15, borderRadius: 10, backgroundColor: Colores.sunshineGold }}
                    onPress={handleSubmit}
                >
                    <Text style={{ fontWeight: 'bold',fontSize:18 }} >Calcular</Text>
                </TouchableOpacity>
                <Text style={{color:'white',fontSize:25,textAlign:'center',marginTop:25}} >Tus ahorros{"\n"}<Text style={{color:Colores.sunshineGold}} >${calculo}{"\n"}</Text>al año</Text>
            </View>
            <Text style={{ marginVertical: 25, textAlign: 'center', fontSize: 30, color: 'white', fontWeight: 'bold' }}>Experiencias de{"\n"} Laika <Text style={{ color: Colores.sunshineGold }}>Members</Text></Text>
            <View style={{ marginHorizontal: '7%' }} >
                <ExperienciasComponent
                    img={1}
                    primerP="Me converti en LaikaMember y todo se volvió más fácil."
                    segundoP="Con los beneficios de LaikaMember aseguro los mejores precios sumado de regalos que le encantan a mi perro y la comodidad de que todo llega a la puerta de mi casa" />
                <ExperienciasComponent
                    img={2}
                    primerP="Soy LaikaMember y nunca habia logrado ahorrar tanto en las compras para mi mascota."
                    segundoP="Con el descuento de la Membresia me ahorro más de 50 mil pesos al mes y 600 mil pesos al año"
                />
                <ExperienciasComponent
                    img={3}
                    primerP="Me encanta ser parte del club LaikaMember."
                    segundoP="Logro consentir mucho a mi mascota y además se que con mis compras, ayudo a mascotas necesitadas." />
            </View>
        </ScrollView>
    )
}

