import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { MoviesRequest } from './models/movies-request';
import { MovieService } from './services/movie.service';

@Component({
    selector: 'movie-overview',
    templateUrl: 'movie-overview.component.html'
})

export class MovieOverviewComponent implements OnInit {

    public movies$?: Observable<MoviesRequest>;
    public columns?: number;

    constructor(
        private readonly movieService: MovieService,
        private readonly router: Router,
    ) { }

    public ngOnInit(): void {
        this.breakPoints();

        this.movies$ = this.movieService.getPopularMovies()
            .pipe(
                catchError((err) => {
                    console.log(err);
                    return throwError(err);
                }),
                finalize(() => console.log('DONE'))
            );
    }

    public onResize(): void {
        this.breakPoints();
    }

    private breakPoints(): void {
        if (window.innerWidth <= 480) {
            this.columns = 1;
        } else if (window.innerWidth > 480 && window.innerWidth <= 640) {
            this.columns = 2;
        } else if (window.innerWidth > 640 && window.innerWidth <= 992) {
            this.columns = 3;
        } else {
            this.columns = 5;
        }
    }

    public navigateToDetailsPage(filmId: number): void {
        this.router.navigate(['movie', filmId]);
    }
}