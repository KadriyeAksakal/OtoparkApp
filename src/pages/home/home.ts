import { Component, } from '@angular/core';
import { NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

/* @ViewChild(Slides) Slides:Slides;*/
  constructor(public navCtrl: NavController) {
  }
/*
  slideChanged(){
    this.toast.create({
      message:'Slide changed'
    }).present();
  }

  ionViewDidload(){
    setTimeout(()=> 
    this.Slides.slideTo(2, 1000)
    , 1000);
  }*/

}
