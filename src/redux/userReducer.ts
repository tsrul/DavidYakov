import {userTypes} from './types';

type action={
    type:string,
    payload:{
        token:'',
    }
}

const initialState = {

    token:'',
}

export const userReducer = (state = initialState,action:action)=>{
    switch(action.type){
        case userTypes.LOG_IN: return{...state,tokeh:action.payload.token};
        default: return state;
    }
}


