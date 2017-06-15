import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterMobilePage } from './register-mobile';

@NgModule({
  declarations: [
    RegisterMobilePage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterMobilePage),
  ],
  exports: [
    RegisterMobilePage
  ]
})
export class RegisterMobilePageModule {}
