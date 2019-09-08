import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  usuario = {
    nickName: '',
    aPaterno: '',
    aMaterno: '',
    email: '',
    password: '',
    nombre: '',
    imgUrl: ''
  };
  dataRecibida: any;
  constructor( public httpClient: HttpClient, public alertController: AlertController, public router: Router) { }
  // ruta = this.rutaActiva.snapshot.params.idUsuario;
  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Registro Exitoso',
      // subHeader: '',
      message: 'Ingresa tus datos para poder acceder',
      backdropDismiss: false,
      buttons: [
        {
        text: 'Entendido',
        handler: () => {
          this.router.navigateByUrl('/login');
        }
      }]
    });

    await alert.present();
  }

  onSubmitTemplate() {

    this.httpClient.post('http://ec2-54-153-71-71.us-west-1.compute.amazonaws.com:3000/api/crearUsuario/', {
      encodeImg: window['b64IMG'],
      nickName: this.usuario.nickName,
      email: this.usuario.email,
      password: this.usuario.password,
      aPaterno: this.usuario.aPaterno,
      aMaterno: this.usuario.aMaterno,
      nombre: this.usuario.nombre
    })
    .subscribe(data => {
      console.log(data);
      this.dataRecibida = data;
      if (this.dataRecibida.user.affectedRows !== 0) {
        this.presentAlert();
      }
    });
  }


}
