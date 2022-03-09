import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CarInterface } from '../interfaces/car.interface';
import { PopupService } from '../popup.service';
import { carState } from '../store/car.reducer';

@Component({
  selector: 'app-active-cars',
  templateUrl: './active-cars.component.html',
  styleUrls: ['./active-cars.component.scss']
})
export class ActiveCarsComponent implements OnInit {
  activeCars: Observable<any>;

  constructor(private store: Store< {car: carState} >, private popupServ: PopupService) {
    this.activeCars = store.select('car');
  }

  ngOnInit() {
  }

  triggerPopup(car: CarInterface) {
    this.popupServ.pendingCar(car);
    this.popupServ.togglePopup();
  }
}
