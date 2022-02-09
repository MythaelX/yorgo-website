import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { CommunityComponent } from './community/community.component';
import { ContactComponent } from './contact/contact.component';
import { WhoAreWeComponent } from './who-are-we/who-are-we.component';
import { GCUComponent } from './gcu/gcu.component';
import { ConfidentialityComponent } from './confidentiality/confidentiality.component';


@NgModule({
  declarations: [
    AppComponent,


 
    NavbarComponent,
    FooterComponent,
    CommunityComponent,
    ContactComponent,
    WhoAreWeComponent,
    GCUComponent,
    ConfidentialityComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
