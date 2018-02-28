import { Component, OnInit } from '@angular/core';
import { Globals } from '../../globals';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public globals: Globals, 
    public modal: Modal
  ) { }

  ngOnInit() {
  }

  menuCollapse() {
    this.globals.menuCollapsed = !this.globals.menuCollapsed;
  }

  alertsModal() {
    this.modal.alert()
      .size('lg')
      .showClose(true)
      .title('Latest Alerts')
      .body(`
          <article class="view-container">
            <!-- TABLE SECTION -->
            <section class="panel panel-default panel-basic">
                <header class="panel-heading">
                    <h4 class="panel-title">Latest Alerts</h4>
                </header>
                <!-- <summary class="panel-body"> -->
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th>Component</th>
                                <th>Message</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>time here</td>
                                <td>gdc2121</td>
                                <td>alert message here</td>
                                <td>
                                    <button type="button" class="icon-btn" (click)="slaView(item)"><i class="glyphicon glyphicon-eye-open"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>time here</td>
                                <td>gdc2121</td>
                                <td>alert message here</td>
                                <td>
                                    <button type="button" class="icon-btn" (click)="slaView(item)"><i class="glyphicon glyphicon-eye-open"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>time here</td>
                                <td>gdc2121</td>
                                <td>alert message here</td>
                                <td>
                                    <button type="button" class="icon-btn" (click)="slaView(item)"><i class="glyphicon glyphicon-eye-open"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                <!-- </summary> -->
            </section>
            <!-- END OF TABLE SECTION -->
        </article>`)
      .open();
  }

}
