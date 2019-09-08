import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-tabs',
  templateUrl: './home-tabs.page.html',
  styleUrls: ['./home-tabs.page.scss'],
})
export class HomeTabsPage implements OnInit {

  constructor(public httpClient: HttpClient, public router: Router) { }
  articleData: any;
  ngOnInit() {
    this.cargarArticulos();
  }
  cargarArticulos() {
    this.httpClient.get('http://ec2-54-153-71-71.us-west-1.compute.amazonaws.com:3000/api/articulos2/')
    .subscribe(data => {
      this.articleData = data;
      this.articleData = this.articleData.user;
      console.log('my data: ', this.articleData);
      // console.log('tuyo mia');
    });
  }
  navigate(id) {
    window['idArticuloGlobal'] = id;
    console.log(window['idArticuloGlobal']);
    console.log('shdkh');
    this.router.navigateByUrl('/tabs/articulo');
  }

}
