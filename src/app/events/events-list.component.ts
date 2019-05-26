import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

declare let toastr: any;

@Component({

// tslint:disable-next-line: component-selector
  selector: 'events-list',
  template: `
  <div>
    <h1>Upcomming Events</h1>
    <hr/>
    <div class='row'>
      <div class="col-md-5" *ngFor="let event of events">
        <event-thumbnail  #thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
      </div>
    </div>
  </div>

  `
})

export class EventsListComponent implements OnInit {
  events: any[];
constructor(private eventService: EventService, private toastr: ToastrService) {
}

ngOnInit() {
  this.events = this.eventService.getEvents();
}

handleThumbnailClick(eventName) {
  toastr.success(eventName);
}
}
