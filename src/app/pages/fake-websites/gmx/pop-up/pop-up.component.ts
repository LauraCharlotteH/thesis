import { Component, OnInit } from '@angular/core';
import {ScoreCardService} from '../../../../services/score-card/score-card.service';
import {ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {ICookieScore} from '../../../../interfaces/interfaces';
import {AdjustComponent} from '../adjust/adjust.component';
import {FurtherInfoComponent} from '../further-info/further-info.component';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent implements OnInit {

  constructor(public scoreCardService: ScoreCardService, protected modalCtrl: ModalController, private router: Router) {
  }

  ngOnInit() {
  }

  acceptAll() {
    const cookies: ICookieScore = {
      website: 'gmx.de',
      noOfCookies: 90,
      acceptedCookies: 90
    };
    this.scoreCardService.setCookies(cookies);
    this.modalCtrl.dismiss();
    this.router.navigateByUrl('/web');
  }

  async adjust(){
    const modal = await this.modalCtrl.create({
      component: AdjustComponent,
      backdropDismiss: false,
      cssClass: 'gmx-modal'
    });
    await this.modalCtrl.dismiss();
    return await modal.present();
  }

  async gotoFurtherInfo(){
    const modal = await this.modalCtrl.create({
      component: FurtherInfoComponent,
      backdropDismiss: false,
      cssClass: 'gmx-modal'
    });
    return await modal.present();
  }
}
