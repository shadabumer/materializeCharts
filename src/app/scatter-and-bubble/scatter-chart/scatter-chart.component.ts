import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HttpClient } from '@angular/common/http';
import { Subscription, interval } from 'rxjs';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-scatter-chart',
  templateUrl: './scatter-chart.component.html',
  styleUrls: ['./scatter-chart.component.css']
})
export class ScatterChartComponent implements OnInit {

  highcharts = Highcharts;
  chartOptions = {
    chart: {
      type: 'scatter',
      height: 700
    },
    title: {
      text: 'Sample Scatter Plot'
    },
    credits: {
      enabled: false
    },
    tooltip: {
      formatter: function() {
        return 'x: ' + Highcharts.dateFormat('%e %b %y %H:%M:%S', this.x) + ' y: ' + this.y.toFixed(2);
      }
    },
    xAxis: {
      type: 'datetime',
      labels: {
        formatter: function() {
          return Highcharts.dateFormat('%e %b %y', this.value);
        }
      }
    },
    series: [
      {
        name: 'Normal',
        turboThreshold: 500000,
        color: 'rgba(223, 83, 83, .5)',
        // data: [[new Date('2018-01-25 18:38:31').getTime(), 2]]
        data: []
      },
      {
        name: 'Abnormal',
        turboThreshold: 500000,
        color: 'rgba(119, 152, 191, .5)',
        // data: [[new Date('2018-02-05 18:38:31').getTime(), 7]]
        data: []
      }
    ]
  };

  subscription: Subscription;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    const source = interval(3000);

    const apiLink = "https://api.myjson.com/bins/13lnf4";

    this.subscription = source.subscribe(val => this.getApiResponse(apiLink).then(data => {
        const updatedNormalData = [];
        const updatedAbnormalData = [];

        Object.entries(data).forEach(row => {
            const tempRow = [
                new Date(row[1].timestamp).getTime(),
                row[1].value
            ];
            row[1].Normal === 1 ? updatedNormalData.push(tempRow) : updatedAbnormalData.push(tempRow);
        });

        this.chartOptions.series[0]['data'] = updatedNormalData;
        this.chartOptions.series[1]['data'] = updatedAbnormalData;

        this.chartOptions = {
          ...this.chartOptions
        }
    }, error => {
        console.log('something went wrong: ' + error);
    }));
  }

  getApiResponse(url: string) {
      return this.http.get(url, {})
      .toPromise().then(res => {
          return res;
      });
  }
}
