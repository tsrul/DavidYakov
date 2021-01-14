import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import Post from "../model/Post";
import User from "../model/User";

import {postsReducer} from "./postReducer";
import {userReducer} from './userReducer';

type reducerType ={
    posts:Post[],
    user:User
}

const rootReducer=combineReducers<reducerType>({
    posts:postsReducer,
    user:userReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))