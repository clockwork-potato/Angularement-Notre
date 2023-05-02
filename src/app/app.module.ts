import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { OuiComponent } from './oui/oui.component';
import { NonComponent } from './non/non.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LesAmisComponent } from './les-amis/les-amis.component';
import { UnAmiComponent } from './un-ami/un-ami.component';


@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    NavbarComponent,
    OuiComponent,
    NonComponent,
    HomeComponent,
    FooterComponent,
    LesAmisComponent,
    UnAmiComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
