import { Component, OnInit } from '@angular/core';
import {PopUpComponent} from './pop-up/pop-up.component';
import {ModalController} from '@ionic/angular';
import {ScoreCardService} from '../../services/score-card/score-card.service';
import {ParticipantGroup} from '../../interfaces/interfaces';
import {CookieAssistantComponent} from '../../components/cookie-assistant/cookie-assistant.component';

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
           nextURL: '/wikipedia',
           functional: 4,
           ads: 4,
           all: 6
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
       initialBreakpoint: 0.4,
       componentProps: {
         name: 'cluster is XXX'
       },
       cssClass: 'amazon-modal'
     });

     modal.onDidDismiss().then(async (data: any) => {
       if (data.data) {
         console.log('data is: ' + data.data);
       }
     });
     return await modal.present();

   }

}
