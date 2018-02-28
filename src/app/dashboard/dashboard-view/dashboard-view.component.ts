import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css']
})
export class DashboardViewComponent implements OnInit {

  headerTitle: String = 'Dashboard';
  headerData = {
    'Name': 'Dashboard',
    'appCode': 'dashboard',
    'status' : 'enabled'
  };

  constructor() { }

  ngOnInit() {
  }

}
