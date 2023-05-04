import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { PetanqueUnoComponent } from './petanque-uno/petanque-uno.component';
import { PetanqueUnComponent } from './petanque-un/petanque-un.component';
import { PetanqueDosComponent } from './petanque-dos/petanque-dos.component';
import { PackBoissonComponent } from './pack-boisson/pack-boisson.component';
import { PastisComponent } from './pastis/pastis.component';
import { LaspecialelasallaleComponent } from './laspecialelasallale/laspecialelasallale.component';
import { AjoutAmiModalComponent } from './ajout-ami-modal/ajout-ami-modal.component';
import { MarioComponent } from './mario/mario.component';
import { FetchComponent } from './fetch/fetch.component';


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
    PetanqueUnoComponent,
    PetanqueUnComponent,
    PetanqueDosComponent,
    PackBoissonComponent,
    PastisComponent,
    LaspecialelasallaleComponent,
    AjoutAmiModalComponent,
    MarioComponent,
    FetchComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
