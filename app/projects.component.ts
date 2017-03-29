/// <reference path="../typings/whatwg-fetch.d.ts" />
// typescript definitie voor fetch. VS Code herkent d.ts files automatisch, webstorm niet getest


import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from './services/posts.service'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'projects-list',
  templateUrl: './app/projects.component.html',
  styleUrls: ['./app/projects.component.css'],
  providers: [ PostService ]
})
export class ProjectsComponent  {

  projects: any[] = [];

  constructor(private _postsService: PostService, private _router: Router) {
  }

  ngOnInit() {
    this.projects = [];
    this.getResults();
  }

  getResults() {
    this._postsService.getProjects().subscribe(projects => {
      this.projects = projects.items;
      console.log(projects.items)
    })
  }

  projectId: string;

  projectName: string;
  projectClient: string;
  projectDeveloper: string;
  ProjectCompleted: boolean;

  addProject () {
    var newProject = {
      name: this.projectName,
      client: this.projectClient,
      developer: this.projectDeveloper,
      completed: this.ProjectCompleted
    }

    console.log(newProject);
    var res = this._postsService.addProject(newProject);
    res.subscribe();
  }
  detailsProject() {
    this._router.navigate['']
  }
}
