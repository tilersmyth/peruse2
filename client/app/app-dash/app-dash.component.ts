import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from "../route.animation";

@Component({
  selector: 'ms-app-dash',
  templateUrl: './app-dash.component.html',
  styleUrls: ['./app-dash.component.scss'],
  host: {
    '[@fadeInAnimation]': 'true'
  },
  animations: [ fadeInAnimation ]
})
export class AppDashComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
