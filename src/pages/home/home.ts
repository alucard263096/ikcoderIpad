import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    hello = ["a", "b", "c", "d","e"];
    constructor(public navCtrl: NavController) {
        for (let item of this.hello) {
            alert(item);
        }
    }
}
