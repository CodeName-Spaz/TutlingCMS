import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { SignInPage } from '../sign-in/sign-in';
import { StatsPage } from '../stats/stats';

declare var firebase;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tutors = new Array();
  keys = new Array();

  constructor(public navCtrl: NavController) {
  }
//   saveApplication(id,trans,sub){
//     return new Promise((accpt, rej) =>{
//       var user = firebase.auth().currentUser;
//       var date = new Date();
//       var timestamp = date.getTime();
//       firebase.database().ref("Applications/" + user.uid).set({
//         Date: moment().format('l'),
//         convo : timestamp,
//         id : id,
//         trans: trans,
//         sub:sub,
//     })
//     this.checkVerificatiom();
//    accpt('')
// })
//   }
  storeTutors(tut,k){
    this.tutors.push(tut);
    this.keys.push(k)
    console.log(this.tutors)
  }

  ionViewWillEnter(){
    return new Promise((resolve, reject) => {
        firebase.database().ref("users/").on("value", (data: any) => {
          var details  =  data.val();
          var keys = Object.keys(details);
          for (var x = 0; x < keys.length; x++){
            var k = keys[x];
            firebase.database().ref("users/" + k).on("value", (data2: any) => {
              var users = data2.val();
              var keys2 = Object.keys(users);
                if (users.role == "tutor" && users.status == "pending"){
                    this.storeTutors(users,k)
                }
            })
          }
    })
  })
    
  }

  showDetails(){
    this.navCtrl.push(DetailsPage)
  }

  reload(){
    // window.location.reload()
    this.navCtrl.push(SignInPage)
  }

  logOut(){
    this.navCtrl.setRoot(SignInPage)
  }
  showCharts(){
    this.navCtrl.push(StatsPage)
  }
}
