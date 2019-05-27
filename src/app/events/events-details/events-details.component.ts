import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute} from '@angular/router';
import { IEvent } from '../shared/event.model';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css']
})
export class EventsDetailsComponent implements OnInit {
  event: IEvent;
  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params.id);
  }

}
