import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService } from '../events/index';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  searchTerm = '';
  foundSessions: ISession[];
  constructor(public auth: AuthService, private eventService: EventService) {
   }
   searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {this.foundSessions = sessions; });
  }


}
