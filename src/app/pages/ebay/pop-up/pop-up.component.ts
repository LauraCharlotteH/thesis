import {Component, OnInit} from '@angular/core';
import {ICookieScore} from "../../../interfaces/interfaces";
import {ScoreCardService} from "../../../services/score-card/score-card.service";
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
    const noOfC = (noOfCookies) ? noOfCookies : 100;
    //TODO how many cookies?
    const cookies: ICookieScore = {
      website: 'ebay.com',
      noOfCookies: noOfC,
      acceptedCookies: 100
    };
    this.scoreCardService.setCookies(cookies);
    console.log('confirming!');
    this.modalCtrl.dismiss();
    this.router.navigateByUrl('/final');
  }

  async adjust() {
    this.modalCtrl.dismiss();
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
        console.log('Accept all!');
        this.accept(); //noof Max cookies is stored in accept
      }else{
        //accepting the given number of cookies
        this.accept(data.data);
      }
    });
    return await modal.present();
  }

  rejectAll() {
    //TODO check if "reject all" really means 0 or "noOfFunctional"
    this.accept(0);
  }
}
