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
  }

  addsAus(){
    this.selectedCookies.personalisierteWerbung = ActiveStatus.notact;
  }

}
