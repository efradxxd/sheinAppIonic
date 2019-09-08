import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'user-info', loadChildren: './pages/user-info/user-info.module#UserInfoPageModule' },
  { path: 'categorias', loadChildren: './pages/categorias/categorias.module#CategoriasPageModule' },
  { path: 'carrito', loadChildren: './pages/carrito/carrito.module#CarritoPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'registrar', loadChildren: './pages/registrar/registrar.module#RegistrarPageModule' },
  { path: 'categoria', loadChildren: './pages/categoria/categoria.module#CategoriaPageModule' },
  { path: 'articulo', loadChildren: './pages/articulo/articulo.module#ArticuloPageModule' },
  { path: 'compras', loadChildren: './pages/compras/compras.module#ComprasPageModule' },
  // { path: 'notificaciones', loadChildren: './pages/notificaciones/notificaciones.module#NotificacionesPageModule' },
  { path: 'home-tabs', loadChildren: './pages/home-tabs/home-tabs.module#HomeTabsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
