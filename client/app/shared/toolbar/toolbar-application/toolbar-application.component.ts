import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'ms-toolbar-application',
  templateUrl: './toolbar-application.component.html',
  styleUrls: ['./toolbar-application.component.scss']
})
export class ToolbarApplicationComponent implements OnInit {

  constructor(public app: AppService) { }

  ngOnInit() {

    console.log(this.app.currentApp);
  }

}
