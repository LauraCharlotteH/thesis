import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {PopUpComponent} from './pop-up/pop-up.component';
import {ScoreCardService} from '../../../services/score-card/score-card.service';
import {ParticipantGroup} from '../../../interfaces/interfaces';
import {CookieAssistantComponent} from '../../../components/cookie-assistant/cookie-assistant.component';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.page.html',
  styleUrls: ['./facebook.page.scss'],
})
export class FacebookPage implements OnInit {

  constructor(public scoreCardService: ScoreCardService, private modalCtrl: ModalController) { }

  async ngOnInit() {
    switch (this.scoreCardService.getGroup()) {
      case ParticipantGroup.personalisedpa:
        this.pa();
        break;
      case ParticipantGroup.pa:
        this.pa();
        break;
      case ParticipantGroup.controlGroup:
        this.cg();
    }
  }

  /**
   * The popup recognises the pa/ppa group and selects the texts accordingly
   */
  async pa(){
    const modal = await this.modalCtrl.create({
      component: CookieAssistantComponent,
      backdropDismiss: false,
      componentProps: {
        website: 'facebook.de',
        nextURL: '/amazon',
        functional: 6,
        ads: 8,
        all: 8
      },
      cssClass: 'cookie-assistant'
    });
    return await modal.present();
  }

  async cg(){
    const modal = await this.modalCtrl.create({
      component: PopUpComponent,
      backdropDismiss: false,
      cssClass: 'facebook-modal'
    });
    return await modal.present();
  }

}
