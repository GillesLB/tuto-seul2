import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from 'src/app/accueil/accueil.component';
import { ListeComponent } from 'src/app/liste/liste.component';
import { AjouterComponent } from 'src/app/ajouter/ajouter.component';

const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'liste', component: ListeComponent},
  {path: 'ajouter', component: AjouterComponent},
  {path: '**', component: AccueilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
