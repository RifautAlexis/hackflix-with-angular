import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovieOverviewRoutingModule } from './movie-overview-routing.module';
import { MovieOverviewComponent } from './movie-overview.component';

@NgModule({
    imports: [
        SharedModule,
        MovieOverviewRoutingModule
    ],
    declarations: [MovieOverviewComponent],
})
export class MovieOverviewModule { }
