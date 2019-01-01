import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent1Component } from './app-component1/app-component1.component';
import { SharedModule } from '@app/shared/shared.module';
import { AppComponent2Component } from './app-component2/app-component2.component';
import { AppComponent3Component } from './app-component3/app-component3.component';
import { AppComponent4Component } from './app-component4/app-component4.component';
import { AppComponent5Component } from './app-component5/app-component5.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AppComponent1Component,
    AppComponent2Component,
    AppComponent3Component,
    AppComponent4Component,
    AppComponent5Component,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule.forRoot(),
    HttpClientModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
