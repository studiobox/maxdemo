import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { SlaMetricComponent } from './sla-metric/sla-metric.component';
import { AuthGuard } from '../auth/guards/auth.guard';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardHomeComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: '', component: DashboardViewComponent },
      { path: 'sla-metric', component: SlaMetricComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
