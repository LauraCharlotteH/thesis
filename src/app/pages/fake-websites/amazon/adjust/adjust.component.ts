import {Component, OnInit} from '@angular/core';
import {ScoreCardService} from '../../../../services/score-card/score-card.service';
import {ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {ActiveStatus, ICookieScore} from '../../../../interfaces/interfaces';
import {ThirdPartyAdjustComponent} from '../third-party-adjust/third-party-adjust.component';

@Component({
  selector: 'app-adjust',
  templateUrl: './adjust.component.html',
  styleUrls: ['./adjust.component.scss'],
})
export class AdjustComponent implements OnInit {
  selectedCookies: {[key: string]: ActiveStatus} = {
    adds: ActiveStatus.notact,
    amazonAdds: ActiveStatus.notact,
    thirdPartyAdds : ActiveStatus.notact,
  };
  noOfThirdPartyCookies: number;

  constructor(public scoreCardService: ScoreCardService, protected modalCtrl: ModalController, private router: Router) { }

  ngOnInit() {}

  acceptAll(){
    const cookies: ICookieScore = {
      website: 'amazon.com',
      noOfCookies: 6,
      acceptedCookies: 6
    };
    this.scoreCardService.setCookies(cookies);
    this.modalCtrl.dismiss();
    this.router.navigateByUrl('/gmx');
  }

  async acceptSettings(){
    let acceptedCookies = 4; //functional cookies always active
    if (this.selectedCookies.adds === ActiveStatus.act){
      acceptedCookies = 6; //all cookies
    }else{
      if(this.selectedCookies.amazonAdds === ActiveStatus.act){
        acceptedCookies = 5; //func + own add
      }
      if(this.selectedCookies.thirdPartyAdds === ActiveStatus.act){
        acceptedCookies = 5; //func + 3rd party add
      }
    }
    const cookies: ICookieScore = {
      website: 'amazon.com',
      noOfCookies: 6,
      acceptedCookies
    };
    this.scoreCardService.setCookies(cookies);
    this.modalCtrl.dismiss();
    this.router.navigateByUrl('/gmx');
  }

  addsChange(event) {
    if(event.detail.value === 'ACTIVE'){
      this.selectedCookies.adds = ActiveStatus.act;
      this.selectedCookies.amazonAdds = ActiveStatus.act;
      this.selectedCookies.thirdPartyAdds = ActiveStatus.act;
    }else if(event.detail.value === 'NOTACTIVE'){
      this.selectedCookies.adds = ActiveStatus.notact;
      this.selectedCookies.amazonAdds = ActiveStatus.notact;
      this.selectedCookies.thirdPartyAdds = ActiveStatus.notact;
    }
  }

  amazonAddsChange(event){
    if(event.detail.value === 'ACTIVE'){
      this.selectedCookies.adds = (this.selectedCookies.thirdPartyAdds === ActiveStatus.act)?ActiveStatus.act: ActiveStatus.neutral;
      this.selectedCookies.amazonAdds = ActiveStatus.act;
    }else{
      this.selectedCookies.adds = (this.selectedCookies.thirdPartyAdds === ActiveStatus.notact)?ActiveStatus.notact: ActiveStatus.neutral;
      this.selectedCookies.amazonAdds = ActiveStatus.notact;
    }
  }

  thirdPartyAddsChange(event){
    if(event.detail.value === 'ACTIVE'){
      this.selectedCookies.adds = (this.selectedCookies.amazonAdds === ActiveStatus.act)?ActiveStatus.act: ActiveStatus.neutral;
      this.selectedCookies.thirdPartyAdds = ActiveStatus.act;
    }else{
      this.selectedCookies.adds = (this.selectedCookies.amazonAdds === ActiveStatus.notact)?ActiveStatus.notact: ActiveStatus.neutral;
      this.selectedCookies.thirdPartyAdds = ActiveStatus.notact;
    }
  }

  async thirdPartyAdjust(){
    const modal = await this.modalCtrl.create({
      component: ThirdPartyAdjustComponent,
      backdropDismiss: false,
      componentProps: {
        name: 'cluster is XXX'
      },
      cssClass: 'fullsize-adjust'
    });

    modal.onDidDismiss().then(async (data: any) => {
      if (data.data) {
        this.noOfThirdPartyCookies = data;
      } else {
        //no data means "accept all" was selected in other popup, so dismiss all
        this.modalCtrl.dismiss();
      }
    });
    return await modal.present();
  }

}
