import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { LlistaPage } from '../llista/llista';
import { CameraPage } from '../camera/camera';
import { BaseDadesPage } from '../sqlite/sqlite'
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = LlistaPage;
  tab3Root = ContactPage;
  tab4Root = CameraPage;
  tab5Root = BaseDadesPage;
  constructor() {

  }
}
