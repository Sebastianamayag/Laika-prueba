import {CALCULAR,VER,VALUE} from './types';

export const calcular=valor=>dispatch=>{
    dispatch({
        type:CALCULAR,
        payload:valor
    });
}

export const value=value=>dispatch=>{
    console.log(value);
    dispatch({
        type:VALUE,
        payload:value
    })
}

export const ver=()=>({
    type:VER
});

