import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChartsModule, BaseChartDirective } from 'ng2-charts';

@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})
export class AboutPage {

    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = ['1月1', '1月2', '1月3', '1月4', '1月5', '1月6', '1月7', '1月8', '1月9', '1月10'];
    public barChartData: any[] = [
        { data: [3, 2, 4, 1, 3, 2, 4, 5, 6, 7], label: '时间趋势' }
    ];

    public pieChartOptions: any = {
        cutoutPercentage:80,
        scaleShowVerticalLines: false,
        responsive: true
    };
    public pieChartData1: number[] = [85, 15];
    public pieChartData2: number[] = [11, 89];
    public pieChartData3: number[] = [5, 95];


    public radarChartOptions: any = {
    };
    public radarChartLabels: string[] = ['科学', '语言', '数学', '工程', '技术'];
    public radarChartData: any = [

        { data: [0, 100, 300, 500, 700], label: '提升值' },
        { data: [700, 450, 700, 550, 400], label: '提升值' }
    ];


    public hbarChartLabels: string[] = ['科学', '语言', '数学', '工程', '技术', ""];
    public hbarChartData: any = [
        { data: [40, 30, 15, 10, 5, 0], label: '' }
    ];

    constructor(public navCtrl: NavController) {

    }

}
