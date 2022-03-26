import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GooglePageRoutingModule } from './google-routing.module';

import { GooglePage } from './google.page';
import {PopUpComponent} from './modal/pop-up/pop-up.component';
import {AdjustSettingsComponent} from './modal/adjust-settings/adjust-settings.component';
import {DropDownComponent} from '../../components/drop-down/drop-down.component';
import {TitledDropDownComponent} from '../../components/titled-drop-down/titled-drop-down.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GooglePageRoutingModule
    ],
    exports: [
        TitledDropDownComponent
    ],
    declarations: [
        GooglePage,
        PopUpComponent,
        AdjustSettingsComponent,
        DropDownComponent,
        TitledDropDownComponent
    ]
})
export class GooglePageModule {}
