import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {NavComponent} from './components/nav/nav.component';
import {AboutComponent} from './pages/about/about.component';
import {ContainerStoryComponent} from './pages/container-story/container-story.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RestangularModule} from 'ngx-restangular';
import {ApiService, RestangularConfigFactory} from './services/api.service';


@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        AboutComponent,
        ContainerStoryComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        RestangularModule.forRoot(RestangularConfigFactory),

    ],
    providers: [
        ApiService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
