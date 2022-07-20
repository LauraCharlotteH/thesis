import {Component, OnInit, ViewChild} from '@angular/core';
import {IonContent, ModalController} from '@ionic/angular';

@Component({
  selector: 'app-adjust',
  templateUrl: './adjust.component.html',
  styleUrls: ['./adjust.component.scss'],
})
export class AdjustComponent implements OnInit {
  @ViewChild(IonContent) content: IonContent;

  zwecke = [
    {
      label: 'Zweck 1: Informationen auf einem Gerät speichern und/oder abrufen',
      selected: false,
      explanation: 'Anbieter können:\n* Informationen wie z. B. Cookies und Geräte-Kennungen zu den dem Nutzer ' +
        'angezeigten Verarbeitungszwecken auf dem Gerät speichern und abrufen.'
    },
    {
      label: 'Zweck 2: Auswahl einfacher Anzeigen',
      selected: false,
      explanation: 'Für die Auswahl einfacher Anzeigen können Anbieter:\n' +
        '* Echtzeit-Informationen über den Kontext, in dem die Anzeige dargestellt wird, verwenden, einschließlich' +
        ' Informationen über das inhaltliche Umfeld sowie das verwendete Gerät, wie z. B. Gerätetyp und -funktionen,' +
        ' Browser-Kennung, URL, IP-Adresse; \n' +
        '* die ungefähren Standortdaten eines Nutzers verwenden;\n' +
        '* die Häufigkeit der Anzeige-Einblendungen steuern\n' +
        '* die Reihenfolge der Anzeige-Einblendungen steuern;\n' +
        '* verhindern, dass eine Anzeige in einem ungeeigneten redaktionellen Umfeld (brand-unsafe) eingeblendet wird.\n' +
        'Anbieter dürfen nicht:\n' +
        '* Mit diesen Informationen ein personalisiertes Anzeigen-Profil für die Auswahl zukünftiger Anzeigen erstellen,' +
        ' ohne eine eigene Rechtsgrundlage für die Erstellung eines personalisierten Anzeigenprofils zu haben.\n' +
        'Anmerkung: ungefähr bedeutet, dass nur eine grobe Standortbestimmung mit einem Radius von mindestens 500 Metern erlaubt ist.'
    },
    {
      label: 'Zweck 3: Ein personalisiertes Anzeigen-Profil erstellen',
      selected: false,
      explanation: 'Um ein personalisiertes Anzeigen-Profil zu erstellen, können Anbieter:\n' +
        '* Informationen über einen Nutzer sammeln, einschließlich dessen Aktivitäten, Interessen, den Besuchen auf ' +
        'Webseiten oder der Verwendung von Anwendungen, demographischen Informationen oder Standorts, um ein ' +
        'Nutzer-Profil für die Personalisierung von Anzeigen zu erstellen oder zu bearbeiten.\n' +
        '* Diese Informationen mit anderen zuvor gesammelten Informationen, einschließlich von Websites und Apps, ' +
        'kombinieren, um ein Benutzerprofil für die Verwendung in personalisierter Werbung zu erstellen oder zu bearbeiten.'
    },
    {
      label: 'Zweck 4: Personalisierte Anzeigen auswählen',
      selected: false,
      explanation: ' Für die Auswahl personalisierter Anzeigen können Anbieter:\n' +
        '* Personalisierte Anzeigen, basierend auf einem Nutzer-Profil oder anderen historischen Nutzungsdaten, ' +
        'einschließlich der früheren Aktivitäten, der Interessen, den Besuchen auf Webseiten oder der Verwendung ' +
        'von Anwendungen, des Standorts oder demografischen Informationen, auswählen.'
    },
    {
      label: 'Zweck 5: Ein personalisiertes Inhalts-Profil erstellen',
      selected: false,
      explanation: 'Um ein personalisiertes Inhalts-Profil zu erstellen, können Anbieter:\n' +
        '* Informationen über einen Nutzer sammeln, einschließlich dessen Aktivitäten, Interessen, Besuchen ' +
        'auf Webseiten oder der Verwendung von Anwendungen, demographischen \n' +
        '* Informationen oder Standorts, um ein Nutzer-Profil für die Personalisierung von Inhalten zu erstellen oder zu bearbeiten.'
    },
    {
      label: 'Zweck 6: Personalisierte Inhalte auswählen',
      selected: false,
      explanation: 'Um personalisierte Inhalte auszuwählen, können Anbieter:\n' +
        '* Personalisierte Inhalte, basierend auf einem Nutzer-Profil oder anderen historischen Nutzungsdaten, ' +
        'einschließlich der früheren Aktivitäten, der Interessen, den Besuchen auf Webseiten oder der Verwendung ' +
        'von Anwendungen, des Standorts oder demografischen Informationen, auswählen.\n'
    },
    {
      label: 'Zweck 7: Anzeigen-Leistung messen',
      selected: false,
      explanation: 'Um die Anzeigen-Leistung zu messen, können Anbieter:\n' +
        '* messen, ob und wie Anzeigen bei einem Nutzer eingeblendet wurden und wie dieser mit ihnen interagiert hat;\n' +
        '* Berichte über Anzeigen, einschließlich ihrer Wirksamkeit und Leistung, bereitstellen;\n' +
        '* Berichte über die Interaktion von Nutzern mit Anzeigen bereitstellen, und zwar anhand von Daten, die im ' +
        'Laufe der Interaktion des Nutzers mit dieser Anzeige gemessen wurden;\n' +
        '* Berichte für Diensteanbieter über die Anzeigen, die auf ihren Diensten eingeblendet werden, bereitstellen;\n' +
        '* messen, ob eine Anzeige in einem ungeeigneten redaktionellen Umfeld (brand-unsafe) eingeblendet wird;\n' +
        '* den Prozentsatz bestimmen, zu welchem die Anzeige hätte wahrgenommen werden können, einschließlich der ' +
        'Dauer (Werbewahrnehmungschance). \n' +
        'Anbieter dürfen nicht:\n' +
        '* Über Befragungspanels oder ähnliche Verfahren erhobene Daten über Zielgruppen zusammen mit ' +
        'Anzeigen-Messungsdaten verwenden, ohne dafür eine eigene Rechtsgrundlage für den Einsatz von Marktforschung ' +
        'zur Gewinnung von Erkenntnissen über Zielgruppen zu haben.'
    },
    {
      label: 'Zweck 8: Inhalte-Leistung messen',
      selected: false,
      explanation: 'Um die Leistung von Inhalten zu messen, können Anbieter:\n' +
        '* messen und darüber berichten, wie Inhalte an Nutzer ausgeliefert wurden und wie diese mit ihnen interagiert haben;\n' +
        '* Berichte über direkt messbare oder bereits bekannte Informationen von Nutzern, die mit den Inhalten ' +
        'interagiert haben, bereitstellen.\n' +
        'Anbieter können nicht:\n' +
        '* messen, ob und wie Anzeigen (einschließlich nativer Anzeigen) an einen Benutzer ausgeliefert wurden und ' +
        'wie dieser mit ihnen interagiert hat;\n' +
        '* Über Befragungspanels oder ähnliche Verfahren erhobene Daten über Zielgruppen zusammen mit ' +
        'Inhalts-Messungsdaten verwenden, ohne dafür eine eigene Rechtsgrundlage für den Einsatz von Marktforschung' +
        ' zur Gewinnung von Erkenntnissen über Zielgruppen zu haben.\n'
    },
    {
      label: 'Zweck 9: Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen',
      selected: false,
      explanation: 'Beim Einsatz von Marktforschung zur Gewinnung von Erkenntnissen über Zielgruppen können Anbieter:\n' +
        '* aggregierte Berichte für Werbetreibende oder deren Repräsentanten über die Zielgruppen, die durch ihre ' +
        'Anzeigen erreicht werden, und welche auf der Grundlage von Befragungspanels oder ähnlichen Verfahren gewonnen' +
        ' wurden, bereitstellen;\n' +
        '* aggregierte Berichte für Diensteanbieter über die Zielgruppen, die durch die Inhalte und/oder Anzeigen auf' +
        ' ihren Diensten erreicht wurden bzw. mit diesen interagiert haben, und welche über Befragungspanels oder ' +
        'ähnliche Verfahren ermittelt wurden, bereitstellen;\n' +
        '* für Zwecke der Marktforschung Offline-Daten zu einem Online-Benutzer zuordnen, um Erkenntnisse über ' +
        'Zielgruppen zu gewinnen, soweit Anbieter erklärt haben, Offline-Datenquellen abzugleichen und zusammenzuführen' +
        ' (Weitere Verarbeitungsmöglichkeit 1).\n' +
        '\n' +
        '\n' +
        'Anbieter können nicht: \n' +
        '* die Leistung und Wirksamkeit von Anzeigen, die einem bestimmten Nutzer eingeblendet wurden oder mit denen ' +
        'dieser interagiert hat, messen, ohne eine eigene Rechtsgrundlage für die Messung der Anzeigen-Leistung zu haben;\n' +
        '* messen, welche Inhalte für einen bestimmten Nutzer geliefert wurden und wie dieser mit ihnen interagiert ' +
        'hat, ohne eine eigene Rechtsgrundlage für die Messung der Inhalte-Leistung zu haben'
    },
    {
      label: 'Zweck 10: Produkte entwickeln und verbessern',
      selected: false,
      explanation: 'Um Produkte zu entwickeln und zu verbessern, können Anbieter:\n' +
        '* Informationen verwenden, um ihre bestehenden Produkte durch neue Funktionen zu verbessern und neue Produkte zu entwickeln;\n' +
        '* neue Rechenmodelle und Algorithmen mit Hilfe maschinellen Lernens erstellen.\n' +
        'Anbieter können nicht:\n' +
        '* Datenverarbeitungen durchführen, die in einem der anderen Verarbeitungszwecke definiert sind.'
    },
  ];

  constructor( protected modalCtrl: ModalController) {
  }

  ngOnInit() {
  }

  scrollUp() {
    this.content.scrollToTop(300);
  }

  async acceptSelection(){
    let noOfCookies = 21;
    this.zwecke.forEach(entry =>{
      if(entry.selected === true){
        if(entry.label.includes('1') && !entry.label.includes('0')){
          noOfCookies += 1;
        }
        if(entry.label.includes('2')){
          noOfCookies += 4;
        }
        if(entry.label.includes('5')){
          noOfCookies += 4;
        }
        if(entry.label.includes('6')){
          noOfCookies += 5;
        }
        if(entry.label.includes('8')){
          noOfCookies += 5;
        }
      }
    });
    await this.modalCtrl.dismiss(noOfCookies);
  }

}
