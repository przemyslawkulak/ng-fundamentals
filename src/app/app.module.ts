import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {
  EventsListComponent,
  EventsThumbnailComponent,
  EventService,
  EventsDetailsComponent,
  CreateEventComponent,
  EventListResolverService,
  CreateComponentComponent,
  SessionListComponent,
  DurationPipe,
  UpvoteComponent,
  LocationValidatorDirective,
  EventResolverService,
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
import { RouterModule, PreloadAllModules } from '@angular/router';
import { routes} from './app-routing.module'


// tslint:disable-next-line: no-string-literal
const toastr: Toastr = window['toastr'];
// tslint:disable-next-line: no-string-literal
const jQuery = window['$'];

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
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
    HttpClientModule
  ],
  providers: [
    EventService,
    {provide: TOASTR_TOKEN, useValue: toastr },
    {provide: JQ_TOKEN, useValue: jQuery },

    EventResolverService,
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
