import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {PopUpComponent} from './modal/pop-up/pop-up.component';
import {ScoreCardService} from '../../services/score-card/score-card.service';
import {ParticipantGroup} from '../../interfaces/interfaces';
import {CookieAssistantComponent} from "../../components/cookie-assistant/cookie-assistant.component";

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
        this.ppa();
        break;
      case ParticipantGroup.pa:
        this.pa();
        break;
      case ParticipantGroup.controlGroup:
        this.cg();

    }

  }

  async ppa(){}

  async pa(){
    const modal = await this.modalCtrl.create({
      component: CookieAssistantComponent,
      backdropDismiss: false,
      componentProps: { //TODO include correct number of cookies!
        website: 'google',
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
      cssClass: 'google-modal'
    });

    modal.onDidDismiss().then(async (data: any) => {
      if (data.data) {
        console.log('data is: ' + data.data);
      }
    });
    return await modal.present();
  }

}
