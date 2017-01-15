import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SearchComponent } from './users/search.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule
     ],
    declarations: [
        AppComponent,
        SearchComponent,
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}
