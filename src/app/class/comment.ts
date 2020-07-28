import {User} from "./user";

export class Comment {
    user: User;
    initial: ;
    message: string;


    constructor(user:User,message:string){

        this.initial = user.name.slice(0,1);
        this.message = message;
    }
}

