import { Component, OnInit } from '@angular/core';
import {ScoreCardService} from '../../../services/score-card/score-card.service';
import {ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {ICookieScore} from '../../../interfaces/interfaces';

@Component({
  selector: 'app-purpose-adjust',
  templateUrl: './purpose-adjust.component.html',
  styleUrls: ['./purpose-adjust.component.scss'],
})
export class PurposeAdjustComponent implements OnInit {
  purposes = [
    {title: 'Informationen auf einem Gerät speichern und/oder abrufen ',
      accept: false,
      details: 'Anbieter können:\n' +
        'Informationen wie z. B. Cookies und Geräte-Kennungen zu den dem ' +
        'Nutzer angezeigten Verarbeitungszwecken auf dem Gerät speichern und abrufen.'
    },
    {title: 'Auswahl einfacher Anzeigen ',
      accept: false,
      details: 'Für die Auswahl einfacher Anzeigen können Anbieter:\n' +
        'Echtzeit-Informationen über den Kontext, in dem die Anzeige ' +
        'dargestellt wird, verwenden, einschließlich Informationen über das inhaltliche Umfeld sowie das verwendete Gerät,' +
        ' wie z. B. Gerätetyp und -funktionen, Browser-Kennung, URL, IP-Adresse;\n' +
        'die ungefähren Standortdaten eines Nutzers verwenden;\n' +
        'die Häufigkeit der Anzeige-Einblendungen steuern\n' +
        'die Reihenfolge der Anzeige-Einblendungen steuern;\n' +
        'verhindern, dass eine Anzeige in einem ungeeigneten redaktionellen Umfeld (brand-unsafe) eingeblendet wird.\n' +
        'Anbieter dürfen nicht:\n' +
        'Mit diesen Informationen ein personalisiertes Anzeigen-Profil für ' +
        'die Auswahl zukünftiger Anzeigen erstellen, ohne eine eigene Rechtsgrundlage für die Erstellung eines personalisierten ' +
        'Anzeigenprofils zu haben.\n' +
        'Anmerkung: ungefähr bedeutet, dass nur eine grobe Standortbestimmung mit einem Radius von mindestens 500 Metern erlaubt ist. '
    },
    {title: 'Personalisierte Anzeigen auswählen',
      accept: false,
      details: 'Für die Auswahl personalisierter Anzeigen können Anbieter:\n' +
        'Personalisierte Anzeigen, basierend auf einem Nutzer-Profil oder anderen historischen Nutzungsdaten, ' +
        'einschließlich der früheren Aktivitäten, der Interessen, den Besuchen auf Webseiten oder der Verwendung von Anwendungen, ' +
        'des Standorts oder demografischen Informationen, auswählen.'
    },
    {title: 'Anzeigen-Leistung messen ',
      accept: false,
      details: 'Um die Anzeigen-Leistung zu messen, können Anbieter:\n' +
        'messen, ob und wie Anzeigen bei einem Nutzer eingeblendet wurden und wie dieser mit ihnen interagiert hat;\n' +
        'Berichte über Anzeigen, einschließlich ihrer Wirksamkeit und Leistung, bereitstellen;\n' +
        'Berichte über die Interaktion von Nutzern mit Anzeigen bereitstellen, und zwar anhand von Daten, die im Laufe ' +
        'der Interaktion des Nutzers mit dieser Anzeige gemessen wurden;\n' +
        'Berichte für Diensteanbieter über die Anzeigen, die auf ihren Diensten eingeblendet werden, bereitstellen;\n' +
        'messen, ob eine Anzeige in einem ungeeigneten redaktionellen Umfeld (brand-unsafe) eingeblendet wird;\n' +
        'den Prozentsatz bestimmen, zu welchem die Anzeige hätte wahrgenommen werden können, einschließlich der Dauer ' +
        '(Werbewahrnehmungschance).\n' +
        'Anbieter dürfen nicht:\n' +
        'Über Befragungspanels oder ähnliche Verfahren erhobene Daten über Zielgruppen zusammen mit Anzeigen-Messungsdaten ' +
        'verwenden, ohne dafür eine eigene Rechtsgrundlage für den Einsatz von Marktforschung zur Gewinnung von Erkenntnissen ' +
        'über Zielgruppen zu haben.'
    },
    {title: 'Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen ',
      accept: false,
      details: 'Beim Einsatz von Marktforschung zur Gewinnung von Erkenntnissen über Zielgruppen können Anbieter:\n' +
        'aggregierte Berichte für Werbetreibende oder deren Repräsentanten über die Zielgruppen, die durch ihre Anzeigen ' +
        'erreicht werden, und welche auf der Grundlage von Befragungspanels oder ähnlichen Verfahren gewonnen wurden, ' +
        'bereitstellen;\n' +
        'aggregierte Berichte für Diensteanbieter über die Zielgruppen, die durch die Inhalte und/oder Anzeigen auf ihren ' +
        'Diensten erreicht wurden bzw. mit diesen interagiert haben, und welche über Befragungspanels oder ähnliche Verfahren' +
        ' ermittelt wurden, bereitstellen;\n' +
        'für Zwecke der Marktforschung Offline-Daten zu einem Online-Benutzer zuordnen, um Erkenntnisse über Zielgruppen zu' +
        ' gewinnen, soweit Anbieter erklärt haben, Offline-Datenquellen abzugleichen und zusammenzuführen ' +
        '(Weitere Verarbeitungsmöglichkeit 1).\n' +
        'Anbieter können nicht:\n' +
        'die Leistung und Wirksamkeit von Anzeigen, die einem bestimmten Nutzer eingeblendet wurden oder mit denen dieser ' +
        'interagiert hat, messen, ohne eine eigene Rechtsgrundlage für die Messung der Anzeigen-Leistung zu haben;\n' +
        'messen, welche Inhalte für einen bestimmten Nutzer geliefert wurden und wie dieser mit ihnen interagiert hat, ' +
        'ohne eine eigene Rechtsgrundlage für die Messung der Inhalte-Leistung zu haben'
    },
    {title: 'Produkte entwickeln und verbessern ',
      accept: false,
      details: 'Um Produkte zu entwickeln und zu verbessern, können Anbieter:\n' +
        'Informationen verwenden, um ihre bestehenden Produkte durch neue Funktionen zu verbessern und neue Produkte zu entwickeln;\n' +
        'neue Rechenmodelle und Algorithmen mit Hilfe maschinellen Lernens erstellen.\n' +
        'Anbieter können nicht:\n' +
        'Datenverarbeitungen durchführen, die in einem der anderen Verarbeitungszwecke definiert sind.'
    },
    ];
  specialPurposes = [
    {title: 'Sicherheit gewährleisten, Betrug verhindern und Fehler beheben ',
      details: 'Zur Gewährleistung von Sicherheit, Verhinderung von Betrug und Behebung von Fehlern können Anbieter:\n' +
        'sicherstellen, dass Daten sicher übermittelt werden;\n' +
        'schädliche, betrügerische, ungültige oder illegale Aktivitäten ausfindig machen und verhindern;\n' +
        'den korrekten und effizienten Betrieb von Systemen und Prozessen - einschließlich der Überwachung und Verbesserung ' +
        'der Leistung von Systemen und Prozessen - im Rahmen der erlaubten Verarbeitungszwecke sicherstellen.\n' +
        'Anbieter können nicht:\n' +
        'Datenverarbeitungen durchführen, die in einem der anderen Verarbeitungszwecke definiert sind.\n' +
        'Hinweis: Daten, die gesammelt und verwendet werden, um die Sicherheit zu gewährleisten, Betrug zu verhindern und ' +
        'Fehler zu beseitigen. können automatisch gesendete Geräteeigenschaften zur Identifizierung beinhalten, präzise ' +
        'Geolokalisierungsdaten und Daten, die durch aktive Abtastung der Vorrichtung erhalten werden. Merkmale zur ' +
        'Identifizierung ohne gesonderte Offenlegung und/oder Opt-in. '},
    {title: 'Anzeigen oder Inhalte technisch bereitstellen ', details: 'Zur Bereitstellung von Informationsdaten und um ' +
        'auf technische Anfragen zu reagieren können Anbieter:\n' +
        'die IP-Adresse eines Benutzers verwenden, um über das Internet eine Anzeige einzublenden;\n' +
        'auf die Interaktion eines Benutzers mit einer Anzeige reagieren, indem sie den Benutzer zu einer Zielseite weiterleiten;\n' +
        'die IP-Adresse eines Benutzers verwenden, um Inhalte über das Internet bereitzustellen;\n' +
        'auf die Interaktion eines Benutzers mit Inhalten reagieren, indem sie den Benutzer zu einer Zielseite weiterleiten;\n' +
        'Informationen zum Gerätetyp und seinen Möglichkeiten zur Darstellung von Anzeigen oder Inhalten verwenden, z. B.' +
        ' um Werbemittel oder Videodateien in der richtigen Größe und in einem vom Gerät unterstützten Format bereitzustellen.\n' +
        'Anbieter können nicht:\n' +
        'Datenverarbeitungen durchführen, die in einem der anderen Verarbeitungszwecke definiert sind.'}
  ];
  functions = [
    {title: 'Personalisierte Inhalte auswählen Zusammenführen mit Offline-Datenquellen',
      details: 'Anbieter können:\n' +
        'Daten, die offline erhoben wurden, mit Daten, die online erhoben wurden, zusammenführen, um sie für einen oder ' +
        'mehrere Verarbeitungszwecke oder besondere Verarbeitungszwecke ergänzend zu nutzen.'},
    {title: 'Verschiedene Geräte verknüpfen ',
      details: 'Anbieter können:\n' +
        'deterministisch ermitteln, dass zwei oder mehr Geräte zum gleichen Benutzer oder Haushalt gehören;\n' +
        'probabilistisch ermitteln, dass zwei oder mehr Geräte zum gleichen Benutzer oder Haushalt gehören;\n' +
        'Geräteeigenschaften zur probabilistischen Identifikation aktiv abfragen, wenn Nutzer Anbietern die aktive ' +
        'Abfrage von Geräteeigenschaften erlaubt haben. (Besondere Verarbeitungsmöglichkeit 2).'}
  ];

  constructor(public scoreCardService: ScoreCardService, protected modalCtrl: ModalController, private router: Router) { }

  ngOnInit() {}

  /**
   * store settings and return to adjust-popup (means third part pop-up ought to close right along this one
   */
  acceptSettings(){
    const noOfCookies = 5;
    console.log('storing cookies by purpose');
    this.modalCtrl.dismiss(noOfCookies);
  }

  acceptAll(){
    const cookies: ICookieScore = {
      website: 'amazon.com',
      noOfCookies: 6,
      acceptedCookies: 6
    };
    this.scoreCardService.setCookies(cookies);
    console.log('confirming!');
    this.modalCtrl.dismiss();
    this.router.navigateByUrl('/gmx');
  }

  /**
   * store nothing and return to third-party settings
   */
  thirdPartyAdjust(){
    this.modalCtrl.dismiss('nothing stored');
  }
}
