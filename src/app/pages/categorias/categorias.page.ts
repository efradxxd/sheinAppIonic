import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  navigate(id) {
    window['idCategoriaGlobal'] = id;
    console.log(window['idCategoriaGlobal']);
    console.log('shdkh');
    this.router.navigateByUrl('/tabs/categoria');
  }
}
