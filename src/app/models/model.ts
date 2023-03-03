export class Model{
    private sub: any;
    private username!: string;

    constructor(sub:string, username: string){
        this.sub = sub;
        this.username = username;
    }

    public setUserName(username: string): void{
        this.username = username;
    }
    public setSub(sub: any){
        this.sub = sub;
    }

    public getUserName(): string{
        return this.username
    }
    public getSub(){
        return this.sub
    }
}