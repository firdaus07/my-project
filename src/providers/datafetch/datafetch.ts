import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {load} from "@ionic/cli-plugin-ionic-angular/dist/lib/modules";

/*
  Generated class for the DatafetchProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependhttps://vehiccle.herokuapp.com/welcomeency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DatafetchProvider {
  data: any;

  constructor(public http: Http) {
    console.log('Hello DatafetchProvider Provider');
  }


  load() {

    if (this.data) {
      console.log("g");
      //return Promise.resolve(this.data);
      return new Promise(resolve => {

        this.http.get('https://vehiccle.herokuapp.com/welcome')
          .map(res => res.json())
          .subscribe(data => {
              this.data = data;
              resolve(this.data);
              //console.log("reloaded");
            },
            err => {
              console.log("Oops!");
            }
          );
      });
    }
    return new Promise(resolve => {
      this.http.get('https://vehiccle.herokuapp.com/welcome')
        .map(res => res.json())
        .subscribe(data => {
            this.data = data;
            resolve(this.data);
            //console.log("reloaded");
          },
          err => {
            console.log("Oops!");
          }
        );
    });
  }


}
