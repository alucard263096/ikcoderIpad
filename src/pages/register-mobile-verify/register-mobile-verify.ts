import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the RegisterMobileVerifyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-register-mobile-verify',
    templateUrl: 'register-mobile-verify.html',
})
export class RegisterMobileVerifyPage {

    toast = null;
    mobile: string = "";
    verifycode: string = "";
    constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
        this.mobile = navParams.get("mobile");
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegisterMobileVerifyPage');
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
        if (this.verifycode.trim().length !=4) {
            this.presentBottomToast("请填入4位验证码");
            return;
        }
        this.navCtrl.push("RegisterSetPasswordPage");
    }
}