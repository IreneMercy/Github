import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Github } from './github';
import { Repo } from './repo';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  gits:Github[]=[];
  userrepo:Repo;
  constructor(private http:HttpClient) { }

  searchProfile(searchItem:string){
    interface results{
      avatar_url:string;
      login:string;
      username:string;
      html_url:string;
      name:string;
      url:string;
      followers:number;
    }
    let promise =  new Promise((resolve, reject)=>{
       this.http.get<results>('https://api.github.com/users/'+searchItem+'?access_token='+environment.apikey).toPromise().then(
         (results)=>{
           this.gits = [];
           this.gits.push(results);
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

searchRepos(searchItem:string){
  interface results{
    description:string;
    name:string;
  }
  let promise =  new Promise((resolve, reject)=>{
     this.http.get<results>('https://api.github.com/users/'+searchItem+'/repos?access_token='+environment.apikey).toPromise().then(
       (results)=>{
         this.userrepo;
         this.userrepo = results;
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
