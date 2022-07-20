import { Component, OnInit } from '@angular/core';
import {ScoreCardService} from '../../../services/score-card/score-card.service';
import {ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {ICookieScore} from '../../../interfaces/interfaces';
import {FurtherInfoComponent} from '../further-info/further-info.component';

@Component({
  selector: 'app-adjust',
  templateUrl: './adjust.component.html',
  styleUrls: ['./adjust.component.scss'],
})
export class AdjustComponent implements OnInit {  checkParent: boolean;
  firstCheckboxes: any;
  secondCheckboxes: any;
  thirdCheckboxes: any;
  forthCheckboxes: any;

  constructor(public scoreCardService: ScoreCardService, protected modalCtrl: ModalController, private router: Router) {
    this.firstCheckboxes = [
      {
        value: 'Informationen auf einem Gerät speichern und/oder abrufen',
        isItemChecked: false,
        explanation: 'Für die Ihnen angezeigten Verarbeitungszwecke können Cookies, Geräte-Kennungen oder andere ' +
          'Informationen auf Ihrem Gerät gespeichert oder abgerufen werden.'
      },
      {
        value: 'Auswahl einfacher Anzeigen',
        isItemChecked: false,
        explanation: 'Anzeigen können Ihnen basierend auf den Inhalten, die Sie ansehen, der Anwendung, ' +
          'die Sie verwenden und Ihrem ungefähren Standort oder Ihrem Gerätetyp eingeblendet werden.'
      },
      {
        value: 'Ein personalisiertes Anzeigen-Profil erstellen',
        isItemChecked: false,
        explanation: 'Über Sie und Ihre Interessen kann ein Profil erstellt werden, um Ihnen für Sie relevante' +
          ' personalisierte Anzeigen einzublenden.'
      },
      {
        value: 'Personalisierte Anzeigen auswählen',
        isItemChecked: false,
        explanation: 'Personalisierte Anzeigen können Ihnen basierend auf einem über Sie erstellten Profil eingeblendet' +
          ' werden.'
      },
      {
        value: 'Ein personalisiertes Inhalts-Profil erstellen',
        isItemChecked: false,
        explanation: 'Über Sie und Ihre Interessen kann ein Profil erstellt werden, um Ihnen für Sie relevante ' +
          'personalisierte Inhalte anzuzeigen.'
      },
      {
        value: 'Personalisierte Inhalte auswählen',
        isItemChecked: false,
        explanation: 'Personalisierte Inhalte können Ihnen basierend auf einem über Sie erstellten Profil angezeigt' +
          ' werden.'
      },
      {
        value: 'Anzeigen-Leistung messen',
        isItemChecked: false,
        explanation: 'Die Leistung und Wirksamkeit von Anzeigen, die Sie sehen oder mit denen Sie interagieren, kann gemessen werden.'
      },
      {
        value: 'Inhalte-Leistung messen',
        isItemChecked: false,
        explanation: 'Die Leistung und Wirksamkeit von Inhalten, die Sie sehen oder mit denen Sie interagieren, kann gemessen werden.'
      },
      {
        value: 'Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen',
        isItemChecked: false,
        explanation: 'Marktforschung kann verwendet werden, um mehr über die Zielgruppen zu erfahren, die Dienste ' +
          'oder Anwendungen verwenden und sich Anzeigen ansehen.'
      },
      {
        value: 'Produkte entwickeln und verbessern',
        isItemChecked: false,
        explanation: 'Ihre Daten können verwendet werden, um bestehende Systeme und Software zu verbessern und neue Produkte zu entwickeln.'
      },
    ];

    this.secondCheckboxes = [
      {
        value: 'Informationen auf einem Gerät speichern und/oder abrufen',
        isItemChecked: false,
        explanation: 'Für die Ihnen angezeigten Verarbeitungszwecke können Cookies, Geräte-Kennungen oder andere ' +
          'Informationen auf Ihrem Gerät gespeichert oder abgerufen werden.'
      },
      {
        value: 'Auswahl einfacher Anzeigen',
        isItemChecked: false,
        explanation: 'Anzeigen können Ihnen basierend auf den Inhalten, die Sie ansehen, der Anwendung, die Sie ' +
          'verwenden und Ihrem ungefähren Standort oder Ihrem Gerätetyp eingeblendet werden.'
      },
      {
        value: 'Ein personalisiertes Anzeigen-Profil erstellen',
        isItemChecked: false,
        explanation: 'Über Sie und Ihre Interessen kann ein Profil erstellt werden, um Ihnen für Sie relevante ' +
          'personalisierte Anzeigen einzublenden.'
      },
      {
        value: 'Personalisierte Anzeigen auswählen',
        isItemChecked: false,
        explanation: 'Personalisierte Anzeigen können Ihnen basierend auf einem über Sie erstellten Profil eingeblendet werden.'
      },
      {
        value: 'Ein personalisiertes Inhalts-Profil erstellen',
        isItemChecked: false,
        explanation: 'Über Sie und Ihre Interessen kann ein Profil erstellt werden, um Ihnen für Sie relevante ' +
          'personalisierte Inhalte anzuzeigen.'
      },
      {
        value: 'Personalisierte Inhalte auswählen',
        isItemChecked: false,
        explanation: 'Personalisierte Inhalte können Ihnen basierend auf einem über Sie erstellten Profil angezeigt werden.'
      },
      {
        value: 'Anzeigen-Leistung messen',
        isItemChecked: false,
        explanation: 'Die Leistung und Wirksamkeit von Anzeigen, die Sie sehen oder mit denen Sie interagieren, kann gemessen werden.'
      },
      {
        value: 'Inhalte-Leistung messen',
        isItemChecked: false,
        explanation: 'Die Leistung und Wirksamkeit von Inhalten, die Sie sehen oder mit denen Sie interagieren, kann gemessen werden.'
      },
      {
        value: 'Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen',
        isItemChecked: false,
        explanation: 'Marktforschung kann verwendet werden, um mehr über die Zielgruppen zu erfahren, die Dienste oder ' +
          'Anwendungen verwenden und sich Anzeigen ansehen.'
      },
      {
        value: 'Produkte entwickeln und verbessern',
        isItemChecked: false,
        explanation: 'Ihre Daten können verwendet werden, um bestehende Systeme und Software zu verbessern und neue Produkte zu entwickeln.'
      }
    ];

    this.thirdCheckboxes = [
      {
        value: 'Geräteeigenschaften zur Identifikation aktiv abfragen',
        isItemChecked: false,
        explanation: 'Ihr Gerät kann über eine Abfrage seiner spezifischen Merkmale erkannt werden.'
      }
    ];

    this.forthCheckboxes = [
      {
        value: 'Sicherheit gewährleisten, Betrug verhindern und Fehler beheben',
        isItemChecked: false,
        explanation: 'Ihre Daten können verwendet werden, um betrügerische Aktivitäten zu identifizieren und zu ' +
          'verhindern, und um sicherzustellen, dass Systeme und Prozesse ordnungsgemäß und sicher funktionieren.'
      },
      {
        value: 'Anzeigen oder Inhalte technisch bereitstellen',
        isItemChecked: false,
        explanation: 'Ihr Gerät kann Informationen empfangen und senden die notwendig sind, damit Sie Inhalte' +
          ' und Anzeigen sehen und nutzen können.'
      }
    ];
  }


  ngOnInit() {
  }

  toggleAll(){
    this.checkParent = !this.checkParent;
    this.firstCheckboxes.forEach(item => {
      item.isItemChecked = this.checkParent;
    });
    this.secondCheckboxes.forEach(item => {
      item.isItemChecked = this.checkParent;
    });
    this.thirdCheckboxes.forEach(item => {
      item.isItemChecked = this.checkParent;
    });
  }

  verifyEvent(){
    const allItems = this.firstCheckboxes.length + this.secondCheckboxes.length + this.thirdCheckboxes.length;
    let selected = 0;
    this.firstCheckboxes.map(item => {
      if (item.isItemChecked) {selected++;}
    });
    this.secondCheckboxes.map(item => {
      if (item.isItemChecked) {selected++;}
    });
    this.thirdCheckboxes.map(item => {
      if (item.isItemChecked) {selected++;}
    });
    if (selected > 0 && selected < allItems) {
      // some items selected -> when toggle all all should be on
      this.checkParent = false;
    } else {this.checkParent = selected === allItems;}
  }

  acceptAll() {
    const cookies: ICookieScore = {
      website: 'web.de',
      noOfCookies: 90,
      acceptedCookies: 90
    };
    this.scoreCardService.setCookies(cookies);
    console.log('confirming!');
    this.modalCtrl.dismiss();
    this.router.navigateByUrl('/ebay');
  }

  acceptSelection(){let acceptedCookies = 12;
    this.firstCheckboxes.forEach(value =>{
      if(value.isItemChecked){
        acceptedCookies += 2;
      }});
    this.secondCheckboxes.forEach(value =>{
      if(value.isItemChecked){
        acceptedCookies += 5;
      }});
    this.thirdCheckboxes.forEach(value =>{
      if(value.isItemChecked){
        acceptedCookies += 8;
      }});
    //forth checkboxes are functional cookies, always active and included in the 12 up top
    const cookies: ICookieScore = {
      website: 'web.de',
      noOfCookies: 90,
      acceptedCookies
    };
    this.scoreCardService.setCookies(cookies);
    console.log('confirming!');
    this.modalCtrl.dismiss();
    this.router.navigateByUrl('/ebay');
  }

  async gotoFurtherInfo(){
    const modal = await this.modalCtrl.create({
      component: FurtherInfoComponent,
      backdropDismiss: false,
      componentProps: {
        name: 'cluster is XXX'
      },
      cssClass: 'gmx-modal'
    });

    modal.onDidDismiss().then(async (data: any) => {});
    return await modal.present();
  }

}
