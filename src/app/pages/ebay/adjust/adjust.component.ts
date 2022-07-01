import {Component, OnInit, ViewChild} from '@angular/core';
import {IonContent} from '@ionic/angular';

@Component({
  selector: 'app-adjust',
  templateUrl: './adjust.component.html',
  styleUrls: ['./adjust.component.scss'],
})
export class AdjustComponent implements OnInit {
  @ViewChild(IonContent) content: IonContent;

  constructor() { }

  ngOnInit() {}

  scrollUp(){
    this.content.scrollToTop(300);
  }

}
