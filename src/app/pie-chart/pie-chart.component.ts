import { Component, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})

export class PieChartComponent implements OnInit {
  @ViewChild('sliceForm', {static: true}) sliceForm: NgForm;

  // to toggle legend button value i.e hide or show
  isLegend: boolean = true;

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
    const modal = document.querySelector('.modal');
    M.Modal.init(modal, {});
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
    // let sliceName: string, yValue: string | number;
    // do {
    //   sliceName = prompt('slice name : ');
    //   do {
    //     yValue = prompt('percentage: ');
    //   } while(yValue === "" || isNaN(parseInt(yValue)) || parseInt(yValue) < 0 ||  parseInt(yValue) >= 100 );
    // } while(sliceName === "" || sliceName === null);

    // console.log(`slice name: ${sliceName} \n y: ${yValue}`);
    
    // this.chartOptions.series[0].data.push({name: sliceName, y: parseInt(yValue)})
    
    // making angular to detect the changes
    console.log('add slice clicked!');
    console.log(this.sliceForm);

    // Object model that defines the new slice data
    let addSlice: {sliceName: string, yValue: number} = {
      sliceName: "",
      yValue: 0
    };

    // Getting the user input from the slice form within the modal
    addSlice.sliceName = this.sliceForm.value.sliceData.slicename;
    addSlice.yValue = this.sliceForm.value.sliceData.percentage;

    // Adding the new slice to the pie chart with given values
    this.chartOptions.series[0].data.push({name: addSlice.sliceName, y: addSlice.yValue});
    // Resetting the slice form
    this.sliceForm.reset();

    

    this.chartOptions = {
      ...this.chartOptions
    }
  }

  onRemoveSlice() {
    console.log('Remove slice was clicked!');
    this.chartOptions.series[0].data.pop();
    this.chartOptions = {
      ...this.chartOptions
    }
  }
}