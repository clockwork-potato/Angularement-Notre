import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OuiComponent } from './oui/oui.component';
import { NonComponent } from './non/non.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'oui', component: OuiComponent },
  { path: '', component: HomeComponent },
  { path: 'non', component: NonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
