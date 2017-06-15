import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterMobileVerifyPage } from './register-mobile-verify';

@NgModule({
  declarations: [
    RegisterMobileVerifyPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterMobileVerifyPage),
  ],
  exports: [
    RegisterMobileVerifyPage
  ]
})
export class RegisterMobileVerifyPageModule {}
