import { DateRequest } from "./date-request";
import { Movie } from "./movie";

export interface MoviesRequest {
    page: number;
    results: Movie[];
    dates?: DateRequest | null;
    total_pages: number;
    total_results: number;
}