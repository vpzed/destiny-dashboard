//Angular Core
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule, MD_RIPPLE_GLOBAL_OPTIONS } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

//Angular dependencies
import 'hammerjs';

//RxJS
import 'rxjs/add/operator/toPromise';

//Third Party 
import { ToastrModule } from 'ngx-toastr';
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';

//Application
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { GlobalErrorHandler } from './shared/services/error-handler.service';

//Shared Services
import { SharedBungie } from './bungie/shared-bungie.service';
import { SharedDashboard } from './dashboard/shared-dashboard.service';
import { SharedApp } from './shared/services/shared-app.service';
import { HttpService } from './shared/services/http.service';

//Route
import { CustomReuseStrategy, Routing } from './shared/routing';

//Dialogs
import { AlertDialog } from './shared/dialogs/alert.component';
import { ConfirmDialog } from './shared/dialogs/confirm.component';
import { FiltersDialog } from './cards/inventory/filters-dialog/filters-dialog.component';
import { LoadoutsDialog } from './cards/inventory/loadouts-dialog/loadouts-dialog.component';
import { SimpleInputDialog } from './shared/dialogs/simple-input.component';
import { TransferQuantityDialog } from './cards/inventory/transfer-quantity-dialog/transfer-quantity-dialog.component';

//Base Components
import { AddCardComponent } from './dashboard/add-card/add-card.component';
import { CardHeaderComponent } from './cards/_base/card-header/card-header.component';
import { CardLoaderComponent } from './cards/_base/card-loader.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//Other components 
import { AboutComponent } from './about/about.component';
import { DownloadManifestComponent } from './bungie/manifest/download-manifest.component';
import { GamertagAutocompleteComponent } from './bungie/components/gamertag-autocomplete/gamertag-autocomplete.component';
import { InventoryItemComponent } from './bungie/components/inventory-item/inventory-item.component';
import { InventoryItemPopupComponent } from './bungie/components/inventory-item/inventory-item-popup/inventory-item-popup.component';
import { MdTabCharacterHeadingComponent } from './bungie/components/md-tab-character-heading/md-tab-character-heading.component';

//Cards
import { BungieNewsComponent } from './cards/bungie-news/bungie-news.component';
import { CountdownComponent } from './cards/countdown/countdown.component';
import { ClanLeaderboardsComponent } from './cards/clan-leaderboards/clan-leaderboards.component';
import { DashboardNewsComponent } from './cards/dashboard-news/dashboard-news.component';
import { DashboardNewsArticle } from './cards/dashboard-news/dashboard-news-article/dashboard-news-article.component';
import { ItemManagerComponent } from './cards/inventory/inventory.component';
import { ReputationComponent } from './cards/reputation/reputation.component';
import { RedditComponent } from './cards/reddit/reddit.component';
import { StatsComponent } from './cards/stats/stats.component';
import { TwitchComponent } from './cards/twitch/twitch.component';

//Directives
import { ModalDirective } from './shared/directives/modal.directive';
import { MouseEventsDirective } from './shared/directives/mouse-events.directive';
import { ScrollWithElementDirective } from './shared/directives/scroll-with-element.directive';
import { Swipeable } from './shared/directives/swipeable.directive';

//Guards
import { AuthGuard } from './shared/guards/auth.guard';

//Pipes
import { DateFormatLocaleNoSeconds, DateStringTimeAgoPipe, RedditParsePipe, SubstringPipe } from './shared/pipes/strings.pipe';
import { NumberFormatLocalePipe, RoundToDecimalPlacePipe } from './shared/pipes/numbers.pipe';

@NgModule({
  declarations: [
    //Application
    AppComponent, NavComponent,

    //Dialogs
    AlertDialog, ConfirmDialog, FiltersDialog, LoadoutsDialog, SimpleInputDialog, TransferQuantityDialog,

    //Base Components
    AddCardComponent, CardHeaderComponent, CardLoaderComponent, DashboardComponent,

    //Other components 
    AboutComponent, DownloadManifestComponent, GamertagAutocompleteComponent, InventoryItemComponent, InventoryItemPopupComponent, MdTabCharacterHeadingComponent,

    //Cards
    BungieNewsComponent, ClanLeaderboardsComponent, CountdownComponent, DashboardNewsComponent, DashboardNewsArticle, ItemManagerComponent, ReputationComponent, RedditComponent, StatsComponent, TwitchComponent,

    //Directives
    ModalDirective, MouseEventsDirective, ScrollWithElementDirective, Swipeable,

    //Pipes
    DateFormatLocaleNoSeconds, DateStringTimeAgoPipe, NumberFormatLocalePipe, RedditParsePipe, RoundToDecimalPlacePipe, SubstringPipe
  ],

  entryComponents: [
    AlertDialog, ConfirmDialog, FiltersDialog, LoadoutsDialog, InventoryItemPopupComponent, SimpleInputDialog, TransferQuantityDialog
  ],
  imports: [
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    Routing,
    ToastrModule.forRoot({ progressBar: true, closeButton: true, timeOut: 2500, newestOnTop: false, messageClass: 'toast-message' })
  ],
  providers: [
    AuthGuard,
    HttpService,
    SharedApp,
    GlobalErrorHandler,
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    { provide: MD_RIPPLE_GLOBAL_OPTIONS, useValue: { baseSpeedFactor: 1.5 } },
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
