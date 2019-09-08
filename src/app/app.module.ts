import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';

  // import { AngularFireModule } from 'angularfire2';
  // import { AngularFirestoreModule} from 'angularfire2/firestore';
  // import { Firebase } from '@ionic-native/firebase/ngx';
  // const config = {
  //   apiKey: 'AIzaSyAfrbWSMOhDxXNw7tK3C2dD2rGrWcvgVK8',
  //   authDomain: 'sheinapp-1e05e.firebaseapp.com',
  //   databaseUrl: 'https://sheinapp-1e05e.firebaseio.com',
  //   projectId: 'sheinapp-1e05e',
  //   storeBucket: 'sheinapp-1e05e.appspot.com',
  //   messagingSenderId: '148247271089'
  // };
import { OneSignal } from '@ionic-native/onesignal/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    // AngularFirestoreModule,
    // AngularFireModule.initializeApp(config),
    BrowserModule,
    IonicModule.forRoot(), AppRoutingModule, HttpClientModule, ComponentsModule],
  providers: [
    StatusBar,
    SplashScreen,
    OneSignal,
    // Firebase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
