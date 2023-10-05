import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HighchartConstants } from '../data/constants';
import { HighchartColorsModel } from '../models/highchart-colors.model';
import { HighchartTypeModel } from '../models/highchart-type.model';
import * as Highcharts from 'highcharts';
import { Chart } from 'angular-highcharts';
import { Options } from 'highcharts';
import { HighchartDataModel } from '../models/highchart-data.model';

@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.css']
})
export class HighchartsComponent implements OnInit {

  chart: Chart;
  options: Options;

  highchartColors: Array<HighchartColorsModel> = new Array<HighchartColorsModel>()
  highchartTypes: Array<HighchartTypeModel> = new Array<HighchartTypeModel>()
  highchartModel: HighchartDataModel = new HighchartDataModel();

  constructor() {

  }

  ngOnInit(): void {
    this.getHighChartColors();
    this.getHighChartTypes();

  }

  private getHighChartColors() {
    this.highchartColors = HighchartConstants.getHighchartColors;
  }

  private getHighChartTypes() {
    this.highchartTypes = HighchartConstants.getHighchartTypes;
  }

  onGenerateChart() {    
    if (this.highchartModel.chartType) {
      this.gererateHighchart();
    }
  }

  gererateHighchart() {
    this.options = {
      title: {
        text: 'Market Qtr Report'
      },
      xAxis: {
        categories: ['January', 'February', 'March'],
        title: {
          text: "Colors",
        }
      },
      yAxis: {
        min: 0,
        max: 10000,
        title: {
          text: "Select monthly revenue",
        }
      },
      series: [{
        showInLegend: false,   
        type: this.highchartModel.chartType == 'Bar' ? 'column' : this.highchartModel.chartType == 'Pie' ? 'pie' : 'line',
        data: [{ y: this.highchartModel.revenueForJanuary, color: this.highchartModel.colorForJanuary, name: "January" },
        { y: this.highchartModel.revenueForFebruary, color: this.highchartModel.colorForFebruary, name: "February" },
        { y: this.highchartModel.revenueForMarch, color: this.highchartModel.colorForMarch, name: "March" }],
      }]

    };
    let chart = new Chart(this.options);
    this.chart = chart;
  }

}
