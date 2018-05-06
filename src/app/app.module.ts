import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingProviders } from './app.routing';


import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {
  MatListModule,
  MatInputModule,
  MatChipsModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule
} from '@angular/material';
import { NewComponentComponent } from './component/new-component/new-component.component';
import {routing} from './app.routing';
import { ErrorComponentComponent } from './component/error-component/error-component.component';

import {NewServiceService} from './service/new-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    ErrorComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
    MatPaginatorModule,
    routing,
    MatProgressBarModule
  ],
  providers: [AppRoutingProviders, NewServiceService],
  bootstrap: [AppComponent]
})

export class AppModule { }
