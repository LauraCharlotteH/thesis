import {Component, OnInit} from '@angular/core';
import {ScoreCardService} from '../../../services/score-card/score-card.service';
import {ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {ActiveStatus, ICookieScore} from '../../../interfaces/interfaces';
import {ThirdPartyAdjustComponent} from '../third-party-adjust/third-party-adjust.component';

@Component({
  selector: 'app-adjust',
  templateUrl: './adjust.component.html',
  styleUrls: ['./adjust.component.scss'],
})
export class AdjustComponent implements OnInit {
  selectedCookies: {[key: string]: ActiveStatus} = {
    adds: ActiveStatus.neutral,
    amazonAdds: ActiveStatus.neutral,
    thirdPartyAdds : ActiveStatus.neutral,
  };
  noOfThirdPartyCookies: number;

  constructor(public scoreCardService: ScoreCardService, protected modalCtrl: ModalController, private router: Router) { }

  ngOnInit() {}

  acceptAll(){
    //TODO how many cookies?
    const cookies: ICookieScore = {
      website: 'amazon.com',
      noOfCookies: 100,
      acceptedCookies: 100
    };
    this.scoreCardService.setCookies(cookies);
    console.log('confirming!');
    this.modalCtrl.dismiss();
    this.router.navigateByUrl('/wikipedia');
  }

  async acceptSettings(){
    //TODO how many cookies?
    const cookies: ICookieScore = {
      website: 'amazon.com',
      noOfCookies: 100,
      acceptedCookies: 100
    };
    this.scoreCardService.setCookies(cookies);
    console.log('confirming!');
    this.modalCtrl.dismiss();
    this.router.navigateByUrl('/wikipedia');
  }

  addsChange(event) {
    if(event.detail.value === 'on'){
      this.selectedCookies.adds = ActiveStatus.act;
      this.selectedCookies.amazonAdds = ActiveStatus.act;
      this.selectedCookies.thirdPartyAdds = ActiveStatus.act;
    }else{
      this.selectedCookies.adds = ActiveStatus.notact;
      this.selectedCookies.amazonAdds = ActiveStatus.notact;
      this.selectedCookies.thirdPartyAdds = ActiveStatus.notact;
    }
  }

  amazonAddsChange(event){
    if(event.detail.value === 'on'){
      this.selectedCookies.adds = (this.selectedCookies.thirdPartyAdds === ActiveStatus.act)?ActiveStatus.act: ActiveStatus.neutral;
      this.selectedCookies.amazonAdds = ActiveStatus.act;
    }else{
      this.selectedCookies.adds = (this.selectedCookies.thirdPartyAdds === ActiveStatus.notact)?ActiveStatus.notact: ActiveStatus.neutral;
      this.selectedCookies.amazonAdds = ActiveStatus.notact;
    }
  }

  thirdPartyAddsChange(event){
    if(event.detail.value === 'on'){
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
        console.log('data is: ' + data.data);
        this.noOfThirdPartyCookies = data;
      } else {
        //no data means "accept all" was selected in other popup, so dismiss all
        this.modalCtrl.dismiss();
      }
    });
    return await modal.present();
  }

}
