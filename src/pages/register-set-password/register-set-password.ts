import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the RegisterSetPasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register-set-password',
  templateUrl: 'register-set-password.html',
})
export class RegisterSetPasswordPage {
    toast = null;
    display = false;
    password: string = "";
    constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterSetPasswordPage');
  }
  presentBottomToast(message) {
      if (this.toast != null) {
          this.toast.dismiss();
      }
      this.toast = this.toastCtrl.create({
          message: message,
          showCloseButton: true,
          duration: 10000,
          closeButtonText: "关闭"
      });
      this.toast.present();
  }
  Next() {
      if (this.password.trim().length < 8) {
          this.presentBottomToast("密码长度不能小于8位");
          return;
      }
      this.navCtrl.push(TabsPage);
  }
}
