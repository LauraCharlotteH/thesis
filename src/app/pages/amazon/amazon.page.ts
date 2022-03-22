import { Component, OnInit } from '@angular/core';
import {PopUpComponent} from './pop-up/pop-up.component';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.page.html',
  styleUrls: ['./amazon.page.scss'],
})
export class AmazonPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

   async ngOnInit() {
     const modal = await this.modalCtrl.create({
       component: PopUpComponent,
       backdropDismiss: false,
       initialBreakpoint: 0.4,
       componentProps: {
         name: 'cluster is XXX'
       },
       cssClass: 'amazon-modal'
     });

     modal.onDidDismiss().then(async (data: any) => {
       if (data.data) {
         console.log('data is: ' + data.data);
       }
     });
     return await modal.present();

   }

}
