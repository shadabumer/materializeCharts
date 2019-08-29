import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HttpClient } from '@angular/common/http';
import { Subscription, interval } from 'rxjs';

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

        // const updated_normal_data = [];
        // const updated_abnormal_data = [];
        // console.log(data)
        // for(let row of data) {
        //   const temp_row = [
        //     new Date(row.timestamp).getTime(),
        //     row.value
        //   ];
        //   row.Normal === 1 ? updated_normal_data.push(temp_row) : updated_abnormal_data.push(temp_row);
        // }

        Object.entries(data).forEach(row => {
            // console.log(new Date(row[1].timestamp).getTime());
            // console.log(row[1].value)
            // console.log(row[1].Normal === 1)
            const tempRow = [
                new Date(row[1].timestamp).getTime(),
                row[1].value
            ];
            row[1].Normal === 1 ? updatedNormalData.push(tempRow) : updatedAbnormalData.push(tempRow);
        });
        // console.log('updatedNormalData: ');
        // updatedNormalData.forEach(arrayRow => {
        //     // console.log(arrayRow);
        //     this.chartOptions.series[0]['data'].push(arrayRow);
        // });
        // // console.log('updatedAbnormalData: ');
        // updatedAbnormalData.forEach(arrayRow => {
        //     // console.log(arrayRow);
        //     this.chartOptions.series[1]['data'].push(arrayRow);
        //     console.log( this.chartOptions.series[1]['data'])
        // })
        // console.log(typeof(this.chartOptions.series[1]['data']))
        this.chartOptions.series[0]['data'] = updatedNormalData;
        console.log(this.chartOptions.series[0]['data'])
        this.chartOptions.series[1]['data'] = updatedAbnormalData;
        // console.log(this.chartOptions.series[0]['data']);
        // console.log(this.chartOptions.series[1]['data']);
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
