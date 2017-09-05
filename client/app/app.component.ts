import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from './services/auth.service';
import {MediaReplayService} from "./shared/sidenav/mediareplay/media-replay.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor(public auth: AuthService, 
  public mediaReplayService: MediaReplayService) { }

}
