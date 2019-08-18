import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeComponent } from './liste/liste.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { MenuComponent } from './menu/menu.component';
import { TrucServiceService } from 'src/app/services/truc-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ListeComponent,
    AjouterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    TrucServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
