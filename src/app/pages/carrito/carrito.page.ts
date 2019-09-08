import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  constructor(public httpClient: HttpClient, public router: Router, public alertController: AlertController ) { }
  mostrar = 0;
  articleData: any;
  total = 0;
  ngOnInit() {
    this.cargarCarrito();
  }
  ionViewWillEnter() {
    this.cargarCarrito();
  }
  // ionViewDidEnter() {
  //   this.cargarCarrito();
  // }

  cargarCarrito() {
    this.httpClient.get('http://ec2-54-153-71-71.us-west-1.compute.amazonaws.com:3000/api/carrito/' + window['idUsuarioGlobal'])
    .subscribe(data => {
      console.log(data);
      this.total = 0;
      this.articleData = data;
      if (this.articleData.userStatus !== 'Reject') {
        this.articleData = this.articleData.user;
        for (let i of this.articleData) {
          this.total = this.total + i.precioPedido;
          this.mostrar ++ ;
        }
      }
      // else {
      //   this.presentAlert();
      // }
    });
  }
  eliminar(idproducto , precioPedido) {
    this.httpClient.delete('http://ec2-54-153-71-71.us-west-1.compute.amazonaws.com:3000/api/carrito/' + idproducto)
    .subscribe(data => {
      console.log(data);
      this.total = this.total - precioPedido;
      this.mostrar = this.mostrar - 1;
      this.cargarCarrito();
    });
  }
  hacerCompra() {
    for (let i of this.articleData) {
      this.httpClient.post('http://ec2-54-153-71-71.us-west-1.compute.amazonaws.com:3000/api/stock/nuevaCompra/', {
      idArticulo: i.idArticulo,
      idTalla: i.talla,
      cantidad: i.cantidad,
      idUsuario: window['idUsuarioGlobal'],
      precioPedido: i.precioPedido
      })
      .subscribe(data => {
        console.log(data);
      });
    }
    this.eliminarCarrito();
  }
  eliminarCarrito() {
    this.httpClient.delete('http://ec2-54-153-71-71.us-west-1.compute.amazonaws.com:3000/api/carrito/usuario/' + window['idUsuarioGlobal'])
    .subscribe(data => {
      console.log(data);
    });
    this.router.navigateByUrl('tabs/compras');
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'No tienes nada en carrito',
      // subHeader: '',
      message: 'Agrega articulos',
      backdropDismiss: false,
      buttons: [
        {
        text: 'Entendido',
        handler: () => {
          this.router.navigateByUrl('/tabs/home');
        }
      }]
    });

    await alert.present();
  }
}
