import { Component } from '@angular/core';
import {ParticipantGroup} from '../interfaces/interfaces';
import {ScoreCardService} from '../services/score-card/score-card.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public scoreCardService: ScoreCardService) {}

  selectionChange(e){
    switch (e.detail.value) {
      case 'ppa':
        this.scoreCardService.setGroup(ParticipantGroup.personalisedpa);
        break;
      case 'pa':
        this.scoreCardService.setGroup(ParticipantGroup.pa);
        break;
      case 'cg':
        this.scoreCardService.setGroup(ParticipantGroup.controlGroup);
        break;
    }
  }

}
