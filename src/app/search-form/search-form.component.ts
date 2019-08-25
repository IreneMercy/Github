import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GithubComponent} from '../github/github.component';
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Output() searchgit = new EventEmitter<any>()
  searchItem:string;
  constructor() { }
  search(){
    this.searchgit.emit(this.searchItem);
  }
  ngOnInit() {
  }

}
