import { Component } from '@angular/core';
import { GithubService } from './services/github.service';

@Component({
    moduleId: module.id.replace("/dist/", "/app/"),
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [ GithubService ]
})

export class AppComponent {}
