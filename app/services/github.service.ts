import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username: string;

    constructor(private _http: Http) {
        console.log("Github Service ready...");
        this.username = 'ajsaavedra';
    }

    getUser() {

    }

    getUserRepos() {

    }

    updateUser() {

    }
}