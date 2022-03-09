import { Component, OnInit } from '@angular/core';
import { PopupService } from './popup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'car-service-app';
  popup!: boolean;

  constructor(private popupServ: PopupService) {
  }

  ngOnInit() {
    this.popupServ.popupStatus().subscribe(data => this.popup = data);
  }

  acceptPopup() {
    this.popupServ.moveToPassed();
  }

  denyPopup() {
    this.popupServ.togglePopup();
  }
}
