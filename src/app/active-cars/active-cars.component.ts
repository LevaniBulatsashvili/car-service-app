import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CarInterface } from '../interfaces/car.interface';
import { addToPassed } from '../store/car.actions';
import { carState } from '../store/car.reducer';

@Component({
  selector: 'app-active-cars',
  templateUrl: './active-cars.component.html',
  styleUrls: ['./active-cars.component.scss']
})
export class ActiveCarsComponent implements OnInit {
  activeCars: Observable<any>

  constructor(private store: Store< {car: carState} >) {
    this.activeCars = store.select('car');
  }

  ngOnInit() {
  }

  addToPassed(car: CarInterface) {
    this.store.dispatch(addToPassed({ car: car }));
  }
}
