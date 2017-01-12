import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';
import 'rxjs/add/operator/map';

@Component({
    moduleId: module.id.replace("/dist/", "/app/"),
    selector: 'user-profile',
    templateUrl: 'profile.component.html',
})

export class ProfileComponent {}
