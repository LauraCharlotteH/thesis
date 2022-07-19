import { Component, OnInit } from '@angular/core';
import {PopUpComponent} from './modal/pop-up/pop-up.component';
import {ModalController} from '@ionic/angular';
import {ScoreCardService} from '../../services/score-card/score-card.service';
import {ParticipantGroup} from '../../interfaces/interfaces';
import {CookieAssistantComponent} from '../../components/cookie-assistant/cookie-assistant.component';

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
      componentProps: { //TODO include correct number of cookies!
        website: 'youtube.de',
        nextURL: '/facebook',
        functional: 4,
        ads: 5,
        all: 10
      },
      cssClass: 'cookie-assistant'
    });

    modal.onDidDismiss().then(async (data: any) => {
      if (data.data) {
        console.log('data is: ' + data.data);
      }
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

    modal.onDidDismiss().then(async (data: any) => {
      if (data.data) {
        console.log('data is: ' + data.data);
      }
    });
    return await modal.present();
  }

}
