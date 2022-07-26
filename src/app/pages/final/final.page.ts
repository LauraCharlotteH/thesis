import { Component, OnInit } from '@angular/core';
import {Cluster, ParticipantGroup} from '../../interfaces/interfaces';
import {ScoreCardService} from '../../services/score-card/score-card.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.page.html',
  styleUrls: ['./final.page.scss'],
})
export class FinalPage implements OnInit {
  group: ParticipantGroup;
  oplisScore: string;
  cluster: Cluster;
  acceptedCookies: number;

  constructor(public scoreCardService: ScoreCardService) { }

  ngOnInit() {
    this.group = this.scoreCardService.getGroup()? this.scoreCardService.getGroup(): null;
    this.cluster = this.scoreCardService.getCluster()? this.scoreCardService.getCluster(): null;
    this.acceptedCookies = this.scoreCardService.getNumberOfAcceptedCookies()? this.scoreCardService.getNumberOfAcceptedCookies(): -1;

    const rawOplisScore = this.scoreCardService.getResult()? this.scoreCardService.getResult().raw : -1;
    switch (rawOplisScore) {
      case 0:
        this.oplisScore = 'a';
        break;
      case 1:
        this.oplisScore = 'b';
        break;
      case 2:
        this.oplisScore = 'c';
        break;
      case 3:
        this.oplisScore = 'd';
        break;
      case 4:
        this.oplisScore = 'e';
        break;
      case 5:
        this.oplisScore = 'f';
        break;
      case 6:
        this.oplisScore = 'g';
        break;
      case 7:
        this.oplisScore = 'h';
        break;
      case 8:
        this.oplisScore = 'i';
        break;
      case 9:
        this.oplisScore = 'j';
        break;
      case 10:
        this.oplisScore = 'k';
        break;
      case 11:
        this.oplisScore = 'l';
        break;
      case 12:
        this.oplisScore = 'm';
        break;
      case 13:
        this.oplisScore = 'n';
        break;
      case 14:
        this.oplisScore = 'o';
        break;
      case 15:
        this.oplisScore = 'p';
        break;
      case 16:
        this.oplisScore = 'q';
        break;
      case 17:
        this.oplisScore = 'r';
        break;
      case 18:
        this.oplisScore = 's';
        break;
      case 19:
        this.oplisScore = 't';
        break;
      case 20:
        this.oplisScore = 'u';
        break;

    }
  }

}
