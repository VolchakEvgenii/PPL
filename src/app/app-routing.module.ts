import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from './pages/about/about.component';
import {ContainerStoryComponent} from './pages/container-story/container-story.component';

const routes: Routes = [
    {path: 'container-story', component: ContainerStoryComponent},
    {path: 'about', component: AboutComponent},
    {path: '', redirectTo: '/container-story', pathMatch: 'full' }, // redirect to `ContainerStoryComponent`
    // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
