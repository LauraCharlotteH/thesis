import { Component, OnInit } from '@angular/core';
import {ICookieScore} from "../../../../interfaces/interfaces";
import {ScoreCardService} from "../../../../services/score-card/score-card.service";

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent implements OnInit {

  constructor(public scoreCardService: ScoreCardService) { }

  ngOnInit() {}

  //TODO find out how many cookies and set accoridingly!
  acceptAll(){
    const cookies: ICookieScore = {
      website: 'google.de',
      noOfCookies: 100,
      acceptedCookies: 100
    };
    this.scoreCardService.setCookies(cookies);
  }

}
