import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './shared/components/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialDesignModule} from './material-design.module';
import {HomeComponent} from './pages/home/home.component';
import {ConfirmedComponent} from './pages/confirmed/confirmed.component';
import {CountryComponent} from './pages/country/country.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CountryModalComponent } from './shared/components/country-modal/country-modal.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ConfirmedComponent,
    CountryComponent,
    CountryModalComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  entryComponents: [CountryModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
