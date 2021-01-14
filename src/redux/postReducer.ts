import Post from '../model/Post';
import {postTypes} from './types';

type action={
    type:string,
    payload:{
        posts:Post[]
    }
}



export const postsReducer = (state:Post[] = [],action:action):Post[]=>{
    switch(action.type){
        case postTypes.GET_POSTS:return {...state,...action.payload.posts};
        default: return state;
    }
}
