import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {
  isDirty = false;
  newEvent;
  constructor(private router: Router, private eventService: EventService) { }

  saveEvent(formValues) {
    this.isDirty = true;
    console.log(formValues);
    this.eventService.saveEvent(formValues);
    this.router.navigate(['/events']);
  }
  cancel() {
    this.router.navigate(['/events']);
  }
}
