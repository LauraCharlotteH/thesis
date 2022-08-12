import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {PopUpComponent} from './pop-up/pop-up.component';

@Component({
  selector: 'app-bild',
  templateUrl: './bild.page.html',
  styleUrls: ['./bild.page.scss'],
})
export class BildPage implements OnInit {

  constructor(protected modalCtrl: ModalController) { }

  async ngOnInit() {
    const modal = await this.modalCtrl.create({
      component: PopUpComponent,
      backdropDismiss: false,
      componentProps: {
        name: 'cluster is XXX'
      },
      cssClass: 'bild-modal'
    });
    return await modal.present();
  }

}
