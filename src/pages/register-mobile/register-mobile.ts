import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the RegisterMobilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-register-mobile',
    templateUrl: 'register-mobile.html',
})
export class RegisterMobilePage {
    toast = null;
    mobile: string = "";
    constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegisterMobilePage');
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
        if (this.checkMobile(this.mobile.trim()) == false) {
            this.presentBottomToast("不是完整的11位手机号或者正确的手机号前七位");
            return;
        }
        this.navCtrl.push("RegisterMobileVerifyPage", { mobile: this.mobile });
    }
    checkMobile(sMobile) {
        if (!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(sMobile))) {
            return false;
        }
        return true;
    }
}
