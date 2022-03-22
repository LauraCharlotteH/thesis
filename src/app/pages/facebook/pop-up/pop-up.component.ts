import { Component, OnInit } from '@angular/core';
import {ICookieScore} from '../../../interfaces/interfaces';
import {ScoreCardService} from '../../../services/score-card/score-card.service';
import {ModalController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent implements OnInit {

  constructor(public scoreCardService: ScoreCardService, protected modalCtrl: ModalController, private router: Router) { }

  ngOnInit() {}

  allowSome(){
    //TODO how many cookies?
    const cookies: ICookieScore = {
      website: 'facebook.com',
      noOfCookies: 100,
      acceptedCookies: 50
    };
    this.scoreCardService.setCookies(cookies);
    console.log('confirming!');
    this.modalCtrl.dismiss();
    this.router.navigateByUrl('/amazon');
  }

  allowAll(){
    //TODO how many cookies?
    const cookies: ICookieScore = {
      website: 'facebook.com',
      noOfCookies: 100,
      acceptedCookies: 100
    };
    this.scoreCardService.setCookies(cookies);
    console.log('confirming!');
    this.modalCtrl.dismiss();
    this.router.navigateByUrl('/amazon');
  }

}