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
    let searchEndpoint="https://api.github.com/users/daneden?access_token=" + environment.apikey;
    searchEndpoint += "&q=" + searchItem;
    let promise = new Promise((resolve, reject)=>{
      this.http.get(searchEndpoint).toPromise().then(
        (results)=>{
          this.githubs = [];
          for(let i=0; i<results["data"].length; i++){
            let userProfile = results["data"][i]["login"]["avatar_url"];
            let user = new Github(userProfile);
            this.githubs.push(user);
          }
          console.log(this.githubs);
          resolve()
        },
        (error)=>{
          console.log(error)
          reject()
        }
      )
    })
  }
}
