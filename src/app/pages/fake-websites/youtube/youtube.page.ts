import { Component, OnInit } from '@angular/core';
import {PopUpComponent} from './modal/pop-up/pop-up.component';
import {ModalController} from '@ionic/angular';
import {ScoreCardService} from '../../../services/score-card/score-card.service';
import {ParticipantGroup} from '../../../interfaces/interfaces';
import {CookieAssistantComponent} from '../../../components/cookie-assistant/cookie-assistant.component';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.page.html',
  styleUrls: ['./youtube.page.scss'],
})
export class YoutubePage implements OnInit {

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
        website: 'youtube.de',
        nextURL: '/facebook',
        functional: 7,
        ads: 9,
        all: 9
      },
      cssClass: 'cookie-assistant'
    });
    return await modal.present();
  }

  async cg(){
    const modal = await this.modalCtrl.create({
      component: PopUpComponent,
      backdropDismiss: false,
      componentProps: {
        name: 'cluster is XXX'
      },
      cssClass: 'youtube-modal'
    });
    return await modal.present();
  }

}
