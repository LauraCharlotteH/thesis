import { Component, OnInit } from '@angular/core';
import {PopUpComponent} from '../youtube/modal/pop-up/pop-up.component';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.page.html',
  styleUrls: ['./youtube.page.scss'],
})
export class YoutubePage implements OnInit {

  constructor(protected modalCtrl: ModalController) { }

  async ngOnInit() {

    const modal = await this.modalCtrl.create({
      component: PopUpComponent,
      backdropDismiss: false,
      componentProps: {
        name: 'cluster is XXX'
      },
      cssClass: 'youtube-modal'
    });

    modal.onDidDismiss().then(async (data: any) => {
      if (data.data) {
        console.log('data is: ' + data.data);
      }
    });
    return await modal.present();
  }

}
