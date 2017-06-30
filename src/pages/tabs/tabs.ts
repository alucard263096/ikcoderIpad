import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { MailboxPage } from '../mailbox/mailbox';
import { MemberPage } from '../member/member';

import { BasePage } from '../../app/base.page';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage extends BasePage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = MailboxPage;
  tab5Root = MemberPage;

  constructor(public modalCtrl: ModalController) {
      super();
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad LoginPage');


      if (!super.IsLogin()) {
          //let modal = this.modalCtrl.create("LoginPage");
          //modal.present();
      }
  }

}
