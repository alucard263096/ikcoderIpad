import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the RegisterNamePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-register-name',
    templateUrl: 'register-name.html',
})
export class RegisterNamePage {
    name:string = "";
    familyname: string = "";
    toast = null;
    constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegisterNamePage');
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
        if (this.name.trim() == "" && this.familyname.trim() == "") {
            this.presentBottomToast("姓氏和名字不能为空");
            return;
        }
        if (this.familyname.trim() == "") {
            this.presentBottomToast("姓氏不能为空");
            return;
        }
        if (this.name.trim() == "" ) {
            this.presentBottomToast("名字不能为空");
            return;
        }
    }
}
