import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TachesComponentComponent} from "./taches-component/taches-component.component";
import {CreateTacheComponentComponent} from "./create-tache-component/create-tache-component.component";

const routes: Routes = [
  { path: '', component: TachesComponentComponent},
  { path: 'ajouter-une-taches', component: CreateTacheComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
