import { serviseCode } from "../types/dataTypes";
import IServise from "./ISevice";
import {post} from '../model/Post';
import {Observable} from "rxjs";
import firebase from "firebase";
import appFirebase from "../config/firebase-config";
import Post from "../model/Post";
import {collectionData} from "rxfire/firestore";



export default class firebaseService implements IServise{
    db:firebase.firestore.CollectionReference;
    constructor(db: string){
        this.db = appFirebase.firestore().collection(db);
    }

    getPosts(): Observable<Post[]> {
        return collectionData<Post>(this.db) 
    }
   
   
            postOnePost(post: post): Promise<serviseCode> {
        throw new Error("Method not implemented.");
    }
    getPost(postId: number): Promise<Post> {
        throw new Error("Method not implemented.");
    }
    deletePost(postId: number): Promise<serviseCode> {
        throw new Error("Method not implemented.");
    }
    likePost(postId: number): Promise<serviseCode> {
        throw new Error("Method not implemented.");
    }
    unlikePost(postId: number): Promise<serviseCode> {
        throw new Error("Method not implemented.");
    }
    commentPost(postId: number): Promise<serviseCode> {
        throw new Error("Method not implemented.");
    }

}