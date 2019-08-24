import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Github } from '../github';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  gituser:Github[];
  constructor(public httpService:HttpServiceService) { }

  ngOnInit() {
    this.searchUser("IreneMercy")
  }
  searchUser(searchItem){
    this.httpService.searchProfile(searchItem).then(
      (results)=>{
        this.gituser = this.httpService.githubs;
      },
      (error)=>{
        console.log('error')
      }
    )
  }

}
