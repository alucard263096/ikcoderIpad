import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterSetPasswordPage } from './register-set-password';

@NgModule({
  declarations: [
    RegisterSetPasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterSetPasswordPage),
  ],
  exports: [
    RegisterSetPasswordPage
  ]
})
export class RegisterSetPasswordPageModule {}
