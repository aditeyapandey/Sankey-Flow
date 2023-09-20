import { Chart } from "./chart";
import * as $ from 'jquery';


export class User {
  constructor(public name: string = "no name", public age: Number = 35) {}
  async hello(): Promise<void> {
    const chart = new Chart();
    let chartData = await chart.getData();
    console.log(chartData);
    // @ts-ignore
    let sankey = chart.sankeyChart({
      links: chartData,
    },{
      nodeGroup: function(d){
        return d.id.split(/\W/)[0]}, // take first word for color
    })
    console.log(sankey);
    //embed chart using jquery
    $("#chart").html(sankey);
    // return `Hi ${this.name} your age is ${this.age} mother fucker. `;
  }
}
