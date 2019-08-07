import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { SignInPage } from '../sign-in/sign-in';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
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
}
