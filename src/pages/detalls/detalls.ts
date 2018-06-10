import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'detalls',
  templateUrl: 'detalls.html'
})
export class DetallsPage {
  itemSeleccionat: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itemSeleccionat = navParams.get('item');
  }
}
