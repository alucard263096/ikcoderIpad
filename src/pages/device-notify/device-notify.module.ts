import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeviceNotifyPage } from './device-notify';

@NgModule({
  declarations: [
    DeviceNotifyPage,
  ],
  imports: [
    IonicPageModule.forChild(DeviceNotifyPage),
  ],
  exports: [
    DeviceNotifyPage
  ]
})
export class DeviceNotifyPageModule {}
