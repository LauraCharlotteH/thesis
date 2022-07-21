import { Injectable } from '@angular/core';
import {IQuestionnaire, IOplisResult, Cluster} from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class OplisQuestionnaireService {
  //input your questions like this:
  questions: IQuestionnaire[] = [
    {
      question: 'E-Mails werden häufig über mehrere Rechner weitergeleitet, bevor sie bei ihrem eigentlichen Empfänger\n' +
        'ankommen.',
      answer: [
        {option: 'wahr', correct: true},
        {option: 'falsch', correct: false},
        {option: 'weiß nicht', correct: false},
      ]
    },
    {
      question: 'Was ist ein „Cookie“?',
      answer: [
        {option: 'Eine Text-Datei, die es Websites ermöglicht, den Nutzer beim erneuten Besuch wiederzuerkennen.', correct: true},
        {option: 'Ein Programm, mit dem man die Datenspeicherung von Webanbietern unterbinden kann.', correct: false},
        {option: 'Ein Computer-Virus, das man sich beim Besuch einer Website einfangen kann.', correct: false},
        {option: 'Ein Browser-Plugin, das sicheres Surfen gewährleistet.', correct: false},
        {option: 'weiß nicht', correct: false},
      ]
    },
    {
      question: 'Die Weiterleitung anonymisierter Nutzerdaten zu Marktforschungszwecken ist in der EU gesetzlich erlaubt.',
      answer: [
        {option: 'wahr', correct: true},
        {option: 'falsch', correct: false},
        {option: 'weiß nicht', correct: false},
      ]
    },
    {
      question: 'Durch die Nutzung von falschen Namen oder Pseudonymen kann die Identifikation der eigenen Person\n' +
        'im Internet zumindest erschwert werden.',
      answer: [
        {option: 'wahr', correct: true},
        {option: 'falsch', correct: false},
        {option: 'weiß nicht', correct: false},
      ]
    },
    {//5
      question: 'Die EU-Richtlinien zum Datenschutz...',
      answer: [
        {option: '... müssen von allen EU-Ländern in das nationale Datenschutzgesetz implementiert werden.', correct: true},
        {option: '... existieren bisher noch nicht.', correct: false},
        {option: '... gelten als länderübergreifendes EU-Datenschutzgesetz.', correct: false},
        {option: '... geben den EU-Ländern lediglich eine unverbindliche Orientierung hinsichtlich ihrer\n' +
            'Datenschutzgesetze.', correct: false},
        {option: 'weiß nicht', correct: false},
      ]
    },
    {
      question: 'Um den Zugang zu eigenen Daten zu erschweren, sollte man verschiedene Passwörter und\n' +
        'Benutzernamen für unterschiedliche Anwendungen nutzen und diese häufig ändern.',
      answer: [
        {option: 'wahr', correct: true},
        {option: 'falsch', correct: false},
        {option: 'weiß nicht', correct: false},
      ]
    },
    {
      question: 'Betreiber sozialer Netzwerke (z.B. Facebook) sammeln und verarbeiten auch Informationen von\n' +
        'Personen, die dieses Netzwerk gar nicht nutzen.',
      answer: [
        {option: 'wahr', correct: true},
        {option: 'falsch', correct: false},
        {option: 'weiß nicht', correct: false},
      ]
    },
    {
      question: ' Die National Security Agency (NSA) greift nur auf Nutzerdaten zu, die öffentlich und für jedermann\n' +
        'zugänglich sind.',
      answer: [
        {option: 'wahr', correct: false},
        {option: 'falsch', correct: true},
        {option: 'weiß nicht', correct: false},
      ]
    },
    {
      question: ' Was versteht man unter einem „Trojaner“? Ein Trojaner ist ein Computerprogramm, dass...',
      answer: [
        {option: '...  als Computervirus in den 90ern Schaden anrichtete, heute aber nicht mehr existiert.', correct: false},
        {option: '...  als nützliche Anwendung getarnt ist, im Hintergrund aber eine andere Funktion erfüllt.', correct: true},
        {option: '... den Rechner vor Viren und anderen Schadprogrammen schützt.', correct: false},
        {option: '... nur zum Spaß entwickelt wurde und keine spezifische Funktion hat.', correct: false},
        {option: 'weiß nicht', correct: false},
      ]
    },
    {
      question: 'Laut dem deutschen Gesetz haben Nutzer von Online-Anwendungen, die personenbezogene Daten\n' +
        'erheben und verarbeiten, einen Anspruch darauf, die über sie gespeicherten Daten einzusehen.',
      answer: [
        {option: 'wahr', correct: true},
        {option: 'falsch', correct: false},
        {option: 'weiß nicht', correct: false},
      ]
    },
    {//11
      question: 'Was verbirgt sich hinter dem Begriff „Browserverlauf“? Im Browserverlauf werden...',
      answer: [
        {option: '... je nach Browsertyp unterschiedliche Informationen über den Nutzer gespeichert.', correct: false},
        {option: '... potenziell infizierte Websites separat abgelegt.', correct: false},
        {option: '... die Adressen der besuchten Websites gespeichert.', correct: true},
        {option: '... Cookies von besuchten Websites abgelegt.', correct: false},
        {option: 'weiß nicht', correct: false},
      ]
    },
    {
      question: ' Informationelle Selbstbestimmung ist...',
      answer: [
        {option: '... die zentrale Forderung datenverarbeitender Stellen.', correct: false},
        {option: '... ein philosophischer Begriff.', correct: false},
        {option: '... die zentrale Aufgabe des Bundesdatenschutzbeauftragten.', correct: false},
        {option: '... ein Grundrecht deutscher Bürger', correct: true},
        {option: 'weiß nicht', correct: false},
      ]
    },
    {//13
      question: 'Das Nachverfolgen der eigenen Internetnutzung kann durch das regelmäßige Löschen von\n' +
        'Browserinformationen (Cookies, Cache, Browserverlauf) erschwert werden.',
      answer: [
        {option: 'wahr', correct: true},
        {option: 'falsch', correct: false},
        {option: 'weiß nicht', correct: false},
      ]
    },
    {
      question: 'Für alle sozialen Netzwerkseiten gelten in Deutschland die gleichen Standard-AGBs. Abweichungen\n' +
        'müssen von den Betreibern kenntlich gemacht werden.',
      answer: [
        {option: 'wahr', correct: false},
        {option: 'falsch', correct: true},
        {option: 'weiß nicht', correct: false},
      ]
    },
    {
      question: 'Durch das Surfen im „Private Browsing“-Modus kann die Rekonstruktion des eigenen Surfverhaltens\n' +
        'erschwert werden, da keine Browserinformationen gespeichert werden.',
      answer: [
        {option: 'wahr', correct: true},
        {option: 'falsch', correct: false},
        {option: 'weiß nicht', correct: false},
      ]
    },
    {
      question: 'Was versteht man unter dem Begriff „Cache“?',
      answer: [
        {option: 'Ein Programm, welches Daten über den Internetnutzer gezielt ausspioniert und an Dritte weiter-\n' +
            'leitet.', correct: false},
        {option: 'Einen Puffer-Speicher, der das Surfen im Internet beschleunigt.', correct: true},
        {option: 'Ein Programm, welches Daten auf eine externe Festplatte kopiert, um diese vor Datenklau zu\n' +
            'schützen.', correct: false},
        {option: 'Ein Browser-Plugin, welches den Datentransfer beim Surfen verschlüsselt.', correct: false},
        {option: 'weiß nicht', correct: false},
      ]
    },
    {
      question: 'Daten, die Betreiber sozialer Netzwerke (z.B. Facebook) über die Nutzer sammeln, werden nach 5\n' +
        'Jahren gelöscht.',
      answer: [
        {option: 'wahr', correct: false},
        {option: 'falsch', correct: true},
        {option: 'weiß nicht', correct: false},
      ]
    },
    {
      question: 'Auch wenn selbst schwere Passwörter von IT-Profis geknackt werden können, ist es sinnvoll\n' +
        'Passwörter zu verwenden, die aus einer Kombination aus Buchstaben, Zahlen und Sonderzeichen bestehen\n' +
        'und keine Wörter, Namen oder einfache Zahlenkombinationen enthalten.',
      answer: [
        {option: 'wahr', correct: true},
        {option: 'falsch', correct: false},
        {option: 'weiß nicht', correct: false},
      ]
    },
    {
      question: 'Was ist eine „Firewall“?',
      answer: [
        {option: 'Ein Browser-Plugin, das sicheres Surfen ermöglicht soll.', correct: false},
        {option: 'Eine neue technische Entwicklung, die verhindert, dass Daten bei einem Kurzschluss verloren gehen.', correct: false},
        {option: 'Ein Sicherungssystem, das den Computer vor unerwünschten Netzangriffen schützen soll.', correct: true},
        {option: 'Ein veraltetes Schutzprogramm gegen Computer-Viren.', correct: false},
        {option: 'weiß nicht', correct: false},
      ]
    },
    {
      question: 'Unternehmen kombinieren Daten, die auf verschiedenen Websites im Internet hinterlassen werden\n' +
        'und stellen daraus Nutzerprofile zusammen.',
      answer: [
        {option: 'wahr', correct: true},
        {option: 'falsch', correct: false},
        {option: 'weiß nicht', correct: false},
      ]
    },
  ];

  constructor() { }

  getQuestionnaire(){
    //TODO better return a deep copy!
    return this.questions;
  }

  evaluate(correctAnswers: number){
    let oplisValue = 0;
    let percentageRank = 0;
    let cluster = null;
    switch (correctAnswers) {
      case 0:
        oplisValue = 61;
        percentageRank = 2;
        cluster = Cluster.low;
        break;
      case 1:
        oplisValue = 65;
        percentageRank = 3;
        cluster = Cluster.low;
        break;
      case 2:
        oplisValue = 68;
        percentageRank = 4;
        cluster = Cluster.low;
        break;
      case 3:
        oplisValue = 71;
        percentageRank = 4;
        cluster = Cluster.low;
        break;
      case 4:
        oplisValue = 74;
        percentageRank = 9;
        cluster = Cluster.low;
        break;
      case 5:
        oplisValue = 78;
        percentageRank = 11;
        cluster = Cluster.low;
        break;
      case 6:
        oplisValue = 81;
        percentageRank = 15 ;
        cluster = Cluster.low;
        break;
      case 7:
        oplisValue = 84;
        percentageRank = 18;
        cluster = Cluster.low;
        break;
      case 8:
        oplisValue = 88;
        percentageRank = 22;
        cluster = Cluster.low;
        break;
      case 9:
        oplisValue = 91;
        percentageRank = 27;
        cluster = Cluster.low;
        break;
      case 10:
        oplisValue = 94;
        percentageRank = 34;
        cluster = Cluster.med;
        break;
      case 11:
        oplisValue = 97;
        percentageRank = 42;
        cluster = Cluster.med;
        break;
      case 12:
        oplisValue = 101;
        percentageRank = 50;
        cluster = Cluster.med;
        break;
      case 13:
        oplisValue = 104;
        percentageRank = 58;
        cluster = Cluster.med;
        break;
      case 14:
        oplisValue = 107;
        percentageRank = 67;
        cluster = Cluster.high;
        break;
      case 15:
        oplisValue = 110;
        percentageRank = 77;
        cluster = Cluster.high;
        break;
      case 16:
        oplisValue = 114;
        percentageRank = 84;
        cluster = Cluster.high;
        break;
      case 17:
        oplisValue = 117;
        percentageRank = 91;
        cluster = Cluster.high;
        break;
      case 18:
        oplisValue = 120;
        percentageRank = 96;
        cluster = Cluster.high;
        break;
      case 19:
        oplisValue = 123;
        percentageRank = 99;
        cluster = Cluster.high;
        break;
      case 20:
        oplisValue = 127;
        percentageRank = 100;
        cluster = Cluster.high;
        break;
      default:
        oplisValue = 0;
        percentageRank = 0;
        cluster = Cluster.high;
        break;
    }
    let results: IOplisResult = {
      raw: correctAnswers,
      oplisScore: oplisValue,
      percentageRank: percentageRank,
      cluster: cluster
    }
    return results;
  }
}
