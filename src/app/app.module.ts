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
import {ApiService, RestangularConfigFactory} from './shared/services/api.service';
import {ApiV2Service} from './shared/services/apiV2.service';
import {ContainerInfoComponent} from './pages/container-story/components/container-info/container-info.component';


@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        AboutComponent,
        ContainerStoryComponent,
        ContainerInfoComponent
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
        ApiV2Service,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
