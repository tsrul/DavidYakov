import {serviseCode} from '../types/dataTypes';
import {Observable} from 'rxjs';
import Post,{post} from '../model/Post';



export default interface IServise {
    //posts
    getPosts():Observable<Post[]>;
    postOnePost(post:post):Promise<serviseCode>;
    getPost(postId:number):Promise<Post>;
    deletePost(postId:number):Promise<serviseCode>;
    likePost(postId:number):Promise<serviseCode>;
    unlikePost(postId:number):Promise<serviseCode>;
    commentPost(postId:number):Promise<serviseCode>;

    // //users
    // signUpUser(user:signUp):serviseCode;
    // logIn(data:userData):serviseCode;
    // uploadImage(img:string):serviseCode;
    // addUserDetails(user:user):serviseCode;
    // //getAUthenticatedUser
    // getUserDetails(userId:number):user;
    // //notification

}