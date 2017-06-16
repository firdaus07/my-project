import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecongPage } from './secong';

@NgModule({
  declarations: [
    SecongPage,
  ],
  imports: [
    IonicPageModule.forChild(SecongPage),
  ],
  exports: [
    SecongPage
  ]
})
export class SecongPageModule {}
