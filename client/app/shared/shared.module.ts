import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavItemComponent } from './sidenav/sidenav-item/sidenav-item.component';
import { IconSidenavDirective } from './sidenav/icon-sidenav.directive';
import { SearchComponent } from './toolbar/search/search.component';
import { BreadcrumbsComponent } from './breadcrumb/breadcrumb.component';
import { AppsMainComponent } from './apps-main/apps-main.component';
import { AppsDetailComponent } from './apps-detail/apps-detail.component';
import { QuickpanelComponent } from './quickpanel/quickpanel.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToolbarUserButtonComponent } from './toolbar/toolbar-user-button/toolbar-user-button.component';
import { ClickOutsideDirective } from './utils/click-outside.directive';
import { SearchBarComponent } from './toolbar/search-bar/search-bar.component';
import { ToolbarApplicationComponent } from './toolbar/toolbar-application/toolbar-application.component';
import { SidenavService } from './sidenav/sidenav.service';
import { MediaReplayService } from './sidenav/mediareplay/media-replay.service';
import { BreadcrumbService } from './breadcrumb/breadcrumb.service';
import { MaterialComponentsModule } from '../material/material-components.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { AppService } from '../services/app.service';
import { SidenavTestComponent } from './sidenav/sidenav-test/sidenav-test.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialComponentsModule,
    FlexLayoutModule,
    FormsModule,
    PerfectScrollbarModule.forChild()
  ],
  declarations: [
    SidenavComponent,
    SidenavItemComponent,
    IconSidenavDirective,
    SearchComponent,
    BreadcrumbsComponent,
    QuickpanelComponent,
    ToolbarComponent,
    ToolbarUserButtonComponent,
    ClickOutsideDirective,
    SearchBarComponent,
    ToolbarApplicationComponent,
    AppsMainComponent,
    AppsDetailComponent,
    SidenavTestComponent,
  ],
  providers: [
    SidenavService,
    MediaReplayService,
    BreadcrumbService,
    AppService
  ]
})
export class SharedModule { }
