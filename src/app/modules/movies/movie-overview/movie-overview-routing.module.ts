import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieOverviewComponent } from './movie-overview.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MovieOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieOverviewRoutingModule {}
