import { Component } from '@angular/core';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
})
export class BarraComponent {
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  public barChartLabels: string[] = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
  ];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Choripan' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Bife de chorizo' },
  ];

  // * events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    //console.log(e);
  }

  public randomize(): void {
    this.barChartData = [
      {
        data: [
          Math.round(Math.random() * 100),
          Math.round(Math.random() * 100),
          Math.round(Math.random() * 100),
          Math.round(Math.random() * 100),
          Math.round(Math.random() * 100),
          Math.round(Math.random() * 100),
          Math.round(Math.random() * 100),
        ],
        label: 'Choripan',
      },
      {
        data: [
          Math.round(Math.random() * 100),
          Math.round(Math.random() * 100),
          Math.round(Math.random() * 100),
          Math.round(Math.random() * 100),
          Math.round(Math.random() * 100),
          Math.round(Math.random() * 100),
          Math.round(Math.random() * 100),
        ],
        label: 'Bife de chorizo',
      },
    ];
  }
}
