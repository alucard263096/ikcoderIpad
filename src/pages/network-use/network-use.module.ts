import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NetworkUsePage } from './network-use';

@NgModule({
  declarations: [
    NetworkUsePage,
  ],
  imports: [
    IonicPageModule.forChild(NetworkUsePage),
  ],
  exports: [
    NetworkUsePage
  ]
})
export class NetworkUsePageModule {}
