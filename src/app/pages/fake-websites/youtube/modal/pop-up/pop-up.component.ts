import { Component, OnInit } from '@angular/core';
import {ICookieScore} from '../../../../../interfaces/interfaces';
import {ScoreCardService} from '../../../../../services/score-card/score-card.service';
import {ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {AdjustComponent} from '../adjust/adjust.component';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent implements OnInit {

  constructor(public scoreCardService: ScoreCardService, protected modalCtrl: ModalController, private router: Router) { }

  ngOnInit() {}

  acceptAll(){
    this.accept(9);
  }

  /**
   * accept only functional cookies
   */
  reject(){
    this.accept(7);
  }

  accept(noOAcceptedCookies){
    const cookies: ICookieScore = {
      website: 'youtube.de',
      noOfCookies: 9,
      acceptedCookies: noOAcceptedCookies
    };
    this.scoreCardService.setCookies(cookies);
    this.modalCtrl.dismiss();
    this.router.navigateByUrl('/facebook');
  }

  async adjustSettings(){
    this.modalCtrl.dismiss();
    const modal = await this.modalCtrl.create({
      component: AdjustComponent,
      backdropDismiss: false,
      cssClass: 'fullsize-adjust'
    });
    return await modal.present();
  }

}
