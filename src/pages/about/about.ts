import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FirstPage} from "../first/first";
import {SecondPage} from "../second/second";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  firstpage=FirstPage

  constructor(public navCtrl: NavController) {

  }
 goto()
 {
this.navCtrl.push(FirstPage,{"name":"FIRDAUS"});
 }
 gotosecond()
 {
   this.navCtrl.setRoot(SecondPage);
 }
}
