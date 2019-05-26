import { Component } from '@angular/core';
import { EventService } from './shared/event.service';

@Component({

// tslint:disable-next-line: component-selector
  selector: 'events-list',
  template: `
  <div>
    <h1>Upcomming Events</h1>
    <hr/>
    <div class='row'>
      <div class="col-md-5" *ngFor="let event of events">
        <event-thumbnail  #thumbnail (eventClick)="handleEventClick($event)" [event]="event"></event-thumbnail>
      </div>
    </div>
    <h3>{{thumbnail.property}}</h3>
    <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log Me some Foo</button>
  </div>

  `
})

export class EventsListComponent {
  events:any[];
constructor (private eventService: EventService){

}

ngOnInit(){
  this.events = this.eventService.getEvents()
}

  handleEventClick(data) {
    console.log('received:', data);
  }
}
