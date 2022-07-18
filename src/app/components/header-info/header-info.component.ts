import { Component, OnInit } from '@angular/core';
import {ScoreCardService} from "../../services/score-card/score-card.service";

@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.component.html',
  styleUrls: ['./header-info.component.scss'],
})
export class HeaderInfoComponent implements OnInit {
  cluster = '?';
  group = '?';

  constructor(public scoreCardService: ScoreCardService) { }

  ngOnInit() {
    this.cluster = this.scoreCardService.getCluster()? this.scoreCardService.getCluster() : '?';
    this.group = this.scoreCardService.getGroup()? this.scoreCardService.getGroup(): '?';
  }

}
