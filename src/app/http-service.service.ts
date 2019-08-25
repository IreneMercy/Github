import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Github } from './github';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  githubs:Github[]=[];
  constructor(private http:HttpClient) { }

  searchProfile(searchItem:string){
    interface results{
      avatar_url:string;
      login:string;
      username:string;
      html_url:string;
      name:string;
      url:string;
    }
     let searchEndpoint = "https://api.github.com/users/+'searchItem'+?access_token="+environment.apikey;
     searchEndpoint += "&q=" + searchItem;
     let promise = new Promise((resolve, reject)=>{
       this.http.get<results>('https://api.github.com/users/'+searchItem+'?access_token='+environment.apikey).toPromise().then(
         (results)=>{
           this.githubs = [];
           this.githubs.push(results);
           console.log(results)
           resolve()
         },
         (error)=>{
           console.log(error)
           reject()
         }
       )
     })
     return promise;
}
}
