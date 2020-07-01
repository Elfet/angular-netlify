import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-area',
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.css']
})
export class InputAreaComponent implements OnInit {

  output: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  conversion(text: string): void {
    const texts = text.split("\n");
    let times = new Map<number, string>();
    let timecount = [];
    for (let i = 0; i < texts.length; i++) {
      if (/@[1][0-9]|[0-9]/g.test(texts[i])) {
        let result = texts[i].match(/[1][0-9]|[0-9]/g);
        let temp = result[0] + ":00";
        times.set(i, temp);
        timecount.push(i);
      }
      else if (/・/.test(texts[i])) {
        texts[i] = "　" + texts[i];
      } else {
        texts[i] = "　　" + texts[i];
      }
    }
    console.log(times);
    let count = 1;
    times.forEach(function(value, key) {
      console.log(key+ " " + value);
      let betweenTime = "";
      if (key == timecount[timecount.length-1]) {
        betweenTime = value + " ～ 17:20";
        times.set(key, betweenTime);
        texts[key] = betweenTime;
        count++;
      }
      else {
        betweenTime = times.get(key) + " ～ " + times.get(timecount[count]);
        times.set(key, betweenTime);
        texts[key] = betweenTime;
        count++;
      }
    });
    this.output = texts.join('\n');
  }
}