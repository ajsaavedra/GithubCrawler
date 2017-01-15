import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username: string;
    
    constructor(private http: Http) {
        this.username = 'ajsaavedra';
    }

    getUser() {
        return this.http.get('https://api.github.com/users/' + this.username)
            .map(res => res.json());
    }

    getUserRepos() {
        return this.http.get('https://api.github.com/users/' + this.username + '/repos')
            .map(res => res.json());
    }

    updateUser(username: string) {
        this.username = username;
    }
}