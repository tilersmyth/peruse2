import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ms-app-list-widget',
  templateUrl: './app-list-widget.component.html',
  styleUrls: ['./app-list-widget.component.scss']
})
export class AppListWidgetComponent implements OnInit {

  @Input('appDetail') appDetail: any[];
  hover:string = '';

  constructor(private router: Router) { }

  ngOnInit() {}

  openApp(id){
    this.router.navigate(['/apps', id]);
  }

  widgetHover($event){
    this.hover = $event.type == 'mouseover' ? 'mat-elevation-z4' : '';
  }

}
