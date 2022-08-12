import { Component, OnInit } from '@angular/core';
import {ICookieScore} from '../../../../../interfaces/interfaces';
import {ScoreCardService} from '../../../../../services/score-card/score-card.service';
import {ModalController} from '@ionic/angular';
import {AdjustSettingsComponent} from '../adjust-settings/adjust-settings.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent implements OnInit {

  constructor(public scoreCardService: ScoreCardService, protected modalCtrl: ModalController, private router: Router) { }

  ngOnInit() {}

  acceptAll(){
    this.accept(6);
  }

  /**
   * functional cookies only
   */
  reject(){
    this.accept(3);
  }

  accept(noOfAcceptedCookies){
    const cookies: ICookieScore = {
      website: 'google.de',
      noOfCookies: 6,
      acceptedCookies: noOfAcceptedCookies
    };
    this.scoreCardService.setCookies(cookies);
    this.modalCtrl.dismiss();
    this.router.navigateByUrl('/youtube');
  }

  async adjustSettings(){
    this.modalCtrl.dismiss();
    const modal = await this.modalCtrl.create({
      component: AdjustSettingsComponent,
      backdropDismiss: false,
      cssClass: 'fullsize-adjust'
    });
    return await modal.present();
  }

}
