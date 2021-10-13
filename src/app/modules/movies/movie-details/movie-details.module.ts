import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovieDetailsRoutingModule } from './movie-details-routing.module';
import { MovieDetailsComponent } from './movie-details.component';

@NgModule({
    declarations: [MovieDetailsComponent],
    imports: [
        MovieDetailsRoutingModule,
        SharedModule,
    ]
})
export class MovieDetailsModule { }
