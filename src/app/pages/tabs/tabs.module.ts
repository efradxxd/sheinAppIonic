import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home-tabs',
        loadChildren: '../home-tabs/home-tabs.module#HomeTabsPageModule'
      },
      {
        path: 'categorias',
        loadChildren: '../categorias/categorias.module#CategoriasPageModule'
      },
      {
        path: 'carrito',
        loadChildren: '../carrito/carrito.module#CarritoPageModule'
      },
      {
        path: 'user-info',
        loadChildren: '../user-info/user-info.module#UserInfoPageModule'
      },
      {
        path: 'categoria',
        loadChildren: '../categoria/categoria.module#CategoriaPageModule'
      },
      {
        path: 'articulo',
        loadChildren: '../articulo/articulo.module#ArticuloPageModule'
      },
      {
        path: 'compras',
        loadChildren: '../compras/compras.module#ComprasPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/home-tabs',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
