import {Component, Input, OnInit} from '@angular/core';
import {ScoreCardService} from '../../services/score-card/score-card.service';
import {Cluster, ParticipantGroup} from '../../interfaces/interfaces';
import textJson from './texts.json';
import {CookieConfirmComponent} from '../cookie-confirm/cookie-confirm.component';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-cookie-assistant',
  templateUrl: './cookie-assistant.component.html',
  styleUrls: ['./cookie-assistant.component.scss'],
})
export class CookieAssistantComponent implements OnInit {
  @Input() website;
  @Input() nextURL;
  @Input() functional;
  @Input()ads;
  @Input()all;

  parsed;
  header: string;
  functionalInfo: string;
  addInfo: string;
  allInfo: string;

  constructor(public scoreCardService: ScoreCardService, public modalCtrl: ModalController) {
  }

  /**
   * initialise with correct texts. PA gets medium cluster texts,
   * ctrl. group should not get this popup at all so not necessary and others get personalised texts
   */
  ngOnInit() {
    switch (this.scoreCardService.getGroup()) {
      case ParticipantGroup.pa:
        this.getMedTexts();
        break;
      case ParticipantGroup.personalisedpa:
        switch (this.scoreCardService.getCluster()) {
          case Cluster.low:
            this.getLowTexts();
            break;
          case Cluster.med:
            this.getMedTexts();
            break;
          case Cluster.high:
            this.getHighTexts();
            break;
        }
        break;

    }
  }

  getLowTexts(){
    this.header = textJson.low.header;
    this.functionalInfo = textJson.low.functional;
    this.addInfo = textJson.low.adds;
    this.allInfo = textJson.low.all;
  }

  getMedTexts(){
    this.header = textJson.med.header;
    this.functionalInfo = textJson.med.functional;
    this.addInfo = textJson.med.adds;
    this.allInfo = textJson.med.all;
  }

  getHighTexts(){
    this.header = textJson.high.header;
    this.functionalInfo = textJson.high.functional;
    this.addInfo = textJson.high.adds;
    this.allInfo = textJson.high.all;
  }

  async openConfirmPopup(selection: string, noCookies: number){
    const modal = await this.modalCtrl.create({
      component: CookieConfirmComponent,
      backdropDismiss: false,
      componentProps: { //TODO include correct number of cookies!
        website: this.website,
        selection,
        amount: noCookies,
        nextURL: this.nextURL
      },
      cssClass: 'cookie-confirm'
    });

    modal.onDidDismiss().then(async (data: any) => {
      if (data.data) {
        console.log('data is: ' + data.data);
      }
    });
    return await modal.present();
  }

}
