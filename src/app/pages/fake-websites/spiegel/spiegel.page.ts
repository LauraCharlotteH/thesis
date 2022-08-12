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
      cssClass: 'spiegel-modal'
    });
    return await modal.present();
  }

}
