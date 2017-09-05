import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ms-sidenav-test',
  templateUrl: './sidenav-test.component.html',
  styleUrls: ['./sidenav-test.component.scss']
})
export class SidenavTestComponent implements OnInit {

  checked:boolean = false;

  constructor(private router: Router) { }

  ngOnInit() { 
    
    if(this.router.url.indexOf('test') !== -1){

      this.checked = true;

    }
        
  }

  appState($event){
    this.checked = !this.checked;

    if(this.checked){
      this.router.navigate(['/apps/test/2']);
    }else{
      this.router.navigate(['/apps/2']);
    }
    
  }

}
