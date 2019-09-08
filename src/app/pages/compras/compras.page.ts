import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-compras',
  templateUrl: './compras.page.html',
  styleUrls: ['./compras.page.scss'],
})
export class ComprasPage implements OnInit {

  constructor(public httpClient: HttpClient) { }
  mostrar = 0;
  articleData: any;
  total = 0;
  ngOnInit() {
    this.cargarCompras();
  }

  ionViewWillEnter() {
    this.cargarCompras();
  }

  cargarCompras() {
    this.httpClient.get('http://ec2-54-153-71-71.us-west-1.compute.amazonaws.com:3000/api/compras/' + window['idUsuarioGlobal'])
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
    });
  }

}
