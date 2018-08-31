import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FeedPageModule } from "../pages/feed/feed.module";
import { IntroPageModule } from "../pages/intro/intro.module";
import { HttpClientModule } from "@angular/common/http";
import {ConfigPageModule} from "../pages/config/config.module";
import {ProfilePageModule} from "../pages/profile/profile.module";
import {FeedDetailPageModule} from "../pages/feed-detail/feed-detail.module";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    // ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FeedDetailPageModule,
    FeedPageModule,
    IntroPageModule,
    HttpClientModule,
    ConfigPageModule,
    ProfilePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    // ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    // MovieProvider
  ]
})
export class AppModule {}
