import {  Component,ViewChild, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill,
  NgApexchartsModule
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',

})
export class ChartComponent  {
  @ViewChild('chart') chart: ChartComponent = {} as ChartComponent;
    public chartOptions: Partial<any> = {} as Partial<any>;

    constructor() {

    }

    ngOnInit() {
        this.chartOptions = {

      series: [
        { name: 'series1', data: [31, 40, 28, 51, 42, 109, 100] },
        { name: 'series2', data: [11, 32, 45, 32, 34, 52, 41] },
      ],
      chart: { height: 350, type: 'area' },
      dataLabels: { enabled: false },
      stroke: { curve: 'smooth' },
      xaxis: {
        type: 'datetime',
        categories: [
          '2018-09-19T00:00:00.000Z',
          '2018-09-19T01:30:00.000Z',
          '2018-09-19T02:30:00.000Z',
          '2018-09-19T03:30:00.000Z',
          '2018-09-19T04:30:00.000Z',
          '2018-09-19T05:30:00.000Z',
          '2018-09-19T06:30:00.000Z',
        ],
      },
      tooltip: { x: { format: 'dd/MM/yy HH:mm' } }

    };
  }


}
