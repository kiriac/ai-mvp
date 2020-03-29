import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ConfirmedComponent} from './pages/confirmed/confirmed.component';
import {CountryComponent} from './pages/country/country.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'confirmed', component: ConfirmedComponent},
  {path: 'countries', component: CountryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
