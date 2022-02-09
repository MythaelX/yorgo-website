import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser'; 
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CommunityComponent } from './community/community.component';
import { ContactComponent } from './contact/contact.component';
import { WhoAreWeComponent } from './who-are-we/who-are-we.component';
import { ConfidentialityComponent } from './confidentiality/confidentiality.component';
import { GCUComponent } from './gcu/gcu.component';


const routes: Routes =[
    { path: 'home', component: HomeComponent },
    { path: 'accueil', component: HomeComponent },
    { path: 'community', component: CommunityComponent },
    { path: 'communaute', component: CommunityComponent },
    { path: 'who-are-we', component: WhoAreWeComponent },
    { path: 'qui-sommes-nous', component: WhoAreWeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'confidentialité', component: ConfidentialityComponent },
    { path: 'confidentiality', component: ConfidentialityComponent },
    { path: 'GCU', component: GCUComponent },
    { path: '', redirectTo: 'accueil', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
