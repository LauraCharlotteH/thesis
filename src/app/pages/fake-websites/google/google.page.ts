import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {PopUpComponent} from './modal/pop-up/pop-up.component';
import {ScoreCardService} from '../../../services/score-card/score-card.service';
import {ParticipantGroup} from '../../../interfaces/interfaces';
import {CookieAssistantComponent} from '../../../components/cookie-assistant/cookie-assistant.component';

@Component({
  selector: 'app-google',
  templateUrl: './google.page.html',
  styleUrls: ['./google.page.scss'],
})
export class GooglePage implements OnInit {

  constructor(public scoreCardService: ScoreCardService, protected modalCtrl: ModalController) { }

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
        website: 'google.de',
        nextURL: '/youtube',
        functional: 3,
        ads: 6,
        all: 6
      },
      cssClass: 'cookie-assistant'
    });
    return await modal.present();
  }

  async cg(){
    const modal = await this.modalCtrl.create({
      component: PopUpComponent,
      backdropDismiss: false,
      cssClass: 'google-modal'
    });
    return await modal.present();
  }

}
