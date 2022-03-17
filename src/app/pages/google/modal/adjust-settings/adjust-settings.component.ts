import {Component, OnInit} from '@angular/core';
import {ActiveStatus} from '../../../../interfaces/interfaces';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-adjust-settings',
  templateUrl: './adjust-settings.component.html',
  styleUrls: ['./adjust-settings.component.scss'],
})
export class AdjustSettingsComponent implements OnInit {
  selectedCookies: {[key: string]: ActiveStatus} = {
    suchanpassung: ActiveStatus.neutral,
    voutubeverlauf: ActiveStatus.neutral,
    personalisierteWerbung : ActiveStatus.neutral,
    pWSuche : ActiveStatus.neutral,
    pWWeb: ActiveStatus.neutral,
  }


  constructor() { }

  ngOnInit() {
  }

  suchanpassungAn(){
    this.selectedCookies.suchanpassung = ActiveStatus.act;
  }

  suchanpassungAus(){
    this.selectedCookies.suchanpassung = ActiveStatus.notact;
  }

}
