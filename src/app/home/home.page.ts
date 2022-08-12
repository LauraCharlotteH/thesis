import { Component } from '@angular/core';
import {ParticipantGroup} from '../interfaces/interfaces';
import {ScoreCardService} from '../services/score-card/score-card.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

/**
 * First page the user gets to see, allows selection of participant group (stores it in score-card). Only when this is
 * put in does the page allow the user to continue
 */
export class HomePage {
  selection = false;

  constructor(public scoreCardService: ScoreCardService) {}

  /**
   * @param e participant group selected in drop down
   */
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
    //enable "next" button
    this.selection = true;
  }

}
