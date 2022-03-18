import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
})
export class DropDownComponent implements OnInit {
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
  name: string;

  /**
   * The status of the assignment that will be displayed in the title for the accordion header
   *
   * @public
   * @property name
   * @type {string}
   */
  @Input()
  status: string;

  /**
   * The description of the assignment that will be displayed within the accordion body (when activated
   * by the user)
   *
   * @public
   * @property description
   * @type {string}
   */
  @Input()
  description: string;


  /**
   * The change event that will be broadcast to the parent component when the user interacts with the component's
   * <ion-button> element
   *
   * @public
   * @property change
   * @type {EventEmitter}
   */
    // eslint-disable-next-line @angular-eslint/no-output-native
  @Output()
  change: EventEmitter<string> = new EventEmitter<string>();


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


  /**
   * Allows the value for the <ion-button> element to be broadcast to the parent component
   *
   * @public
   * @method broadcastName
   * @returns
   */
  public broadcastName(name: string): void
  {
    this.change.emit(name);
  }

}
