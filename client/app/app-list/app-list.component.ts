import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from "../route.animation";
import {SortablejsOptions} from "angular-sortablejs";

@Component({
  selector: 'ms-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss'],
  host: {
    "[@fadeInAnimation]": 'true'
  },
  animations: [ fadeInAnimation ]
})
export class AppListComponent implements OnInit {

  dummyItems: any[];
  regularDistribution = 100 / 4;

  groupOptions: SortablejsOptions = {
    group: 'testGroup',
    handle: '.drag-handle',
    animation: 300
  };

  constructor() { }

  ngOnInit() {
    this.dummyItems = [
      {
        _id: 1,
        title: 'Portland Press Herald',
        content: 'ksad jsdkj sdjasjd k'
      },
      {
        _id: 2,
        title: 'Bangor Daily News',
        content: 'sdjjshd kjshd kjsad kashd?'
      },
      {
        _id: 3,
        title: 'Burlington Free Press',
        content: 'ajksjads asljkasjklads?'
      },
      {
        _id: 4,
        title: 'Sun Journal',
        content: 'kasdj salkdj sjd jdksajd als'
      },
      {
        _id: 5,
        title: 'Boston Globe',
        content: 'jasjas adsjklasdhsaljkd'
      },
      {
        _id: 6,
        title: 'Rutland Herald',
        content: 'asjkld saldj salkd j'
      }
    ];
  }

}
