import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-titled-drop-down',
  templateUrl: './titled-drop-down.component.html',
  styleUrls: ['./titled-drop-down.component.scss'],
})

/**
 * same as drop-down but this component allows to have a header, it also comes with many style variables -> see CSS
 */
export class TitledDropDownComponent implements OnInit {
  /**
   * The body of the drop down element (part that is toggled)
   *
   */
  @ViewChild('expandWrapper', { read: ElementRef }) expandWrapper: ElementRef;

  /**
   * The name of the assignment that will be displayed as the title for the accordion header
   *
   * @public
   * @property name
   * @type {string}
   */
  @Input()
  title: string;

  /**
   * Determines and stores the accordion state (I.e. opened or closed)
   *
   * @public
   * @property isMenuOpen
   * @type {boolean}
   */
  public isMenuOpen = false;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Allows the accordion state to be toggled (I.e. opened/closed)
   *
   * @public
   * @method toggleAccordion
   * @returns
   */
  public toggleAccordion(): void
  {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
