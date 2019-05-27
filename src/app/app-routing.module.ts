import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import {
  EventsListComponent,
  EventsDetailsComponent,
  CreateEventComponent,
  EventListResolverService,
  EventRouteActivatorService
} from './events/index';

const routes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent, resolve: {events: EventListResolverService} },
  { path: 'events/:id', component: EventsDetailsComponent, canActivate: [EventRouteActivatorService] },
  { path: '', redirectTo: '/events', pathMatch: 'full'},
  { path: '404', component: ErrorComponent },
  { path: 'user', loadChildren: './user/user.module#UsersModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
