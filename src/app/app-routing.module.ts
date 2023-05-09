import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OuiComponent } from './oui/oui.component';
import { NonComponent } from './non/non.component';
import { HomeComponent } from './home/home.component';
import { MarioComponent } from './mario/mario.component';
import { FetchComponent } from './fetch/fetch.component';
import { TpDirectivesComponent } from './tp-directives/tp-directives.component';
import { ExoEmitComponent } from './exo-emit/exo-emit.component';

const routes: Routes = [
  { path: 'oui', component: OuiComponent },
  { path: '', component: HomeComponent },
  { path: 'non', component: NonComponent },
  { path: 'mario', component: MarioComponent },
  { path: 'fetch', component: FetchComponent },
  { path: 'jeff', component: TpDirectivesComponent },
  { path: 'emit', component: ExoEmitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
