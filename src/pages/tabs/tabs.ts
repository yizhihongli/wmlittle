import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';

@IonicPage({name:'tabs'})

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'home';
  tab2Root = 'concern';
  tab3Root = 'news';
  tab4Root = 'me';

  constructor() {

  }
}
