import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponentComponent } from './add-component/add-component.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponentComponent } from './home-component/home-component.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddComponentComponent,
    EditComponentComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
