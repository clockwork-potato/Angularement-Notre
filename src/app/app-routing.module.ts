import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OuiComponent } from './oui/oui.component';
import { NonComponent } from './non/non.component';
import { HomeComponent } from './home/home.component';
import { MarioComponent } from './mario/mario.component';
import { FetchComponent } from './fetch/fetch.component';

const routes: Routes = [
  { path: 'oui', component: OuiComponent },
  { path: '', component: HomeComponent },
  { path: 'non', component: NonComponent },
  { path: 'mario', component: MarioComponent },
  { path: 'fetch', component: FetchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
