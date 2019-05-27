import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventsDetailsComponent } from './events/events-details/events-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { ErrorComponent } from './error/error.component';
import { EventRouteActivatorService } from './events/events-details/event-route-activator.service';

const routes: Routes = [
  { path: 'events/new', component: CreateEventComponent },
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventsDetailsComponent, canActivate: [EventRouteActivatorService] },

  { path: '', redirectTo: '/events', pathMatch: 'full'},
  { path: '404', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
