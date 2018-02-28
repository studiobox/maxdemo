import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { SampleGrid } from './sample-grid';

@Component({
  selector: 'app-sla-metric',
  templateUrl: './sla-metric.component.html',
  styleUrls: ['./sla-metric.component.css'],
  providers: [Modal]
})
export class SlaMetricComponent implements OnInit {

  headerTitle: String = 'SLA Metric';
  headerData = {
    'Name': 'SLA Metric',
    'appCode': 'sla',
    'status' : 'enabled'
  };

  public gridConfig: any = {};
  public gridRows: Array<any> = [];
  public gridColumns: Array<any> = [];
  public gridPage: Number = 1;
  public gridItemPerPage: Number = 15;
  public gridMaxSize: Number = 5;
  public gridNumPage: Number = 1;
  public gridLength: Number = 0;
  public gridLinks: any = {
    isEdit : false,
    isDelete: false
  };
  public gridMessage: any = {
      isMessage : false,
      message  : 'No Data to Display..',
      colspan : 1
  };
  public gridRowCount: number;
  public selectedGridRow: number;

  metricBlocks: any;
  data: any = {
    completed: [
      {
        x: Date.UTC(2017, 12, 26, 12, 20),
        y: 0,
        doc_count: 4,
        marker: { radius: 4}
      },
      {
        x: Date.UTC(2017, 12, 26, 12, 30),
        y: 0,
        doc_count: 10,
        marker: { radius: 10}
      }, {
        x: Date.UTC(2017, 12, 26, 13, 22),
        y: 0,
        doc_count: 7,
        marker: { radius: 7}
      },
      {
        x: Date.UTC(2017, 12, 26, 13, 27),
        y: 0,
        doc_count: 14,
        marker: { radius: 14}
      },
      {
        x: Date.UTC(2017, 12, 26, 14, 25),
        y: 0,
        doc_count: 7,
        marker: { radius: 7}
      },
      {
        x: Date.UTC(2017, 12, 26, 14, 32),
        y: 0,
        doc_count: 10,
        marker: { radius: 10}
      },
      {
        x: Date.UTC(2017, 12, 26, 14, 43),
        y: 0,
        doc_count: 6,
        marker: { radius: 6}
      },
      {
        x: Date.UTC(2017, 12, 26, 14, 55),
        y: 0,
        doc_count: 6,
        marker: { radius: 6}
      },
      {
        x: Date.UTC(2017, 12, 26, 15, 0),
        y: 0,
        doc_count: 3,
        marker: { radius: 3}
    }],
    pending: [
      {
        x: Date.UTC(2017, 12, 26, 15, 30),
        y: 0,
        doc_count: 8,
        marker: { radius: 8}
      },
      {
        x: Date.UTC(2017, 12, 26, 15, 34),
        y: 0,
        doc_count: 12,
        marker: { radius: 12}
      },
      {
        x: Date.UTC(2017, 12, 26, 16, 43),
        y: 0,
        doc_count: 12,
        marker: { radius: 12}
      },
      {
        x: Date.UTC(2017, 12, 26, 16, 50),
        y: 0,
        doc_count: 4,
        marker: { radius: 4}
      },
      {
        x: Date.UTC(2017, 12, 26, 17, 0),
        y: 0,
        doc_count: 7,
        marker: { radius: 7}
      },
      {
        x: Date.UTC(2017, 12, 26, 17, 30),
        y: 0,
        doc_count: 3,
        marker: { radius: 3}
      },
      {
        x: Date.UTC(2017, 12, 26, 18, 0),
        y: 0,
        doc_count: 4,
        marker: { radius: 4}
    }]
  };

  buubleChartData: any;

  SlaActivityData: any = [{
    name: 'XXX XXXX',
    Destination: 'AMAM XXX XXXXXX',
    File_Name: 'some_file_name1',
    Package: 1,
    Est_Departure: '10:05 AM',
    SLA_Cutoff: '11:35 AM',
    Act_Delivery: '01:15 PM',
    Status: 'SAL_MISS'
  }, {
    name: 'XXX XXXX',
    Destination: 'BXXX AMA XXXXXX',
    File_Name: 'some_file_name1',
    Package: 1,
    Est_Departure: '10:35 AM',
    SLA_Cutoff: '11:35 AM',
    Act_Delivery: '01:15 PM',
    Status: 'SAL_MISS'
  }, {
    name: 'XXX XXXX',
    Destination: 'XXXX State XXXXXX',
    File_Name: 'some_file_name1',
    Package: 1,
    Est_Departure: '10:15 AM',
    SLA_Cutoff: '11:35 AM',
    Act_Delivery: '01:15 PM',
    Status: 'SAL_MISS'
  }, {
    name: 'XXX XXXX',
    Destination: 'CXXX XXX XXXXXX',
    File_Name: 'some_file_name1',
    Package: 1,
    Est_Departure: '10:35 AM',
    SLA_Cutoff: '11:35 AM',
    Act_Delivery: '01:15 PM',
    Status: 'SAL_MISS'
  }, {
    name: 'XXX XXXX',
    Destination: 'XXXX XXX XXXXXX',
    File_Name: 'some_file_name1',
    Package: 1,
    Est_Departure: '10:35 AM',
    SLA_Cutoff: '11:35 AM',
    Act_Delivery: '01:15 PM',
    Status: 'SAL_MISS'
  }];

