import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './componets/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import { ListComponent } from './componets/list/list.component';
import { PlayersComponent } from './componets/players/players.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    PlayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatListModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
