import {Component, OnInit} from '@angular/core';
import {PopUpComponent} from './pop-up/pop-up.component';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-gmx',
  templateUrl: './gmx.page.html',
  styleUrls: ['./gmx.page.scss'],
})
export class GmxPage implements OnInit {

  constructor(protected modalCtrl: ModalController) {
  }

  async ngOnInit() {
    console.log('creating gmx modal...');
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
