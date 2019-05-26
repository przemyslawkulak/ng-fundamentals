import { Component , Input, Output, EventEmitter} from '@angular/core';

@Component({

// tslint:disable-next-line: component-selector
  selector: 'event-thumbnail',
  template: `
  <div class="well hoverwell thumbnail">
      <h2>{{event?.name}}</h2>
      <div>Date: {{event?.date}}</div>
      <div [ngSwitch]="event?.time">Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'"> (Early start)</span>
        <span *ngSwitchCase="'10:00 am'"> (Late start)</span>
        <span *ngSwitchDefault> (Normal start)</span>
      </div>
      <div>Pice: \${{event?.price}}</div>
      <div [hidden]="!event?.location">
        <span>Location: {{event?.location?.address}}</span>
        <span class="pad-left">{{event?.location?.city}}, {{event.location?.country}}</span>
    </div>
    <div [hidden]="!event?.onlineUrl">
      Online URL: {{event?.onlineUrl}}
    </div>
    <button class="btn btn-primary" (click)="handleClickMe()"> Click Me! </button>
  </div>
  `,
  styles: [`
  .thumbnail { min-height: 240 px;}
  .pad-left {margin-left:10px;}
  .well div {color: #bbb}
  `]
})

export class EventsThumbnailComponent {
  @Input() event: any ;
  @Output() eventClick = new EventEmitter();
  property: any = 'value';
  handleClickMe() {
    this.eventClick.emit(this.event.name);
  }
  logFoo() {
    console.log('Foo');
  }
}
