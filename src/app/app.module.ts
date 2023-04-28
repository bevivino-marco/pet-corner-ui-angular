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
import { AnimalTileComponent } from './components/animal-tile/animal-tile.component';
import { UserTileComponent } from './components/user-tile/user-tile.component';
import { ProfileRegistrationComponent } from './components/profile-registration/profile-registration.component';
import { ProfileLoginComponent } from './components/profile-login/profile-login.component';
import { ProfileComponent } from './components/profile/profile.component';

const appRoutes: Routes = [

  {path: "training", component: TrainingPlpComponent},
  {path: "", component: AdoptPlpComponent},
  {path: "adopt", component: AdoptPlpComponent},
  {path: "sitting", component: SittersPlpComponent},
  {path: "therapy", component: TherapyPlpComponent},
  {path: "registration", component: ProfileRegistrationComponent},
  {path: "login", component: ProfileLoginComponent},
  {path: "profile", component: ProfileComponent},

]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TileComponent,
    AdoptPlpComponent,
    TherapyPlpComponent,
    TrainingPlpComponent,
    SittersPlpComponent,
    AnimalTileComponent,
    UserTileComponent,
    ProfileRegistrationComponent,
    ProfileLoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
