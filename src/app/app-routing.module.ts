import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubComponent } from './github/github.component';
import { ReposComponent } from './repos/repos.component';



const routes: Routes = [
  {path:'home', component:GithubComponent},
  {path:'repo', component:ReposComponent},
  {path:'', component:GithubComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
