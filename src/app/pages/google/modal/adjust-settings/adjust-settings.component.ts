import {Component, OnInit} from '@angular/core';
import {ActiveStatus, ICookieScore} from '../../../../interfaces/interfaces';
import {ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {ScoreCardService} from '../../../../services/score-card/score-card.service';


@Component({
  selector: 'app-adjust-settings',
  templateUrl: './adjust-settings.component.html',
  styleUrls: ['./adjust-settings.component.scss'],
})
export class AdjustSettingsComponent implements OnInit {
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
    let acceptedCookies = 3;
    if(this.selectedCookies.suchanpassung === ActiveStatus.act){
      acceptedCookies ++;
    }
    if(this.selectedCookies.youtubeverlauf === ActiveStatus.act){
      acceptedCookies ++;
    }
    if(this.selectedCookies.personalisierteWerbung === ActiveStatus.act){
      acceptedCookies ++;
    }
    const cookies: ICookieScore = {
      website: 'google.de',
      noOfCookies: 6,
      acceptedCookies
    };
    this.scoreCardService.setCookies(cookies);
    console.log('confirming!');
    this.modalCtrl.dismiss();
    this.router.navigateByUrl('/youtube');
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
