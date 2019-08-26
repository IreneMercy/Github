import { Component, OnInit } from '@angular/core';
import { Github } from '../github';
import { DatePipePipe } from '../date-pipe.pipe';
import { Repo } from '../repo';
import { HttpServiceService } from '../http-service.service';
import { SearchFormComponent } from '../search-form/search-form.component';


@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  gitrepo:Repo;
  constructor(public httpService:HttpServiceService) { }

  ngOnInit() {
    // this.searchRepo("IreneMercy")
  }
  searchRepo(searchItem){
   this.httpService.searchRepos(searchItem).then(
     ()=>{
       this.gitrepo=this.httpService.userrepo;
       console.log(this.gitrepo);

     },
     (error)=>{
       console.log(error)
     }
   )
 }

}
