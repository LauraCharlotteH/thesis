import {Component, Input, OnInit} from '@angular/core';
import {ICookieScore} from '../../interfaces/interfaces';
import {ModalController} from '@ionic/angular';
import {ScoreCardService} from '../../services/score-card/score-card.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cookie-confirm',
  templateUrl: './cookie-confirm.component.html',
  styleUrls: ['./cookie-confirm.component.scss'],
})
export class CookieConfirmComponent implements OnInit {
  @Input() website;
  @Input() selection;
  @Input() amount;
  @Input() nextURL;

  constructor(public modalCtrl: ModalController, public scoreCardService: ScoreCardService, public router: Router) { }

  ngOnInit() {}

  confirm(){
    const cookies: ICookieScore = {
      website: this.website,
      noOfCookies: 100,
      acceptedCookies: this.amount
    };
    this.scoreCardService.setCookies(cookies);
    this.modalCtrl.dismiss();
    this.router.navigateByUrl(this.nextURL);
  }

  return(){
    this.modalCtrl.dismiss();
  }

}
