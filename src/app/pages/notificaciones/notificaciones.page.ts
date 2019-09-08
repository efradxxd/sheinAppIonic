import { Component, OnInit } from '@angular/core';
// import { FCM } from '@ionic-native/fcm/ngx';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {

  constructor(){}
/*private fcm: FCM)*/
  ngOnInit() {
    // this.fcm.getToken().then(token => {
    //   // backend.registerToken(token);
    //   console.log(token);
    // });
  }

}
