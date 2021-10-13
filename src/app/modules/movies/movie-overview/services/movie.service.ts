import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoviesRequest } from '../models/movies-request';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class MovieService {
    constructor(private http: HttpClient) { }

    public getUpcomingMovies(): Observable<MoviesRequest> {
        return this.http.get<MoviesRequest>(
            `${environment.apiUrl}/movie/upcoming`,
            { params: { api_key: environment.apiKey } }
        );
    }

    public getTopRatedMovies(): Observable<MoviesRequest> {
        return this.http.get<MoviesRequest>(
            `${environment.apiUrl}/movie/top_rated`,
            { params: { api_key: environment.apiKey } }
        );
    }

    public getPopularMovies(): Observable<MoviesRequest> {
        return this.http.get<MoviesRequest>(
            `${environment.apiUrl}/movie/popular`,
            { params: { api_key: environment.apiKey } }
        );
    }

    public getNowPlayingMovies(): Observable<MoviesRequest> {
        return this.http.get<MoviesRequest>(
            `${environment.apiUrl}/movie/now_playing`,
            { params: { api_key: environment.apiKey } }
        );
    }
}