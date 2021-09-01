import {VER,CALCULAR,VALUE} from './types';

const initialState={
    mas:true,
    valor:0,
    calculo:0
}

export const mainReducer=(state=initialState,action)=>{
    switch (action.type) {
        case VER:
            return {...state,mas:!state.mas}
    
        case VALUE:
            return {...state,valor:action.payload}
        case CALCULAR:
            return {...state,calculo:action.payload-69000}

        default:
           return state;
    }
}