  // SlaActivityData: any = [{
  //   name: 'XXX XXXX',
  //   Destination: 'XXXX XXX XXXXXX',
  //   File_Name: 'some_file_name1',
  //   Package: 1,
  //   Est_Departure: '10:35 AM',
  //   SLA_Cutoff: '11:35 AM',
  //   Act_Delivery: '01:15 PM',
  //   Status: 'SAL_MISS'
  // }, {
  //   name: 'XXX XXXX',
  //   Destination: 'XXXX XXX XXXXXX',
  //   File_Name: 'some_file_name1',
  //   Package: 1,
  //   Est_Departure: '10:35 AM',
  //   SLA_Cutoff: '11:35 AM',
  //   Act_Delivery: '01:15 PM',
  //   Status: 'SAL_MISS'
  // }, {
  //   name: 'XXX XXXX',
  //   Destination: 'XXXX XXX XXXXXX',
  //   File_Name: 'some_file_name1',
  //   Package: 1,
  //   Est_Departure: '10:35 AM',
  //   SLA_Cutoff: '11:35 AM',
  //   Act_Delivery: '01:15 PM',
  //   Status: 'SAL_MISS'
  // }, {
  //   name: 'XXX XXXX',
  //   Destination: 'XXXX XXX XXXXXX',
  //   File_Name: 'some_file_name1',
  //   Package: 1,
  //   Est_Departure: '10:35 AM',
  //   SLA_Cutoff: '11:35 AM',
  //   Act_Delivery: '01:15 PM',
  //   Status: 'SAL_MISS'
  // }, {
  //   name: 'XXX XXXX',
  //   Destination: 'XXXX XXX XXXXXX',
  //   File_Name: 'some_file_name1',
  //   Package: 1,
  //   Est_Departure: '10:35 AM',
  //   SLA_Cutoff: '11:35 AM',
  //   Act_Delivery: '01:15 PM',
  //   Status: 'SAL_MISS'
  // }];

  constructor(
    public modal: Modal,
    private ref: ChangeDetectorRef,
    private sampleGrid: SampleGrid
  ) { }

  ngOnInit() {
      this.metricBlocks = [
      {
        title: 'SLA\'s',
        kibanaLink: 'http://google.com',
        icon: 'glyphicon-stats',
        count: Math.floor(Math.random() * 10000),
        helpText: '',
        background: '#157DEC'
      },
      {
        title: 'SLA\'s Met',
        kibanaLink: 'http://google.com',
        icon: 'glyphicon-stats',
        count: Math.floor(Math.random() * 10000),
        helpText: '',
        background: '#89C35C'
      },
      {
        title: 'SLA\'s Pending',
        kibanaLink: 'http://google.com',
        icon: 'glyphicon-stats',
        count: Math.floor(Math.random() * 10000),
        helpText: '',
        background: '#E9AB17'
      },
      {
        title: 'SLA\'s Misses',
        kibanaLink: 'http://google.com',
        icon: 'glyphicon-stats',
        count: Math.floor(Math.random() * 10000),
        helpText: '',
        background: '#F75D59'
      },
      {
        title: 'Active Delays',
        kibanaLink: 'http://google.com',
        icon: 'glyphicon-stats',
        count: Math.floor(Math.random() * 10000),
        helpText: '',
        background: '#FF8040'
      },
      {
        title: 'Total Files',
        kibanaLink: 'http://google.com',
        icon: 'glyphicon-stats',
        count: Math.floor(Math.random() * 10000),
        helpText: '',
        background: '#157DEC'
      }
    ];

    setInterval(() => { this.changeMetricCount(); }, 10000);
    this.gridColumns = this.sampleGrid.InitializeColumns();
    this.gridConfig = this.sampleGrid.InitializeConfig();
    this.onAuditLogChangeTable(this.gridConfig);
  }

  slaView(item) {
    this.modal.alert()
      .size('lg')
      .showClose(true)
      .title('View Dialog')
      .body(`<h4 class="panel-title">Eye Clicked...</h4>`)
      .open();
  }

  changeMetricCount() {
    // tslint:disable-next-line:forin
    for ( let i in this.metricBlocks ) {
      this.metricBlocks[i].count = Math.floor(Math.random() * 10000);
    }
  }

  // Table Functions
  public onAuditLogChangeTable(gridConfig: any, gridPage: any = {page: this.gridPage, itemsPerPage: this.gridItemPerPage}): any {
    this.onchange(gridConfig, gridPage, this.SlaActivityData);
    this.ref.detectChanges();
  }
  public onchange(gridConfig: any, page: any, gridData: any) {
    console.log(' onChange app ---> ', gridData);
    if (gridConfig.filtering) {
      Object.assign(this.gridConfig.filtering, gridConfig.filtering);
    }

    if (gridConfig.sorting) {
      Object.assign(this.gridConfig.sorting, gridConfig.sorting);
    }
    const filteredData = this.sampleGrid.changeFilter(gridData, gridConfig);
    if (!filteredData.length) {
      this.gridMessage.isMessage = true;
      this.gridMessage.colspan = this.gridColumns.length;
      this.gridLength = 0;
      this.gridRowCount = 0;
    } else {
      this.gridMessage.isMessage = false;
      this.gridLength = filteredData.length;
      this.gridRowCount = filteredData.length;
    }
    const sortedData = this.sampleGrid.changeSort(filteredData, gridConfig);

    this.gridRows = page && gridConfig.paging ? this.sampleGrid.changePage(page, sortedData) : sortedData;
    this.gridLength = sortedData.length;
  }

}
