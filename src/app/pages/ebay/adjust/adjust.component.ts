import {Component, OnInit, ViewChild} from '@angular/core';
import {IonContent} from '@ionic/angular';

@Component({
  selector: 'app-adjust',
  templateUrl: './adjust.component.html',
  styleUrls: ['./adjust.component.scss'],
})
export class AdjustComponent implements OnInit {
  @ViewChild(IonContent) content: IonContent;

  zwecke = [
    false, false, false, false,false, false,false, false,false, false,
  ];

  constructor() { }

  ngOnInit() {}

  scrollUp(){
    this.content.scrollToTop(300);
  }

  //todo remove!
  log(){
    console.log('Zwecke is: ' + this.zwecke);
  }

}
