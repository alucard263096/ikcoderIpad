import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { MailboxPage } from '../pages/mailbox/mailbox';
import { MemberPage } from '../pages/member/member';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
    declarations: [
        MyApp,
        LoginPage,
        AboutPage,
        ContactPage,
        HomePage,
        MailboxPage,
        MemberPage,
        TabsPage
    ],
    imports: [
        ChartsModule,
        BrowserModule, //for 3.0
        IonicModule.forRoot(MyApp, {
            backButtonText: '',
            iconMode: 'ios',
            modalEnter: 'modal-slide-in',
            modalLeave: 'modal-slide-out',
            tabsPlacement: 'bottom',
            pageTransition: 'ios',
            backButtonIcon: "ios-arrow-back",
            statusbarPadding: false
        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        LoginPage,
        AboutPage,
        ContactPage,
        HomePage,
        MailboxPage,
        MemberPage,
        TabsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule {}
