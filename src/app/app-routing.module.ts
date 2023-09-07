import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Web3ModelComponent } from './web3-model/web3-model.component';

const routes: Routes = [
  {path: '', pathMatch : 'full', redirectTo: 'web3-model'},
  {path:'web3-model',component:Web3ModelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
