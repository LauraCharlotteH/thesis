import {Component, OnInit} from '@angular/core';
import {ICookieScore} from "../../../../interfaces/interfaces";
import {ScoreCardService} from "../../../../services/score-card/score-card.service";
import {ModalController} from "@ionic/angular";
import {Router} from "@angular/router";
import {AdjustComponent} from "../adjust/adjust.component";

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

  accept(noOfCookies?: number) {
    const acceptedCookies = (noOfCookies) ? noOfCookies : 40;
    //TODO how many cookies?
    const cookies: ICookieScore = {
      website: 'ebay.com',
      noOfCookies: 40,
      acceptedCookies
    };
    this.scoreCardService.setCookies(cookies);
    this.modalCtrl.dismiss();
    this.router.navigateByUrl('/final');
  }

  async adjust() {
    const modal = await this.modalCtrl.create({
      component: AdjustComponent,
      backdropDismiss: false,
      componentProps: {
        name: 'cluster is XXX'
      },
      cssClass: 'fullsize-adjust'
    });

    modal.onDidDismiss().then(async (data: any) => {
      if (data.data === 'accept all') {
        this.accept(); //noof Max cookies is stored in accept
      }else{
        //accepting the given number of cookies
        this.accept(data.data);
      }
    });
    return await modal.present();
    await this.modalCtrl.dismiss();
  }

  rejectAll() {
    //only functional accepted
    this.accept(21);
  }
}
