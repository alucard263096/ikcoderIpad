import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterNamePage } from './register-name';

@NgModule({
  declarations: [
    RegisterNamePage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterNamePage),
  ],
  exports: [
    RegisterNamePage
  ]
})
export class RegisterNamePageModule {}
