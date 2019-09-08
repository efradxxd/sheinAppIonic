import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = {
    nickName: '',
    password: '',
    id: 3,
    respuesta: ''
  };
  usuarioObtenido: any;
  constructor(public httpClient: HttpClient, public router: Router) { }

  ngOnInit() {
    this.usuario.nickName = '';
    this.usuario.password = '';
  }
  ionViewWillEnter() {
    this.usuario.nickName = '';
    this.usuario.password = '';
  }
  acceder() {
    this.httpClient.get('http://ec2-54-153-71-71.us-west-1.compute.amazonaws.com:3000/api/usuarios/' + this.usuario.nickName + '/' + this.usuario.password)
    .subscribe(data => {
      console.log(data);
      this.usuarioObtenido = data;
      if (this.usuarioObtenido.userStatus !== 'Reject') {
        for (let u of this.usuarioObtenido.user) {
          this.usuario.id = u.id;
        }
        window['idUsuarioGlobal'] = this.usuario.id;
        this.navigate();
      } else {
        this.usuario.respuesta = 'usuario o contraseña incorrectos, vuelve a intentar';
      }
    });
  }
  navigate() {
    this.router.navigateByUrl('/tabs/home-tabs');
  }
}
