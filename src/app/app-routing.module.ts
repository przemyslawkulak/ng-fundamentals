import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventsDetailsComponent } from './events/events-details/events-details.component';

const routes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventsDetailsComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
