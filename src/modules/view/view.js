import { Router } from 'aurelia-router';
import { inject } from 'aurelia-framework';

@inject(Router)
export class View {
  constructor(router) {
    this.router = router;
    this.simpleLineData = {};
    this.resetLineData();
    this.myOptions = {};
    this.setOption();
  }

  setOption() {
    this.myOptions = {
  //     showLines: false,
  //     legend:{
  //       position:'buttom'
  //     }
   options: {
    showLines: false,
    elements: {
      line: {
          tension: 10 // disables bezier curves
        }
    }
  }

    };
  }
  resetLineData() {
    this.simpleLineData = {

      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

      datasets: [{
         //showLine: false,

        label: 'Innevarande räkenskapsår',

        backgroundColor: '#1c4b96',
        borderColor: '#1c4b96',
        fill: false,
        borderDash: [10, 10],
        pointRadius: 6,
        pointHoverRadius: 6,
        data: [1000, 1500, 2000, 2700, 3800, 5200, 7500, 11500, 13100, 14000, 14500, 14900]
      },
      {

        label: 'Föregående räkenskapsår',
        backgroundColor: '#afbed6',
        borderColor: '#afbed6',
        fill: false,
          //border: [6.6],
        pointRadius: 6,
        pointHoverRadius: 10,
        data: [500, 1000, 500, 1000, 2000, 13000, 14000, 14500, 10000, 1500, 1000, 500]
      }]

    };
  } //reset fun
}

      // // Boolean - If we want to override with a hard coded y scale

    // addEntry() {
    //     this.DynamicDoughnutData.labels.push("New Colour");
    //     this.DynamicDoughnutData.datasets[0].data.push(50);
    //     this.DynamicDoughnutData.datasets[0].backgroundColor.push("#B4FD5C");
    // }

