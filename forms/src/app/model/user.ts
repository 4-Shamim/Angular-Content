import { Address } from "./address";

export class User {

    constructor(
        public name:string,
        public email:string,
        public phone:number,
        public language:string,
        public time:string,
        public subscribe:boolean,
        public address:Address
    ) {}

}
