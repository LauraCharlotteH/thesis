import {Component, OnInit} from '@angular/core';
import {ScoreCardService} from '../../../../services/score-card/score-card.service';
import {ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {ICookieScore} from '../../../../interfaces/interfaces';
import {PurposeAdjustComponent} from '../purpose-adjust/purpose-adjust.component';

@Component({
  selector: 'app-third-party-adjust',
  templateUrl: './third-party-adjust.component.html',
  styleUrls: ['./third-party-adjust.component.scss'],
})
export class ThirdPartyAdjustComponent implements OnInit {

  iabTcfList = [
    {
      title: 'Index Exchange, Inc. ',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Auswahl einfacher Anzeigen\n' +
        '    Anzeigen-Leistung messen\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '    Anzeigen oder Inhalte technisch bereitstellen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:395 Tage\n' +
        '\n' +
        'Das Cookie läuft 395 Tage nach Ihrem letzten Besuch im Amazon-Shop ab.\n' +
        '\n' +
        'Dieser Anbieter verwendet zusätzlich zu Cookies weitere Methoden für die Speicherung von Informationen oder den' +
        ' Zugriff auf Informationen, z. B. die lokale Speicherung.\n' +
        '\n' +
        'https://www.indexexchange.com/privacy\n'
    },
    {
      title: 'Yahoo EMEA Limited',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Auswahl einfacher Anzeigen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '    Anzeigen oder Inhalte technisch bereitstellen\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Personalisierte Inhalte auswählen Zusammenführen mit Offline-Datenquellen\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:365 Tage\n' +
        '\n' +
        'Das Cookie läuft 365 Tage nach Ihrem letzten Besuch im Amazon-Shop ab.\n' +
        '\n' +
        'https://legal.yahoo.com/ie/en/yahoo/privacy/index.html\n'
    },
    {
      title: 'TripleLift, Inc.',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Auswahl einfacher Anzeigen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '    Anzeigen oder Inhalte technisch bereitstellen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:90 Tage\n' +
        '\n' +
        'Dieser Anbieter verwendet zusätzlich zu Cookies weitere Methoden für die Speicherung von Informationen oder ' +
        'den Zugriff auf Informationen, z. B. die lokale Speicherung.\n' +
        '\n' +
        'https://triplelift.com/privacy/\n'
    },
    {
      title: 'Xandr, Inc.',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Auswahl einfacher Anzeigen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '    Anzeigen oder Inhalte technisch bereitstellen\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:90 Tage\n' +
        '\n' +
        'Das Cookie läuft 90 Tage nach Ihrem letzten Besuch im Amazon-Shop ab.\n' +
        '\n' +
        'Dieser Anbieter verwendet zusätzlich zu Cookies weitere Methoden' +
        ' für die Speicherung von Informationen oder den Zugriff auf Informationen, z. B. die lokale Speicherung.\n' +
        '\n' +
        'https://www.xandr.com/privacy/platform-privacy-policy/\n'
    },
    {
      title: 'Unruly Group LLC',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '    Anzeigen oder Inhalte technisch bereitstellen\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Personalisierte Inhalte auswählen Zusammenführen mit Offline-Datenquellen\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:395 Tage\n' +
        '\n' +
        'https://unruly.co/legal/privacy/\n'
    },
    {
      title: 'NEURAL.ONE',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Personalisierte Anzeigen auswählen\n' +
        '    Anzeigen-Leistung messen\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '    Anzeigen oder Inhalte technisch bereitstellen\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Personalisierte Inhalte auswählen Zusammenführen mit Offline-Datenquellen\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:365 Tage\n' +
        '\n' +
        'Das Cookie läuft 365 Tage nach Ihrem letzten Besuch im Amazon-Shop ab.\n' +
        '\n' +
        'https://web.neural.one/privacy-policy/\n'
    },
    {
      title: 'ADITION technologies GmbH',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Auswahl einfacher Anzeigen\n' +
        '    Personalisierte Anzeigen auswählen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '    Anzeigen oder Inhalte technisch bereitstellen\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Personalisierte Inhalte auswählen Zusammenführen mit Offline-Datenquellen\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:90 Tage\n' +
        '\n' +
        'Das Cookie läuft 90 Tage nach Ihrem letzten Besuch im Amazon-Shop ab.\n' +
        '\n' +
        'https://www.adition.com/en/privacy-platform\n'
    },
    {
      title: 'Taboola Europe Limited',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Auswahl einfacher Anzeigen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '    Anzeigen oder Inhalte technisch bereitstellen\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Personalisierte Inhalte auswählen Zusammenführen mit Offline-Datenquellen\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:365 Tage\n' +
        '\n' +
        'Das Cookie läuft 365 Tage nach Ihrem letzten Besuch im Amazon-Shop ab.\n' +
        '\n' +
        'Dieser Anbieter verwendet zusätzlich zu Cookies weitere Methoden für die Speicherung ' +
        'von Informationen oder den Zugriff auf Informationen, z. B. die lokale Speicherung.\n' +
        '\n' +
        'https://www.taboola.com/privacy-policy\n'
    },
    {
      title: 'Adform',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Auswahl einfacher Anzeigen\n' +
        '    Personalisierte Anzeigen auswählen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '    Anzeigen oder Inhalte technisch bereitstellen\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Personalisierte Inhalte auswählen Zusammenführen mit Offline-Datenquellen\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:60 Tage\n' +
        '\n' +
        'https://site.adform.com/privacy-center/platform-privacy/product-and-services-privacy-policy/\n'
    },
    {
      title: 'Magnite, Inc.',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Auswahl einfacher Anzeigen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '    Anzeigen oder Inhalte technisch bereitstellen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:365 Tage\n' +
        '\n' +
        'https://www.magnite.com/legal/advertising-technology-privacy-policy/\n'
    },
    {
      title: 'Sirdata',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Auswahl einfacher Anzeigen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '    Anzeigen oder Inhalte technisch bereitstellen\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Personalisierte Inhalte auswählen Zusammenführen mit Offline-Datenquellen\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:365 Tage\n' +
        '\n' +
        'https://www.sirdata.com/en/Privacy\n'
    },
    {
      title: 'Sizmek by Amazon',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Auswahl einfacher Anzeigen\n' +
        '    Personalisierte Anzeigen auswählen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '    Anzeigen oder Inhalte technisch bereitstellen\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Personalisierte Inhalte auswählen Zusammenführen mit Offline-Datenquellen\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:395 Tage\n' +
        '\n' +
        'Das Cookie läuft 395 Tage nach Ihrem letzten Besuch im Amazon-Shop ab.\n' +
        '\n' +
        'Dieser Anbieter verwendet zusätzlich zu Cookies weitere Methoden für die Speicherung von Informationen ' +
        'oder den Zugriff auf Informationen, z. B. die lokale Speicherung.\n' +
        '\n' +
        'https://www.sizmek.com/privacy-policy/\n'
    },
    {
      title: 'OpenX',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Auswahl einfacher Anzeigen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '    Anzeigen oder Inhalte technisch bereitstellen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:365 Tage\n' +
        '\n' +
        'Das Cookie läuft 365 Tage nach Ihrem letzten Besuch im Amazon-Shop ab.\n' +
        '\n' +
        'https://www.openx.com/legal/privacy-policy/\n'
    },
    {
      title: 'PubMatic, Inc.',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Auswahl einfacher Anzeigen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Personalisierte Inhalte auswählen Zusammenführen mit Offline-Datenquellen\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:90 Tage\n' +
        '\n' +
        'https://pubmatic.com/privacy-policy/\n'
    },
    {
      title: 'Comscore B.V.',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Personalisierte Inhalte auswählen Zusammenführen mit Offline-Datenquellen\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:720 Tage\n' +
        '\n' +
        'Das Cookie läuft 720 Tage nach Ihrem letzten Besuch im Amazon-Shop ab.\n' +
        '\n' +
        'https://www.scorecardresearch.com/privacy.aspx?newlanguage=1\n'
    },
    {
      title: 'Flashtalking, Inc. ',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Auswahl einfacher Anzeigen\n' +
        '    Personalisierte Anzeigen auswählen\n' +
        '    Anzeigen-Leistung messen\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:730 Tage\n' +
        '\n' +
        'https://www.flashtalking.com/privacypolicy/\n'
    },
    {
      title: 'Semasio GmbH',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:365 Tage\n' +
        '\n' +
        'Das Cookie läuft 365 Tage nach Ihrem letzten Besuch im Amazon-Shop ab.\n' +
        '\n' +
        'https://www.semasio.com/privacy-policy/\n'
    },
    {
      title: 'Tapad, Inc. ',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:60 Tage\n' +
        '\n' +
        'Dieser Anbieter verwendet zusätzlich zu Cookies weitere Methoden für die Speicherung' +
        ' von Informationen oder den Zugriff auf Informationen, z. B. die lokale Speicherung.\n' +
        '\n' +
        'https://www.tapad.com/eu-privacy-policy\n'
    },
    {
      title: 'Adloox SA',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Anzeigen-Leistung messen\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '\n' +
        'https://adloox.com/disclaimer\n'
    },
    {
      title: 'LiveRamp, Inc. ',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Auswahl einfacher Anzeigen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '    Anzeigen oder Inhalte technisch bereitstellen\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Personalisierte Inhalte auswählen Zusammenführen mit Offline-Datenquellen\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:365 Tage\n' +
        '\n' +
        'Das Cookie läuft 365 Tage nach Ihrem letzten Besuch im Amazon-Shop ab.\n' +
        '\n' +
        'Dieser Anbieter verwendet zusätzlich zu Cookies weitere Methoden für die Speicherung' +
        ' von Informationen oder den Zugriff auf Informationen, z. B. die lokale Speicherung.\n' +
        '\n' +
        'https://liveramp.fr/iab-transparency-consent-framework/\n'
    },
    {
      title: 'GroupM UK Limited',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Auswahl einfacher Anzeigen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '    Anzeigen oder Inhalte technisch bereitstellen\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Personalisierte Inhalte auswählen Zusammenführen mit Offline-Datenquellen\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:395 Tage\n' +
        '\n' +
        'https://www.groupm.com/privacy-notice\n'
    },
    {
      title: 'Magnite, Inc. (Outstream)',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Auswahl einfacher Anzeigen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '    Anzeigen oder Inhalte technisch bereitstellen\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Personalisierte Inhalte auswählen Zusammenführen mit Offline-Datenquellen\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:365 Tage\n' +
        '\n' +
        'https://www.magnite.com/legal/advertising-technology-privacy-policy/\n'
    },
    {
      title: 'Dynata LLC',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Personalisierte Inhalte auswählen Zusammenführen mit Offline-Datenquellen\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:365 Tage\n' +
        '\n' +
        'https://www.opinionoutpost.co.uk/en-gb/policies/privacy\n'
    },
    {
      title: 'Sublime',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Auswahl einfacher Anzeigen\n' +
        '    Personalisierte Anzeigen auswählen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:395 Tage\n' +
        '\n' +
        'Dieser Anbieter verwendet zusätzlich zu Cookies weitere Methoden für die Speicherung' +
        ' von Informationen oder den Zugriff auf Informationen, z. B. die lokale Speicherung.\n' +
        '\n' +
        'https://ayads.co/privacy.php\n'
    },
    {
      title: 'smartclip Europe GmbH',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Auswahl einfacher Anzeigen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '    Anzeigen oder Inhalte technisch bereitstellen\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:365 Tage\n' +
        '\n' +
        'Das Cookie läuft 365 Tage nach Ihrem letzten Besuch im Amazon-Shop ab.\n' +
        '\n' +
        'https://privacy-portal.smartclip.net/\n'
    },
    {
      title: 'DoubleVerify Inc.',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Auswahl einfacher Anzeigen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '    Anzeigen oder Inhalte technisch bereitstellen\n' +
        '\n' +
        'https://doubleverify.com/privacy-notice/\n'
    },
    {
      title: 'BIDSWITCH GmbH',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Auswahl einfacher Anzeigen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '    Anzeigen oder Inhalte technisch bereitstellen\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Personalisierte Inhalte auswählen Zusammenführen mit Offline-Datenquellen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:365 Tage\n' +
        '\n' +
        'Das Cookie läuft 365 Tage nach Ihrem letzten Besuch im Amazon-Shop ab.\n' +
        '\n' +
        'Dieser Anbieter verwendet zusätzlich zu Cookies weitere Methoden für die Speicherung' +
        ' von Informationen oder den Zugriff auf Informationen, z. B. die lokale Speicherung.\n' +
        '\n' +
        'https://www.bidswitch.com/privacy-policy/\n'
    },
    {
      title: 'Teads ',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Auswahl einfacher Anzeigen\n' +
        '    Personalisierte Anzeigen auswählen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '    Anzeigen oder Inhalte technisch bereitstellen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:365 Tage\n' +
        '\n' +
        'https://www.teads.com/privacy-policy/\n'
    },
    {
      title: 'Meetrics GmbH',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:365 Tage\n' +
        '\n' +
        'https://www.meetrics.com/en/data-privacy/\n'
    },
    {
      title: 'SpotX, Inc',
      accept: false,
      details: 'Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Auswahl einfacher Anzeigen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '    Anzeigen oder Inhalte technisch bereitstellen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:365 Tage\n' +
        '\n' +
        'Dieser Anbieter verwendet zusätzlich zu Cookies weitere Methoden' +
        ' für die Speicherung von Informationen oder den Zugriff auf Informationen, z. B. die lokale Speicherung.\n' +
        '\n' +
        'https://www.spotx.tv/privacy-policy/\n'
    },
    {
      title: 'Audiens S.r.l.',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Personalisierte Inhalte auswählen Zusammenführen mit Offline-Datenquellen\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        'https://www.audiens.com/privacy\n'
    },
    {
      title: 'emetriq GmbH',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Auswahl einfacher Anzeigen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Personalisierte Inhalte auswählen Zusammenführen mit Offline-Datenquellen\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:365 Tage\n' +
        '\n' +
        'Dieser Anbieter verwendet zusätzlich zu Cookies weitere Methoden' +
        ' für die Speicherung von Informationen oder den Zugriff auf Informationen, z. B. die lokale Speicherung.\n' +
        '\n' +
        'https://www.emetriq.com/datenschutz/\n'
    },
    {
      title: 'Bannerflow AB',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Personalisierte Anzeigen auswählen\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '    Anzeigen oder Inhalte technisch bereitstellen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:365 Tage\n' +
        '\n' +
        'https://www.bannerflow.com/privacy\n'
    },
    {
      title: 'Integral Ad Science, Inc.',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '\n' +
        'https://integralads.com/privacy-policy/\n'
    },
    {
      title: 'Weborama',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Auswahl einfacher Anzeigen\n' +
        '    Personalisierte Anzeigen auswählen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '    Anzeigen oder Inhalte technisch bereitstellen\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Personalisierte Inhalte auswählen Zusammenführen mit Offline-Datenquellen\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:397 Tage\n' +
        '\n' +
        'https://weborama.com/respect-de-la-vie-privee-2-2/\n'
    },
    {
      title: 'Comcast International France SAS ',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Personalisierte Inhalte auswählen Zusammenführen mit Offline-Datenquellen\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:182 Tage\n' +
        '\n' +
        'Das Cookie läuft 182 Tage nach Ihrem letzten Besuch im Amazon-Shop ab.\n' +
        '\n' +
        'Dieser Anbieter verwendet zusätzlich zu Cookies weitere Methoden für' +
        ' die Speicherung von Informationen oder den Zugriff auf Informationen, z. B. die lokale Speicherung.\n' +
        '\n' +
        'https://www.freewheel.com/privacy-policy\n'
    },
    {
      title: 'Jivox Corporation',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Auswahl einfacher Anzeigen\n' +
        '    Personalisierte Anzeigen auswählen\n' +
        '    Anzeigen-Leistung messen\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '    Anzeigen oder Inhalte technisch bereitstellen\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Personalisierte Inhalte auswählen Zusammenführen mit Offline-Datenquellen\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:90 Tage\n' +
        '\n' +
        'https://www.jivox.com/privacy\n'
    },
    {
      title: 'zeotap GmbH',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Personalisierte Inhalte auswählen Zusammenführen mit Offline-Datenquellen\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:365 Tage\n' +
        '\n' +
        'Dieser Anbieter verwendet zusätzlich zu Cookies weitere Methoden für ' +
        'die Speicherung von Informationen oder den Zugriff auf Informationen, z. B. die lokale Speicherung.\n' +
        '\n' +
        'https://zeotap.com/privacy_policy\n'
    },
    {
      title: 'Exactag GmbH',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Anzeigen-Leistung messen\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:180 Tage\n' +
        '\n' +
        'https://www.exactag.com/en/data-privacy/\n'
    },
    {
      title: 'The Kantar Group Limited',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Auswahl einfacher Anzeigen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Anzeigen oder Inhalte technisch bereitstellen\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Personalisierte Inhalte auswählen Zusammenführen mit Offline-Datenquellen\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:913 Tage\n' +
        '\n' +
        'https://www.kantar.com/cookies-policies\n'
    },
    {
      title: 'Samba TV Inc.',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Auswahl einfacher Anzeigen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Personalisierte Inhalte auswählen Zusammenführen mit Offline-Datenquellen\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:390 Tage\n' +
        '\n' +
        'Das Cookie läuft 390 Tage nach Ihrem letzten Besuch im Amazon-Shop ab.\n' +
        '\n' +
        'https://samba.tv/legal/privacy-policy/\n'
    },
    {
      title: 'Oracle Data Cloud',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Personalisierte Inhalte auswählen Zusammenführen mit Offline-Datenquellen\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:180 Tage\n' +
        '\n' +
        'https://www.oracle.com/legal/privacy/marketing-cloud-data-cloud-privacy-policy.html\n'
    },
    {
      title: 'Eulerian Technologies',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Auswahl einfacher Anzeigen\n' +
        '    Personalisierte Anzeigen auswählen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Personalisierte Inhalte auswählen Zusammenführen mit Offline-Datenquellen\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:390 Tage\n' +
        '\n' +
        'Dieser Anbieter verwendet zusätzlich zu Cookies weitere Methoden' +
        ' für die Speicherung von Informationen oder den Zugriff auf Informationen, z. B. die lokale Speicherung.\n' +
        '\n' +
        'https://www.eulerian.com/en/privacy/\n'
    },
    {
      title: 'Neodata Group srl',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Auswahl einfacher Anzeigen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '    Anzeigen oder Inhalte technisch bereitstellen\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Personalisierte Inhalte auswählen Zusammenführen mit Offline-Datenquellen\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:365 Tage\n' +
        '\n' +
        'Dieser Anbieter verwendet zusätzlich zu Cookies weitere Methoden' +
        ' für die Speicherung von Informationen oder den Zugriff auf Informationen, z. B. die lokale Speicherung.\n' +
        '\n' +
        'https://www.neodatagroup.com/privacy-policy/\n'
    },
    {
      title: 'Innovid Inc.',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Auswahl einfacher Anzeigen\n' +
        '    Personalisierte Anzeigen auswählen\n' +
        '    Anzeigen-Leistung messen\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '    Anzeigen oder Inhalte technisch bereitstellen\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Personalisierte Inhalte auswählen Zusammenführen mit Offline-Datenquellen\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:91 Tage\n' +
        '\n' +
        'https://www.innovid.com/privacy-policy\n'
    },
    {
      title: 'NeuStar, Inc.',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Personalisierte Inhalte auswählen Zusammenführen mit Offline-Datenquellen\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:3.650 Tage\n' +
        '\n' +
        'https://www.home.neustar/privacy\n'
    },
    {
      title: 'Salesforce.com, Inc. ',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Personalisierte Inhalte auswählen Zusammenführen mit Offline-Datenquellen\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:180 Tage\n' +
        '\n' +
        'Dieser Anbieter verwendet zusätzlich zu Cookies weitere Methoden' +
        ' für die Speicherung von Informationen oder den Zugriff auf Informationen, z. B. die lokale Speicherung.\n' +
        '\n' +
        'https://www.salesforce.com/company/privacy/\n'
    },
    {
      title: 'Lucid Holdings, LLC',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Personalisierte Inhalte auswählen Zusammenführen mit Offline-Datenquellen\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:730 Tage\n' +
        '\n' +
        'https://luc.id/privacy-policy/\n'
    },
    {
      title: 'PaperG, Inc. dba Thunder Industries ',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Personalisierte Anzeigen auswählen\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '    Anzeigen oder Inhalte technisch bereitstellen\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:30 Tage\n' +
        '\n' +
        'https://www.makethunder.com/privacy\n'
    },
    {
      title: 'Kochava Inc. ',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Anzeigen-Leistung messen\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Personalisierte Inhalte auswählen Zusammenführen mit Offline-Datenquellen\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        'https://www.kochava.com/support-privacy/\n'
    },
    {
      title: 'Adobe Audience Manager, Adobe Experience Platform ',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:180 Tage\n' +
        '\n' +
        'Das Cookie läuft 180 Tage nach Ihrem letzten Besuch im Amazon-Shop ab.\n' +
        '\n' +
        'https://www.adobe.com/privacy/policy.html\n'
    },
    {
      title: 'Dentsu Italia SpA',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Auswahl einfacher Anzeigen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Personalisierte Inhalte auswählen Zusammenführen mit Offline-Datenquellen\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:60 Tage\n' +
        '\n' +
        'Das Cookie läuft 60 Tage nach Ihrem letzten Besuch im Amazon-Shop ab.\n' +
        '\n' +
        'https://www.dentsu.com/it/it/policies/info-cookie\n'
    },
    {
      title: 'Google Advertising Products',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Auswahl einfacher Anzeigen\n' +
        '    Personalisierte Anzeigen auswählen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '    Anzeigen oder Inhalte technisch bereitstellen\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Personalisierte Inhalte auswählen Zusammenführen mit Offline-Datenquellen\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:395 Tage\n' +
        '\n' +
        'Dieser Anbieter verwendet zusätzlich zu Cookies weitere Methoden' +
        ' für die Speicherung von Informationen oder den Zugriff auf Informationen, z. B. die lokale Speicherung.\n' +
        '\n' +
        'https://policies.google.com/privacy\n'
    },
    {
      title: 'RevJet',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Auswahl einfacher Anzeigen\n' +
        '    Personalisierte Anzeigen auswählen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Personalisierte Inhalte auswählen Zusammenführen mit Offline-Datenquellen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:730 Tage\n' +
        '\n' +
        'https://www.revjet.com/privacy\n' +
        '\n\n' +
        'Laura Utz hier: wenn Sie das hier lesen...erstmal VIELEN DANK! ' +
        'Und schreiben sie eine Mail an lauracharlotte.hofmann@stud.tu-darmstadt.de. ' +
        'Dann schicke ich Ihnen persönlich eine riesen Tafel Schokolade zu! ' +
        'Denn dann hat sich das ganze copy-pasten nämlich zumindest für eine Person gelohnt!'
    },
    {
      title: 'Oracle Data Cloud - Moat',
      accept: false,
      details: ' Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '\n' +
        'https://www.oracle.com/legal/privacy/services-privacy-policy.html\n'
    },
    {
      title: 'Nielsen International SA',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Personalisierte Inhalte auswählen Zusammenführen mit Offline-Datenquellen\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        '\n' +
        'Cookie-Laufzeit:395 Tage\n' +
        '\n' +
        'https://www.nielsen.com/eu/en/legal/privacy-statement/digital-measurement/\n'
    },
    {
      title: 'Adjust GmbH',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Informationen auf einem Gerät speichern und/oder abrufen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        'Spezialzwecke:\n' +
        '\n' +
        '    Sicherheit gewährleisten, Betrug verhindern und Fehler beheben\n' +
        '\n' +
        'Funktionen:\n' +
        '\n' +
        '    Verschiedene Geräte verknüpfen\n' +
        '\n' +
        'https://www.adjust.com/terms/privacy-policy/\n'
    },
    {
      title: 'Threedium',
      accept: false,
      details: ' Zustimmungszwecke:\n' +
        '\n' +
        '    Auswahl einfacher Anzeigen\n' +
        '    Anzeigen-Leistung messen\n' +
        '    Marktforschung einsetzen, um Erkenntnisse über Zielgruppen zu gewinnen\n' +
        '    Produkte entwickeln und verbessern\n' +
        '\n' +
        'https://threedium.co.uk/privacy\n'
    },
    {
      title: 'jsdelivr.com',
      accept: false,
      details: ' Spezialzwecke:\n' +
        '\n' +
        '    Anzeigen oder Inhalte technisch bereitstellen\n' +
        '\n' +
        'https://www.jsdelivr.com/terms/privacy-policy-jsdelivr-net\n'
    }
  ];
  nonIabTcfList = [
    {title: 'CREATEJS', accept: false, details: 'their web address'},

    {title: 'Evidon', accept: false, details: 'their web address'},

    {title: 'TrustArc', accept: false, details: 'their web address'},

    {title: 'IRI', accept: false, details: 'their web address'},

    {title: 'Cloudflare', accept: false, details: 'their web address'},

    {title: 'MoPub', accept: false, details: 'their web address'},

    {title: 'Lytics', accept: false, details: 'their web address'},

    {title: 'mParticle', accept: false, details: 'their web address'},

    {title: 'MMI', accept: false, details: 'their web address'},

    {title: 'Stream Eye', accept: false, details: 'their web address'},

    {title: 'jQuery', accept: false, details: 'their web address'},

    {title: 'Branch', accept: false, details: 'their web address'},

    {title: 'AppsFlyer', accept: false, details: 'their web address'},

    {title: 'King', accept: false, details: 'their web address'},

    {title: 'Singular', accept: false, details: 'their web address'},

    {title: 'Facebook', accept: false, details: 'their web address'},

    {title: 'Twitter', accept: false, details: 'their web address'},

    {title: 'Treasure Data', accept: false, details: 'their web address'},

    {title: 'Habu', accept: false, details: 'their web address'},

    {title: 'Mapp Digital', accept: false, details: 'their web address'},

    {title: 'BlueKai', accept: false, details: 'their web address'},

    {
      title: 'iSpot',
      accept: false,
      details: 'their web address'
    }
  ];

  constructor(public scoreCardService: ScoreCardService, protected modalCtrl: ModalController, private router: Router) {
  }

  ngOnInit() {
  }

  acceptAll() {
    const cookies: ICookieScore = {
      website: 'amazon.com',
      noOfCookies: 6,
      acceptedCookies: 6
    };
    this.scoreCardService.setCookies(cookies);
    this.modalCtrl.dismiss();
    this.router.navigateByUrl('/gmx');
  }

  acceptSettings() {
    this.modalCtrl.dismiss(5);
  }


  async purposeAdjust() {
    const modal = await this.modalCtrl.create({
    component: PurposeAdjustComponent,
    backdropDismiss: false,
    cssClass: 'fullsize-adjust'
  });

    modal.onDidDismiss().then(async (data: any) => {
      if (data.data) {
        if(data.data === 'nothing stored'){
          //do nothing :)
        }else{
          this.modalCtrl.dismiss(data.data);
        }
      } else {
        //other popup handled all and dismissed = accept all -> dismiss all other popups
        this.modalCtrl.dismiss();
      }
    });
    return await modal.present();
  }
}
