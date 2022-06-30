import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {PopUpComponent} from './pop-up/pop-up.component';

@Component({
  selector: 'app-web',
  templateUrl: './web.page.html',
  styleUrls: ['./web.page.scss'],
})
export class WebPage implements OnInit {

  constructor(protected modalCtrl: ModalController) { }

  async ngOnInit() {
    const modal = await this.modalCtrl.create({
      component: PopUpComponent,
      backdropDismiss: false,
      componentProps: {
        name: 'cluster is XXX'
      },
      cssClass: 'gmx-modal'
    });

    modal.onDidDismiss().then(async (data: any) => {
      if (data.data) {
        console.log('data is: ' + data.data);
      }
    });
    return await modal.present();
  }

}
