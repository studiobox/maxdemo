import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular-highcharts';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { SlaMetricComponent } from './sla-metric/sla-metric.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { StickerComponent } from './sticker/sticker.component';
import { ChartComponent } from '../chart/chart.component';
import { DashboardHeaderModule } from '@ama/dashboard-header';
import { StickerModule } from '@ama/sticker';
import { AMAGridModule } from '@ama/grid';
import { SampleGrid } from './sla-metric/sample-grid';

@NgModule({
  imports: [
    CommonModule,
    ChartModule,
    DashboardRoutingModule,
    DashboardHeaderModule,
    StickerModule,
    AMAGridModule
  ],
  declarations: [
    DashboardHomeComponent,
    SlaMetricComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardViewComponent,
    StickerComponent,
    ChartComponent
  ],
  providers: [
    SampleGrid
  ]
})
export class DashboardModule { }
