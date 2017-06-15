import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";

/**
 * Generated class for the DeviceNotifyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-device-notify',
  templateUrl: 'device-notify.html',
})
export class DeviceNotifyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeviceNotifyPage');
  }

  OK() {
      this.navCtrl.push(TabsPage);
  }
  NO() {
      this.navCtrl.push(TabsPage);
  }

}
