import { Component } from '@angular/core';
import { NavController,  NavParams } from 'ionic-angular';
import {BackgroundGeolocation} from '@ionic-native/background-geolocation'
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams:NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidload ContactPage');
  }
getOtopark
nasilGiderim()
  {
     this.navCtrl.push(BackgroundGeolocation);
  }

}

var json;

this.http.get('link/to/your/api').map(res => res.json()).subscribe(data => {
       json = data;
   });
   var qp = []
for (var i of json.data) {
 qp.push(i.quantity_produced);
}
