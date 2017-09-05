import {
  Component, OnInit, ViewChild, ViewEncapsulation, AfterViewInit, ViewChildren, QueryList,
  ElementRef, OnDestroy
} from '@angular/core';
import {Subscription} from "rxjs";
import {MediaChange} from "@angular/flex-layout";
import {Router, NavigationEnd, ActivatedRoute} from "@angular/router";
import {MediaReplayService} from "../sidenav/mediareplay/media-replay.service";
import { AppService } from '../../services/app.service';

@Component({
  selector: 'ms-apps-detail',
  templateUrl: './apps-detail.component.html',
  styleUrls: ['./apps-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppsDetailComponent implements OnInit, OnDestroy {

  @ViewChild('sidenav') sidenav;

  private _mediaSubscription: Subscription;
  private _routerEventsSubscription: Subscription;

  sidenavOpen: boolean = true;
  sidenavMode: string = 'side';
  isMobile: boolean = false;

  constructor(
    private router: Router,
    private mediaReplayService: MediaReplayService,
    private activatedRoute: ActivatedRoute,
    private appService: AppService
  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params => { console.log(params);
      this.appService.setCurrentApp(params.id);
    });

    this._mediaSubscription = this.mediaReplayService.media$.subscribe((change: MediaChange) => {
      let isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm');

      this.isMobile = isMobile;
      this.sidenavMode = (isMobile) ? 'over' : 'side';
      this.sidenavOpen = !isMobile;
    });

    this._routerEventsSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && this.isMobile) {
        this.sidenav.close();
      }
    });
  }

  ngOnDestroy() {
    this._mediaSubscription.unsubscribe();
  }

  onActivate(e, scrollContainer) {
    scrollContainer.scrollTop = 0;
  }
}
