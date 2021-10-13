import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from './models/movie-details';
import { MovieDetailsService } from './service/movie-details.service';
import { Observable, pipe, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

@Component({
    selector: 'movie-details',
    templateUrl: 'movie-details.component.html'
})

export class MovieDetailsComponent implements OnInit {
    private filmId?: string | null;

    public movieDetails$?: Observable<MovieDetails>;

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly movieDetailsService: MovieDetailsService,
    ) { }

    ngOnInit() {
        this.filmId = this.activatedRoute.snapshot.paramMap.get('id');
        this.movieDetails$ = this.movieDetailsService.getDetails(this.filmId!)
            , pipe(
                catchError((err) => {
                    console.log(err);
                    return throwError(err);
                }),
                finalize(() => console.log('DONE'))
            )
    }
}