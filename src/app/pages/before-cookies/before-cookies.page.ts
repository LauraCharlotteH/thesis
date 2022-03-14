import { Component, OnInit } from '@angular/core';
import {Cluster} from '../../interfaces/interfaces';
import {ScoreCardService} from '../../services/score-card/score-card.service';

@Component({
  selector: 'app-before-cookies',
  templateUrl: './before-cookies.page.html',
  styleUrls: ['./before-cookies.page.scss'],
})
export class BeforeCookiesPage implements OnInit {
  cluster: Cluster;

  constructor(public scoreCardService: ScoreCardService) { }

  ngOnInit() {
    this.cluster = this.scoreCardService.cluster;
  }

}
