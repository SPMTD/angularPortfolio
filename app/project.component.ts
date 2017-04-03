/// <reference path="../typings/whatwg-fetch.d.ts" />
// typescript definitie voor fetch. VS Code herkent d.ts files automatisch, webstorm niet getest


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from './services/posts.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'project-list',
  templateUrl: './app/project.component.html',
  styleUrls: ['./app/project.component.css'],
  providers: [ PostService ]
})
export class ProjectComponent implements OnInit {

    title: string = "Project Details";
    projectId: string;
    private sub: any;

    name: string;
    developer: string;
    client: string;
    completed: boolean;
    completedText: string;

    constructor(private _postService: PostService, private _route: ActivatedRoute, private _router: Router) {
    }

    ngOnInit() {
      this.sub = this._route.params.subscribe(params => {
        this.projectId = params['_id'];
      });
    }

    getProjectInformation() {
        this._postService.getSpecificProject(this.projectId).subscribe(proj => {   
        this.name = proj.name;
        this.developer = proj.developer;
        this.client = proj.client;
        this.completed = proj.completed;


         if(!this.completed){ 
             this.completedText = 'Unfinished';
         } else {
             this.completedText = 'Finished';
           }
        });
    }

    removeProject() {
        this._postService.deleteProject(this.projectId).subscribe();
        this._router.navigate(['/']); // Redirect
    }

    editProject() {
        this._router.navigate(['/edit/', this.projectId]); // Redirect
    }
}