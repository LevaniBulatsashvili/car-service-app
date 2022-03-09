import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { CarInterface } from './interfaces/car.interface';
import { addToPassed } from './store/car.actions';
import { carState } from './store/car.reducer';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  private popup = new BehaviorSubject<boolean>(false);
  car!: CarInterface;

  constructor(private store: Store< {car: carState} >) {
  }

  moveToPassed() {
    this.store.dispatch(addToPassed({ car: this.car }));
    this.togglePopup()
  }

  togglePopup() {
    this.popup.next(!this.popup.getValue());

  }

  popupStatus() {
    return this.popup.asObservable();
  }

  pendingCar(car: CarInterface) {
    this.car = car;
  }
}
