import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TileComponent } from './components/tile/tile.component';
import { AdoptPlpComponent } from './components/adopt-plp/adopt-plp.component';
import { TherapyPlpComponent } from './components/therapy-plp/therapy-plp.component';
import { TrainingPlpComponent } from './components/training-plp/training-plp.component';
import { SittersPlpComponent } from './components/sitters-plp/sitters-plp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TileComponent,
    AdoptPlpComponent,
    TherapyPlpComponent,
    TrainingPlpComponent,
    SittersPlpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
