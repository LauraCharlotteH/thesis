import {Component, Input, OnInit} from '@angular/core';
import {ScoreCardService} from '../../services/score-card/score-card.service';
import {Cluster, ParticipantGroup} from '../../interfaces/interfaces';
import textJson from './texts.json';
import {CookieConfirmComponent} from '../cookie-confirm/cookie-confirm.component';
import {ModalController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cookie-assistant',
  templateUrl: './cookie-assistant.component.html',
  styleUrls: ['./cookie-assistant.component.scss'],
})
export class CookieAssistantComponent implements OnInit {
  @Input() website;
  @Input() nextURL;
  @Input() functional;
  @Input() ads;
  @Input() all;
  header: string;
  cookieExplanation: string;
  thirdPartyExplanation: string;
  functionalInfo: string;
  funcExample: string;
  addInfo: string;
  addExample: string;
  allInfo: string;
  allExample: string;

  constructor(public scoreCardService: ScoreCardService, public modalCtrl: ModalController, public router: Router) {
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
    this.funcExample = textJson.low.funcExample;
    this.addInfo = textJson.low.adds;
    this.addExample = textJson.low.addsExample;
    this.allInfo = textJson.low.all;
    this.allExample = textJson.low.allExample;
    this.cookieExplanation = textJson.low.cookie;
    this.thirdPartyExplanation= textJson.low.thirdParty;
  }

  getMedTexts(){
    this.header = textJson.med.header;
    this.functionalInfo = textJson.med.functional;
    this.funcExample = textJson.med.funcExample;
    this.addInfo = textJson.med.adds;
    this.addExample = textJson.med.addsExample;
    this.allInfo = textJson.med.all;
    this.allExample = textJson.med.allExample;
    this.cookieExplanation = textJson.med.cookie;
    this.thirdPartyExplanation= textJson.med.thirdParty;
  }

  getHighTexts(){
    this.header = textJson.high.header;
    this.functionalInfo = textJson.high.functional;
    //this.funcExample = textJson.high.funcExample;
    this.addInfo = textJson.high.adds;
    //this.addExample = textJson.high.addsExample;
    this.allInfo = textJson.high.all;
    //this.allExample = textJson.high.allExample;
    this.cookieExplanation = textJson.high.cookie;
    this.thirdPartyExplanation= textJson.high.thirdParty;
  }

  async openConfirmPopup(selection: string, noCookies: number){
    const modal = await this.modalCtrl.create({
      component: CookieConfirmComponent,
      backdropDismiss: false,
      componentProps: {
        website: this.website,
        selection,
        amount: noCookies,
        maxCookies: this.all,
        nextURL: this.nextURL
      },
      cssClass: 'cookie-confirm'
    });

    modal.onDidDismiss().then(async (data: any) => {
      if (data.data) {
        console.log('data is: ' + data.data);
        await this.modalCtrl.dismiss();
        await this.router.navigateByUrl(this.nextURL);
      }
    });
    return await modal.present();
  }

}
