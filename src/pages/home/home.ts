import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SecondPage} from "../second/second";
import {DatafetchProvider} from "../../providers/datafetch/datafetch";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
username:string="";
password:string="";
addcomment:string;
student_name:string;
student_batch:string;
student_year:string;
comment:any=["abc", "def","ghi"];
subjects:any=[{"name":"Maths","code":"1"},
             {"name":"English","code":"2"},
             {"name":"Science","code":"3"},
             {"name":"Economics","code":"4"},
             {"name":"History","code":"5"}];
students:any;
delcomment:string;

  constructor(public navCtrl: NavController, public datafetch:DatafetchProvider) {
    this.getdata();
  }
  getdata(){
    this.datafetch.load().then((data)=>{
      //this.students=data;
      console.log(data);
    })
  }

gotosecond()
{
  this.navCtrl.setRoot(SecondPage);
}

addcomments()
{
  this.comment.push(this.addcomment);
  this.addcomment="";
}

login()
{
  if(this.username=="Firdaus" && this.password=="1234567")
  {
    this.navCtrl.push(SecondPage,{"user":this.username});
  }
}
delcomments(i)
{
  (this.subjects).splice(i , 1);
}

details(){
    this.students.push({"name":this.student_name, "batch":this.student_batch, "year":this.student_year});
  this.student_name="";
  this.student_batch="";
  this.student_year="";

}

}
