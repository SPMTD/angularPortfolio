import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

var apiLink = 'http://145.24.222.122:8000/api/projects/';

@Injectable()
export class PostService {
    constructor(private http: Http) {

    }

    id: string;

    getProjects() {
        return this.http.get(apiLink)
        .map(res => res.json());
    }

    getSpecificProject(_id: string) {
        return this.http.get(apiLink + _id)
            .map(res => res.json());
    }

    addProject(newProject: any) {
        var headers = new Headers();
        headers.append('content-type', 'application/json');
    
        return this.http.post(apiLink, JSON.stringify(newProject), {headers:headers})
        .map(res => res.json());
    }

    editProject(project: any, id: string) {
        var headers = new Headers();
        headers.append('content-type', 'application/json');
        let options = new RequestOptions({headers: headers });
    }

    deleteProject(_id: string) {
        return this.http.delete(apiLink + _id);
    }
}
