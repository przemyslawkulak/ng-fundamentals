import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  EventsListComponent,
  EventsThumbnailComponent,
  EventService,
  EventsDetailsComponent,
  CreateEventComponent,
  EventRouteActivatorService,
  EventListResolverService,
  CreateComponentComponent,
  SessionListComponent,
  DurationPipe,
  UpvoteComponent,
  LocationValidatorDirective,
} from './events/index';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './events-app.component';
import { NavComponent } from './nav/nav.component';
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { JQ_TOKEN } from './common/jQuery.service';
import { ErrorComponent } from './error/error.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { SimpleModalComponent } from './common/simpleModal.component';
import { ModalTriggerDirective } from './common/modal-trigger.directive';
import { VoterService } from './events/events-details/voter.service';


let toastr: Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
     NavComponent,
     EventsDetailsComponent,
     CreateEventComponent,
     ErrorComponent,
     CreateComponentComponent,
     SessionListComponent,
     CollapsibleWellComponent,
     DurationPipe,
     SimpleModalComponent,
     UpvoteComponent,
     ModalTriggerDirective,
     LocationValidatorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    EventService,
    {provide: TOASTR_TOKEN, useValue: toastr },
    {provide: JQ_TOKEN, useValue: jQuery },

    EventRouteActivatorService,
    EventListResolverService,
    VoterService,
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
