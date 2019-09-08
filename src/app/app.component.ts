import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  signal_app_id = '83c993e9-b8c8-4399-98a1-61dbce924abe';
  firebase_id = '1088812198682';
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private oneSignal: OneSignal
  ) {
    oneSignal.startInit(this.signal_app_id, this.firebase_id);

    oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    oneSignal.handleNotificationReceived().subscribe(() => {
    // do something when notification is received
    });

    oneSignal.handleNotificationOpened().subscribe((res) => {
      // do something when a notification is opened
      console.log(res);
    });

    oneSignal.endInit();
    this.initializeApp();
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
