import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'movie',
    loadChildren: () => import('./modules/movies/movie.module').then(m => m.MovieModule),
  },

  // {
  //   path: 'serie',
  //   loadChildren: () => import('./modules/movies/movie.module').then(m => m.MovieModule),
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
