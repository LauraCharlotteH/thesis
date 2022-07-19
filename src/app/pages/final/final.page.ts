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
  rawOplisScore: number;
  cluster: Cluster;
  acceptedCookies: number;

  constructor(public scoreCardService: ScoreCardService) { }

  ngOnInit() {
    this.group = this.scoreCardService.getGroup()? this.scoreCardService.getGroup(): null;
    this.cluster = this.scoreCardService.getCluster()? this.scoreCardService.getCluster(): null;
    this.rawOplisScore = this.scoreCardService.getResult()? this.scoreCardService.getResult().raw : -1;
    this.acceptedCookies = this.scoreCardService.getNumberOfAcceptedCookies()? this.scoreCardService.getNumberOfAcceptedCookies(): -1;
  }

}
