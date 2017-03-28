import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { AppComponent }  from './app.component';
import { ProjectsComponent } from './projects.component';
import { ProjectComponent } from './project.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule],
  declarations: [ AppComponent, ProjectsComponent, ProjectComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
