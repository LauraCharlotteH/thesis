import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThirdPartyAdjustComponent } from './third-party-adjust.component';

describe('ThirdPartyAdjustComponent', () => {
  let component: ThirdPartyAdjustComponent;
  let fixture: ComponentFixture<ThirdPartyAdjustComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdPartyAdjustComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThirdPartyAdjustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
