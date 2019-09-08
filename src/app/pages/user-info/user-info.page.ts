import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
})
export class UserInfoPage implements OnInit {
  usuario = {
    nickName: '',
    aPaterno: '',
    aMaterno: '',
    email: '',
    password: '',
    nombre: '',
    imgUrl: '',
    id: window['idUsuarioGlobal']
  };
  dataRecibida: any;
  constructor(public httpClient: HttpClient, public alertController: AlertController, public router: Router) { }

  ngOnInit() {
    this.getUser();
  }
  getUser() {
    this.httpClient.get('http://ec2-54-153-71-71.us-west-1.compute.amazonaws.com:3000/api/usuarios/' + this.usuario.id)
    .subscribe(data => {
      this.dataRecibida = data;
      if (this.dataRecibida.userStatus !== 'Reject') {
        for (let u of this.dataRecibida.users) {
          this.usuario.nombre = u.nombre;
          this.usuario.aPaterno = u.aPaterno;
          this.usuario.aMaterno = u.aMaterno;
          this.usuario.email = u.email;
          this.usuario.imgUrl = u.img;
          this.usuario.password = u.password;
          this.usuario.nickName = u.nickName;
        }
      } else {
        console.log('', data);
      }
    });
  }
  onSubmitTemplate() {
      this.httpClient.put('http://ec2-54-153-71-71.us-west-1.compute.amazonaws.com:3000/api/usuarios/actualizarUsuario/', {
      nickName: this.usuario.nickName,
      email: this.usuario.email,
      password: this.usuario.password,
      aPaterno: this.usuario.aPaterno,
      aMaterno: this.usuario.aMaterno,
      nombre: this.usuario.nombre,
      id: this.usuario.id
    })
    .subscribe(data => {
      console.log(data);
      this.dataRecibida = data;
      if (this.dataRecibida.user.affectedRows !== 0) {
        this.presentAlert();
      }
    });
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Cambios Guardados Exitosamente',
      // subHeader: '',
      message: 'Ingresa nuevamente tus datos para poder acceder',
      backdropDismiss: false,
      buttons: [
        // {
        //   text: 'Cancel',
        //   role: 'cancel',
        //   cssClass: 'secondary',
        //   handler: (blah) => {
        //     console.log('Confirm Cancel: blah');
        //   }
        // },
        {
        text: 'Entendido',
        handler: () => {
          window['idUsuarioGlobal'] = 1;
          this.router.navigateByUrl('/login');
        }
      }]
    });

    await alert.present();
  }

}
