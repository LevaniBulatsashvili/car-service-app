import { Component, DoCheck, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CarInterface } from '../interfaces/car.interface';
import { carState } from '../store/car.reducer';
import { addToActive } from '../store/car.actions';

@Component({
  selector: 'app-passed-cars',
  templateUrl: './passed-cars.component.html',
  styleUrls: ['./passed-cars.component.scss']
})
export class PassedCarsComponent implements OnInit {
  passedCars: Observable<any>;

  constructor(private store: Store< {car: carState}> ) {
    this.passedCars = store.select('car');
  }

  ngOnInit(): void {
  }


  addToActive(car: CarInterface) {
    this.store.dispatch(addToActive({ car: car }));
  }

}
