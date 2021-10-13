import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MovieDetails } from '../models/movie-details';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MovieDetailsService {
    constructor(private http: HttpClient) { }
    
    public getDetails(id: string): Observable<MovieDetails> {
        return this.http.get<MovieDetails>(`${environment.apiUrl}/movie/${id}`, {params: { api_key: environment.apiKey}});
    }
}