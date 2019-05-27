import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbnailComponent } from './events/event-thumbnail.component';
import { NavComponent } from './nav/nav.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventsDetailsComponent } from './events/events-details/events-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { ErrorComponent } from './error/error.component';
import { EventRouteActivatorService } from './events/events-details/event-route-activator.service';


@NgModule({
  declarations: [
    AppComponent, EventsListComponent, EventsThumbnailComponent, NavComponent, EventsDetailsComponent, CreateEventComponent, ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EventService, ToastrService, EventRouteActivatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
