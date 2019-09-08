import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.page.html',
  styleUrls: ['./articulo.page.scss'],
})
export class ArticuloPage implements OnInit {

  articulo = {
    nickName: '',
    descripcion: '',
    precio: 1,
    sexo: 2,
    departamento: 1,
    imgUrl: '',
    idArticulo: window['idArticuloGlobal'],
    talla: '',
    idTalla: 1,
    cantidad: 1
  };
  constructor(public httpClient: HttpClient, public alertController: AlertController, public router: Router) { }
  articleData: any;
  ngOnInit() {
    this.cargarArticulo();
  }
  ionViewWillEnter() {
    this.cargarArticulo();
  }
  ionViewDidEnter() {
    this.cargarArticulo();
  }
  cargarArticulo() {
    console.log('http://ec2-54-153-71-71.us-west-1.compute.amazonaws.com:3000/api/articulos/images/' + this.articulo.idArticulo);
    this.httpClient.get('http://ec2-54-153-71-71.us-west-1.compute.amazonaws.com:3000/api/articulos/images/' + window['idArticuloGlobal'])
    .subscribe(data => {
      this.articleData = data;
      this.articleData = this.articleData.user;
      console.log('my data: ', this.articleData);
      console.log('my data: ', this.articleData.imgUrl);
      for (let e of this.articleData) {
        this.articulo.imgUrl = e.imgUrl;
        this.articulo.nickName = e.nickName;
        this.articulo.descripcion = e.descripcion;
        this.articulo.precio = e.precio;
      }
    });
  }
  agregarCarrito() {
    if (this.articulo.talla == 'S') {
      this.articulo.idTalla = 0;
    } else if (this.articulo.talla == 'M') {
      this.articulo.idTalla = 1;
    } else if (this.articulo.talla == 'L') {
      this.articulo.idTalla = 2;
    }
    const precioPedidoMultiplicacion = (this.articulo.precio) * (this.articulo.cantidad);
    this.httpClient.post('http://ec2-54-153-71-71.us-west-1.compute.amazonaws.com:3000/api/carrito/agregarAcarrito', {
      idArticulo: window['idArticuloGlobal'],
      idTalla: this.articulo.idTalla,
      cantidad: this.articulo.cantidad,
      precioPedido: precioPedidoMultiplicacion,
      idUsuario: window['idUsuarioGlobal']
    })
    .subscribe(data => {
      console.log(data);
      this.articleData = data;
      if (this.articleData.userStatus != "Reject") {
        this.presentAlert();
      }
    });
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Agregado con Exitoso',
      // subHeader: '',
      message: 'Revisa tu carrito',
      backdropDismiss: false,
      buttons: [
        {
        text: 'Entendido',
        handler: () => {
          this.router.navigateByUrl('/tabs/carrito');
        }
      }]
    });

    await alert.present();
  }
}
