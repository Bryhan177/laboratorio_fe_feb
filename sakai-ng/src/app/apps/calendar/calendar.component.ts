import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [FullCalendarModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export default class CalendarComponent {
  calendarOptions: any;

  constructor() {
    this.calendarOptions = {
      plugins: [dayGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      events: [
        { title: 'Event 1', date: '2025-02-25' },
        { title: 'Event 2', date: '2025-02-26' },
        // Agrega tus eventos aquí
      ],
      dateClick: ( info: any) => {
        alert('Date clicked: ' + info.dateStr);
      }
    };
  }
}
