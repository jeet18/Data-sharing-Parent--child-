import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css'],
})
export class ParentComponentComponent implements OnInit {
  constructor() {}

  ParentData: any = [
    {
      id: 1,
      name: 'Jill',
      money: 20,
    },
    {
      id: 2,
      name: 'Jack',
      money: 30,
    },
  ];
  ngOnInit() {}

  sendMoney(name) {
    for (let i = 0; this.ParentData.length; i++) {
      if (this.ParentData[i].name === name) {
        this.ParentData[i]['money'] = this.ParentData[i]['money'] + 10;
      }
    }
  }
  getMoney(name) {
    for (let i = 0; this.ParentData.length; i++) {
      if (this.ParentData[i].name === name) {
        this.ParentData[i]['money'] = this.ParentData[i]['money'] - 10;
      }
    }
  }
}
