import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {PopUpComponent} from './pop-up/pop-up.component';

@Component({
  selector: 'app-spiegel',
  templateUrl: './spiegel.page.html',
  styleUrls: ['./spiegel.page.scss'],
})
export class SpiegelPage implements OnInit {constructor(protected modalCtrl: ModalController) { }

  async ngOnInit() {
    const modal = await this.modalCtrl.create({
      component: PopUpComponent,
      backdropDismiss: false,
      componentProps: {
        name: 'cluster is XXX'
      },
      cssClass: 'spiegel-modal'
    });

    modal.onDidDismiss().then(async (data: any) => {
      if (data.data) {
        console.log('data is: ' + data.data);
      }
    });
    return await modal.present();
  }

}
