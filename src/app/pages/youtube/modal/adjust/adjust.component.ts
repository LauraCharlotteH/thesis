import { Component, OnInit } from '@angular/core';
import {ActiveStatus, ICookieScore} from '../../../../interfaces/interfaces';
import {ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {ScoreCardService} from "../../../../services/score-card/score-card.service";

@Component({
  selector: 'app-adjust',
  templateUrl: './adjust.component.html',
  styleUrls: ['./adjust.component.scss'],
})
export class AdjustComponent implements OnInit {
  selectedCookies: {[key: string]: ActiveStatus} = {
    suchanpassung: ActiveStatus.neutral,
    youtubeverlauf: ActiveStatus.neutral,
    personalisierteWerbung : ActiveStatus.neutral,
    pWSuche : ActiveStatus.neutral,
    pWWeb: ActiveStatus.neutral,
  };

  constructor(public scoreCardService: ScoreCardService, protected modalCtrl: ModalController, private router: Router) { }

  ngOnInit() {
  }

  confirm(){
    //TODO how many cookies?
    const cookies: ICookieScore = {
      website: 'youtube.de',
      noOfCookies: 100,
      acceptedCookies: 100
    };
    this.scoreCardService.setCookies(cookies);
    console.log('confirming!');
    this.modalCtrl.dismiss();
    this.router.navigateByUrl('/facebook');
  }
  suchanpassungAn(){
    this.selectedCookies.suchanpassung = ActiveStatus.act;
  }

  suchanpassungAus(){
    this.selectedCookies.suchanpassung = ActiveStatus.notact;
  }

  youtubeVerlaufAn(){
    this.selectedCookies.youtubeverlauf = ActiveStatus.act;
  }

  youtubeVerlaufAus(){
    this.selectedCookies.youtubeverlauf = ActiveStatus.notact;
  }

  addsAn(){
    this.selectedCookies.personalisierteWerbung = ActiveStatus.act;
    this.selectedCookies.pWSuche = ActiveStatus.act;
    this.selectedCookies.pWWeb = ActiveStatus.act;
  }

  addsAus(){
    this.selectedCookies.personalisierteWerbung = ActiveStatus.notact;
    this.selectedCookies.pWSuche = ActiveStatus.notact;
    this.selectedCookies.pWWeb = ActiveStatus.notact;
  }

  pWSucheAn(){
    this.selectedCookies.pWSuche = ActiveStatus.act;
    if(this.selectedCookies.pWWeb === ActiveStatus.act){
      this.selectedCookies.personalisierteWerbung = ActiveStatus.act;
    }else {
      this.selectedCookies.personalisierteWerbung = ActiveStatus.neutral;
    }
  }

  pWSucheAus(){
    this.selectedCookies.pWSuche = ActiveStatus.notact;
    if(this.selectedCookies.pWWeb === ActiveStatus.notact){
      this.selectedCookies.personalisierteWerbung = ActiveStatus.notact;
    } else {
      this.selectedCookies.personalisierteWerbung = ActiveStatus.neutral;
    }
  }

  pWWebAn(){
    this.selectedCookies.pWWeb = ActiveStatus.act;
    if(this.selectedCookies.pWSuche === ActiveStatus.act){
      this.selectedCookies.personalisierteWerbung = ActiveStatus.act;
    }else {
      this.selectedCookies.personalisierteWerbung = ActiveStatus.neutral;
    }
  }

  pWWebAus(){
    this.selectedCookies.pWWeb = ActiveStatus.notact;
    if(this.selectedCookies.pWSuche === ActiveStatus.notact){
      this.selectedCookies.personalisierteWerbung = ActiveStatus.notact;
    }else {
      this.selectedCookies.personalisierteWerbung = ActiveStatus.neutral;
    }
  }

}
