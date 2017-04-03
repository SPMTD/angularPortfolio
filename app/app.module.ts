import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {APP_BASE_HREF} from '@angular/common';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { HomeComponent } from './home/home.component';
import { AppComponent }  from './app.component';
import { ProjectsComponent } from './projects.component';
import { ProjectComponent } from './project.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing, HttpModule],
  declarations: [ HomeComponent, AppComponent, ProjectsComponent, ProjectComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppModule { }
