import {Component, Input, OnInit} from '@angular/core';
import {ICookieScore} from '../../interfaces/interfaces';
import {ModalController} from '@ionic/angular';
import {ScoreCardService} from '../../services/score-card/score-card.service';

@Component({
  selector: 'app-cookie-confirm',
  templateUrl: './cookie-confirm.component.html',
  styleUrls: ['./cookie-confirm.component.scss'],
})
export class CookieConfirmComponent implements OnInit {
  @Input() website;
  @Input() selection;
  @Input() amount;
  @Input() maxCookies;
  @Input() nextURL;

  constructor(public modalCtrl: ModalController, public scoreCardService: ScoreCardService) { }

  ngOnInit() {}

  confirm(){
    const cookies: ICookieScore = {
      website: this.website,
      noOfCookies: this.maxCookies,
      acceptedCookies: this.amount
    };
    this.scoreCardService.setCookies(cookies);
    this.modalCtrl.dismiss('confirm at: ' + this.website );
  }

  return(){
    this.modalCtrl.dismiss();
  }

}
