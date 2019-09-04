import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})

export class PieChartComponent implements OnInit {

  highcharts: typeof Highcharts = Highcharts;
  chartOptions = {   
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
        text: 'Browser market shares in January, 2018'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    legend: {
      align: 'center',
      verticalAlign: 'bottom',
      layout: 'horizontal'
    },
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
          name: 'Chrome',
          y: 61.41,
      }, {
          name: 'Internet Explorer',
          y: 11.84
      }, {
          name: 'Firefox',
          y: 10.85
      }, {
          name: 'Edge',
          y: 4.67
      }, {
          name: 'Safari',
          y: 4.18
      }, {
          name: 'Other',
          y: 7.05
      }]
    }]
  };

  constructor() { }


  ngOnInit() {
  }

  onToggleLegend() {
    this.chartOptions.plotOptions.pie.showInLegend = !this.chartOptions.plotOptions.pie.showInLegend;

    // making angular to detect the changes
    this.chartOptions = {
      ...this.chartOptions
    }
  }

  onLegendPosition() {
    if (this.chartOptions.legend.align === 'center')
      this.chartOptions.legend = {
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical'
      }; 
    else {
      this.chartOptions.legend = {
        align: 'center',
        verticalAlign: 'bottom',
        layout: 'horizontal'
      };
    }

    // making angular to detect the changes
    this.chartOptions = {
      ...this.chartOptions
    }
  }
/**
 * This function adds the new slice into the pie chart, buth the value of name will be same for all the newly created slice.
 * Value of y will be adjusted according to slices present in the chart.
 * series[0] is used because, series is an array with only one element.
 */
  onAddSlice() {
    this.chartOptions.series[0].data.push({name: 'new one', y: 10.01})
    
    // making angular to detect the changes
    this.chartOptions = {
      ...this.chartOptions
    }
  }
}