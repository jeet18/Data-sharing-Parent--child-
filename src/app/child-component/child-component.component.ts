import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponentComponent implements OnInit {
  @Input() parentData: any = [];

  constructor() {}

  ngOnInit() {}

  getMoney() {
    for (let i = 0; i < this.parentData.length; i++) {
      this.parentData[i]['money'] = this.parentData[i]['money'] + 5;
    }
  }
  sendMoney(name) {
    for (let i = 0; this.parentData.length; i++) {
      if (this.parentData[i].name === name) {
        this.parentData[i]['money'] = this.parentData[i]['money'] + 10;
      }
    }
  }
}
