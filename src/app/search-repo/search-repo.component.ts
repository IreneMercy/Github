import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GithubComponent} from '../github/github.component';
@Component({
  selector: 'app-search-repo',
  templateUrl: './search-repo.component.html',
  styleUrls: ['./search-repo.component.css']
})
export class SearchRepoComponent implements OnInit {
  @Output() searchrepo = new EventEmitter<any>()
  searchItem:string;
  constructor() { }
  repoSearch(){
    this.searchrepo.emit(this.searchrepo);
  }
  ngOnInit() {
  }

}
