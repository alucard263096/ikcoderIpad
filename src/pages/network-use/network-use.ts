import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NetworkUsePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-network-use',
  templateUrl: 'network-use.html',
})
export class NetworkUsePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NetworkUsePage');
  }

  OK() {
      this.navCtrl.push("DeviceNotifyPage");
  }
  NO() {
      this.navCtrl.push("DeviceNotifyPage");
  }
}
