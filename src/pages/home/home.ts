import { Component } from '@angular/core';
import { NavController, IonicPage} from 'ionic-angular';

@IonicPage({
  name: 'home',
})

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  selectType: string = "recommend";
  slidesItems;//幻灯片

  constructor(public navCtrl: NavController) {
    this.initSlides();

  }

  //幻灯片
  initSlides(){
    this.slidesItems=[
      {img:'http://img0.imgtn.bdimg.com/it/u=3257646633,1556214097&fm=26&gp=0.jpg'},
      {img:'http://img0.imgtn.bdimg.com/it/u=263830569,1490138553&fm=26&gp=0.jpg'},
      {img:'http://img3.imgtn.bdimg.com/it/u=1845333299,2432678824&fm=26&gp=0.jpg' },
    ];
  }

}
