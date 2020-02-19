import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { MoviePage } from './movie.page';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: MoviePage
  }
];

@NgModule({
  declarations: [
    MoviePage
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
})

export class MovieModule {}
