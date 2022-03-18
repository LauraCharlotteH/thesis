import {Component, OnInit} from '@angular/core';
import {ActiveStatus} from '../../../../interfaces/interfaces';


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

  constructor() { }

  ngOnInit() {
  }

  confirm(){
    console.log('confirming!');
    //TODO
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
