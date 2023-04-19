import { Component } from '@angular/core';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-destinations-nav',
  templateUrl: './destinations-nav.component.html',
  styleUrls: ['./destinations-nav.component.css']
})
export class DestinationsNavComponent {
  destinations: any;
  errMessage: string = '';

  constructor( private _service: DestinationsService) {
    this._service.getDestinations().subscribe({
      next:(data) => {
        this.destinations = data
      },
      error:(err) => {
        this.errMessage = err
      }
    })
  }
}
