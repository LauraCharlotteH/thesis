import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {PopUpComponent} from './pop-up/pop-up.component';

@Component({
  selector: 'app-ebay',
  templateUrl: './ebay.page.html',
  styleUrls: ['./ebay.page.scss'],
})
export class EbayPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  async ngOnInit() {
    const modal = await this.modalCtrl.create({
      component: PopUpComponent,
      backdropDismiss: false,
      breakpoints: [1],
      initialBreakpoint: 1,
      handle: false,
      componentProps: {
        name: 'cluster is XXX'
      },
      cssClass: 'ebay-modal'
    });

    modal.onDidDismiss().then(async (data: any) => {
      if (data.data) {
        console.log('data is: ' + data.data);
      }
    });
    return await modal.present();

  }

}
