import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageHomeComponent } from './manage-home/manage-home.component';
import { SettingsComponent } from './settings/settings.component';
import { AdminGuard } from '../auth/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: ManageHomeComponent,
    canActivate: [AdminGuard],
    children: [
      {path: 'settings', component: SettingsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
