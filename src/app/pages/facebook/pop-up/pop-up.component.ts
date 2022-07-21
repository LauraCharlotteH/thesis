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
    //functional only
    const cookies: ICookieScore = {
      website: 'facebook.com',
      noOfCookies: 8,
      acceptedCookies: 6
    };
    this.scoreCardService.setCookies(cookies);
    this.modalCtrl.dismiss();
    this.router.navigateByUrl('/amazon');
  }

  allowAll(){
    const cookies: ICookieScore = {
      website: 'facebook.com',
      noOfCookies: 8,
      acceptedCookies: 8
    };
    this.scoreCardService.setCookies(cookies);
    this.modalCtrl.dismiss();
    this.router.navigateByUrl('/amazon');
  }

}
