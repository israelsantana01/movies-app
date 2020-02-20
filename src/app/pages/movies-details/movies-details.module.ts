import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { MoviesDetailsPage } from './movies-details.page';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: MoviesDetailsPage
  }
];

@NgModule({
  declarations: [
    MoviesDetailsPage,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
})

export class MoviesDetailsModule {}
