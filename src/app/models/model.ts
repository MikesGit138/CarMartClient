import { JwtService } from "../services/jwt.service";

export class User{
    public user = '';
    constructor(public jwt:JwtService){
        this.user = localStorage.getItem("TOKEN") || 'no user found'
    }

    Person = {username: this.jwt.DecodeToken(this.user)}
}




