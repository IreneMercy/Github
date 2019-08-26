import { Component, OnInit  } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Github } from '../github';
import { DatePipePipe } from '../date-pipe.pipe';
import { Repo } from '../repo';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  gituser:Github[];
  gitrepository:Repo;
  constructor(public httpService:HttpServiceService) { }

  ngOnInit() {
    this.searchUser("IreneMercy")
    this.searchRepo("IreneMercy")
  }
  search(item){
    this.searchUser(item);
    this.searchRepo(item);
  }
  searchUser(searchItem){
   this.httpService.searchProfile(searchItem).then(
     ()=>{
       this.gituser=this.httpService.gits;

       console.log(this.gituser);

     },
     (error)=>{
       console.log(error);
     }
   )}
   searchRepo(searchItem){
     this.httpService.searchRepos(searchItem).then(
       ()=>{
         this.gitrepository=this.httpService.userrepo;
         console.log(this.gitrepository);
       },
       (error)=>{
         console.log(error)
       }
     )

   }




}
