import jquery from "jquery"
const BASE_URL = "http://localhost:4200/users";
const ROLES_URL = "http://localhost:4200/roles";
export class BackendService{
   
    static saveUser(user,successCallback){
        return jquery.post(BASE_URL,user,successCallback);
    }

    static deleteUser(id){
        return jquery.ajax(BASE_URL+id, {type:'delete'} )
    }

    static getUsers(){
        return jquery.ajax(BASE_URL, {type:'get'} )
    }

    static getRoles(){
        return jquery.ajax(ROLES_URL, {type:'get'} )
    }
}