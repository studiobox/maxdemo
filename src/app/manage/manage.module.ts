import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageHomeComponent } from './manage-home/manage-home.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [
    CommonModule,
    ManageRoutingModule
  ],
  declarations: [ManageHomeComponent, SettingsComponent]
})
export class ManageModule { }
