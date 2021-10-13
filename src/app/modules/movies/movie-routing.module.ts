import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./movie-overview/movie-overview.module').then(m => m.MovieOverviewModule),
    },
    {
        path: ':id',
        loadChildren: () => import('./movie-details/movie-details.module').then(m => m.MovieDetailsModule),
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MovieRoutingModule { }
