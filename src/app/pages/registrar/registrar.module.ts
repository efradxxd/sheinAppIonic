import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegistrarPage } from './registrar.page';
import { ComponentsModule } from '../../components/components.module';


const routes: Routes = [
  {
    path: '',
    component: RegistrarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [RegistrarPage]
})
export class RegistrarPageModule {}
