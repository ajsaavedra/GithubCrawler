import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';
import 'rxjs/add/operator/map';

@Component({
    moduleId: module.id.replace("/dist/", "/app/"),
    selector: 'search-profile',
    templateUrl: 'search.component.html',
})

export class SearchComponent {
    user = [];
    userRepos = [];
    username: string;

    constructor(private githubService: GithubService) {
        this.getUserData();
    }

    searchUser() {
        if (!this.username || this.username.length === 0) {
            return;
        }
        this.githubService.updateUser(this.username);
        this.getUserData();
    }

    getUserData() {
        this.getUser();
        this.getUserRepos();
    }

    getUser() {
        this.githubService.getUser().subscribe(user => {
             this.user = user;
        })
    }

    getUserRepos() {
        this.githubService.getUserRepos().subscribe(userRepos => {
            this.userRepos = userRepos;
        })
    }
}
