import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {
  idCategoria = window['idCategoriaGlobal'];
  constructor(public httpClient: HttpClient, public router: Router) { }
  articleData: any;
  ngOnInit() {
    this.cargarArticulos();
  }

  ionViewWillEnter() {
    this.cargarArticulos();
  }
  ionViewDidEnter() {
    this.cargarArticulos();
  }

  cargarArticulos() {
    console.log(window['idCategoriaGlobal']);
    console.log('categoria page');
    this.httpClient.get('http://ec2-54-153-71-71.us-west-1.compute.amazonaws.com:3000/api/articulos2/' + window['idCategoriaGlobal'])
    .subscribe(data => {
      this.articleData = data;
      this.articleData = this.articleData.user;
      console.log('my data: ', this.articleData);
    });
  }
  navigate(id) {
    window['idArticuloGlobal'] = id;
    console.log(window['idArticuloGlobal']);
    console.log('shdkh');
    this.router.navigateByUrl('/tabs/articulo');
  }
}
