import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
// import { Chart } from 'angular-highcharts';
import { chart } from 'highcharts';

@Component({
  selector: 'app-chart',
  // template: `
  //   <h1>{{title}}</h1>
  //   <div #chartTarget>
  //     chart target
  //   </div>`,
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @ViewChild('chartTarget') chartTarget: ElementRef;

  @Input() seriesData: any;

  chart: Highcharts.ChartObject;

  constructor() { }

  ngOnInit() {
    const options: Highcharts.Options = {
      chart: {
        type: 'scatter',
        backgroundColor: 'rgba(0,0,0,.0)',
        height: 160,
        zoomType: 'xy'
      },
      title: {
          text: 'SLA Bubble Chart'
      },
      subtitle: {
          text: ''
      },
      xAxis: {
        type: 'datetime',
        tickInterval: 3600 * 1000,
        lineWidth: 0,
        minorGridLineWidth: 0,
        lineColor: 'transparent',
        minorTickLength: 0,
        tickLength: 0,
        dateTimeLabelFormats: {
          hour: '%H:%M'
        },
        title: {
            text: ''
        },
        plotLines: [{
          color: 'black',
          value: Date.UTC(2017, 12, 26, 15, 15),
          width: 2,
          dashStyle: 'dashdot'
        }],
        endOnTick: true
      },
      yAxis: {
        categories: ['Level'],
        gridLineWidth: 0,
        minorGridLineWidth: 0,
        title: {
          text: ''
        },
        labels: {
          enabled: false
        }
      },
      plotOptions: {
        scatter: {
            marker: {
                symbol: 'circle',
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: 'Count: {point.doc_count}'
            }
        }
      },
      series: [{
          name: "Completed SLA's",
          color: 'rgba(173, 195, 92, 0.9)',
          data: this.seriesData.completed
        }, {
          name: "Estimated SLA's",
          color: 'rgba(233, 171, 23, 0.9)',
          data: this.seriesData.pending
      }],
      exporting: {
        enabled: false
      },
      credits: {
        enabled: false
      }
    };
    this.chart = chart(this.chartTarget.nativeElement, options);
  }

  changeSeriesData() {
    for(let i in this.seriesData.janeSeries) {
      this.seriesData.janeSeries[i] = Math.floor(Math.random() * 10);
    }
    for ( let i in this.seriesData.johnSeries ) {
      this.seriesData.johnSeries[i] = Math.floor(Math.random() * 10);
    }
  }

  ngOnDestroy() {
    this.chart = null;
  }

}
