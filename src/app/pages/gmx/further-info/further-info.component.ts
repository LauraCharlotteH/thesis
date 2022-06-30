import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-further-info',
  templateUrl: './further-info.component.html',
  styleUrls: ['./further-info.component.scss'],
})
export class FurtherInfoComponent implements OnInit {

  constructor(protected modalCtrl: ModalController) { }

  ngOnInit() {}

  async goBack(){
    await this.modalCtrl.dismiss();
  }

}
