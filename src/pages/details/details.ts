import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  personType = "Student";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  togglePerson() {
    if (this.personType == "Student") {
      this.personType = "Tutor"
    }
    else {
      this.personType = "Student"
    }
  }
  popPage() {
    this.navCtrl.pop()
  }
  approve() {
    this.popPage()
  }
  decline() {
    this.popPage()
  }

}
