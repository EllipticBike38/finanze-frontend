import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuLateraleComponent } from './menu-laterale/menu-laterale.component';
import { MenuPrincipaleComponent } from './menu-principale/menu-principale.component';
import { CorpoComponent } from './corpo/corpo.component';
import { HTTPService } from './HTTP.service';
import { CommonModule } from '@angular/common';
import { SaldoComponent } from './saldo/saldo.component';
import { RouterModule } from '@angular/router';
import { StoricoComponent } from './storico/storico.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuLateraleComponent,
    MenuPrincipaleComponent,
    CorpoComponent,
    SaldoComponent,
    StoricoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: CorpoComponent},
      {path: 'storico', component: StoricoComponent},
      // {path: '**', component: NavbarComponent},
    ]),
  ],
  schemas:[NO_ERRORS_SCHEMA],
  providers: [HTTPService],
  bootstrap: [AppComponent]
})
export class AppModule { }
