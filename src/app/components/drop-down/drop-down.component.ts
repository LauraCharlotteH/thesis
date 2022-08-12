import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
})

/**
 * Simple drop down with no header -> basically just an arrow to toggle a drop-down field containing whatever
 */
export class DropDownComponent implements OnInit {
  /**
   * The body of the drop down element (part that is toggled)
   *
   */
  @ViewChild('expandWrapper', { read: ElementRef }) expandWrapper: ElementRef;

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
