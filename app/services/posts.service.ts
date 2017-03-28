import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

var apiLink = 'http://145.24.222.122:8000/api/projects/';

@Injectable()
export class PostService {
    constructor(private http: Http) {

    }

    getProjects() {
        return this.http.get(apiLink)
        .map(res => res.json());
    }

    addProject(newProject: any) {
        var headers = new Headers();
        headers.append('content-type', 'application/json');
        
        return this.http.post(apiLink, JSON.stringify(newProject), {headers:headers})
        .map(res => res.json());
    }
}
