import {Component, OnInit} from '@angular/core';
import {ScoreCardService} from '../../services/score-card/score-card.service';
import {Cluster, ParticipantGroup} from '../../interfaces/interfaces';
import textJson from './texts.json';

@Component({
  selector: 'app-cookie-assistant',
  templateUrl: './cookie-assistant.component.html',
  styleUrls: ['./cookie-assistant.component.scss'],
})
export class CookieAssistantComponent implements OnInit {
  parsed;
  header: string;
  functionalInfo: string;
  addInfo: string;
  allInfo: string;

  constructor(public scoreCardService: ScoreCardService) {
  }

  /**
   * initialise with correct texts. PA gets medium cluster texts,
   * ctrl. group should not get this popup at all so not necessary and others get personalised texts
   */
  ngOnInit() {
    //this.parsed = JSON.parse(textJson);
    switch (this.scoreCardService.getGroup()) {
      case ParticipantGroup.pa:
        this.getMedTexts();
        break;
      case ParticipantGroup.personalisedpa:
        switch (this.scoreCardService.getCluster()) {
          case Cluster.low:
            this.getLowTexts();
            break;
          case Cluster.med:
            this.getMedTexts();
            break;
          case Cluster.high:
            this.getHighTexts();
            break;
        }
        break;

    }
  }

  getLowTexts(){
    this.header = textJson.low.header;
    this.functionalInfo = textJson.low.functional;
    this.addInfo = textJson.low.adds;
    this.allInfo = textJson.low.all;
  }

  getMedTexts(){
    this.header = textJson.med.header;
    this.functionalInfo = textJson.med.functional;
    this.addInfo = textJson.med.adds;
    this.allInfo = textJson.med.all;
  }

  getHighTexts(){
    this.header = textJson.high.header;
    this.functionalInfo = textJson.high.functional;
    this.addInfo = textJson.high.adds;
    this.allInfo = textJson.high.all;
  }

}
