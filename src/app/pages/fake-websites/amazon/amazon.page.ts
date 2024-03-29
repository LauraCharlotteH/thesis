import { Component, OnInit } from '@angular/core';
import {PopUpComponent} from './pop-up/pop-up.component';
import {ModalController} from '@ionic/angular';
import {ScoreCardService} from '../../../services/score-card/score-card.service';
import {ParticipantGroup} from '../../../interfaces/interfaces';
import {CookieAssistantComponent} from '../../../components/cookie-assistant/cookie-assistant.component';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.page.html',
  styleUrls: ['./amazon.page.scss'],
})
export class AmazonPage implements OnInit {

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
           website: 'amazon.de',
           nextURL: '/gmx',
           functional: 4,
           ads: 4,
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
       initialBreakpoint: 0.4,
       cssClass: 'amazon-modal'
     });
     return await modal.present();

   }

}
