import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { FeedPage } from "../feed/feed";
import { ConfigPage } from "../config/config";
import { AboutPage } from "../about/about";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  // tab3Root = ContactPage;
  tab4Root = FeedPage;
  tab5Root = ConfigPage;

  constructor() {

  }
}
