import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  EventsListComponent,
  EventsThumbnailComponent,
  EventService,
  EventsDetailsComponent,
  CreateEventComponent,
  EventRouteActivatorService,
  EventListResolverService
} from './events/index';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './events-app.component';
import { NavComponent } from './nav/nav.component';
import { ToastrService } from './common/toastr.service';
import { ErrorComponent } from './error/error.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent, EventsListComponent, EventsThumbnailComponent, NavComponent, EventsDetailsComponent, CreateEventComponent, ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivatorService,
    EventListResolverService,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm ('You have not saved this event, do you really want to cancel?');
  }
}
