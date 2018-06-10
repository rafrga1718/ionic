import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { DetallsPage } from '../detalls/detalls';

@Component({
  selector: 'llista',
  templateUrl: 'llista.html'
})
export class LlistaPage {
  icons: string[];
  titol: string[];
  text: string[];
  desc: string[];
  items: Array<{titol: string, text: string, icona: string, desc: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['../../assets/imgs/survivor.jpg', '../../assets/imgs/bullet.jpeg', '../../assets/imgs/eclipse.jpeg', '../../assets/imgs/halestorm.jpeg', '../../assets/imgs/mago.jpg', '../../assets/imgs/daisies.jpeg'];
    this.titol= ['Survivor','Bullet for my valentine', 'Eclipse','Halestorm', 'Mago de oz', 'The dead daisies'];
    this.text=['19/5/2018','1/6/2018', '12/7/2018','10/5/2018', '5/9/2018', '26/8/2018'];
    this.desc=['Rock','Metal', 'Hard rock','Metal alternativo', 'Folk metal', 'Heavy metal'];
    this.items = [];
    for(let i = 0; i < 6; i++) {
      this.items.push({
        titol: this.titol[i],
        text: this.text[i],
        icona: this.icons[i],
        desc: this.desc[i],
      });
    }
  }

  // itemPolsat(event, item) {
  //   this.navCtrl.push(DetallsPage, {
  //     item: item
  //   });
  // }
}
