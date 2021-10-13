import { NgModule } from '@angular/core';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieService } from './movie-overview/services/movie.service';

@NgModule({
    imports: [MovieRoutingModule],
    providers: [
        {
            provide: 'moviesService',
            useClass: MovieService
        }
    ],
})
export class MovieModule { }
