import { Component, OnInit } from '@angular/core';
import { MovieListService } from '../admin/movie-list/movie-list.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private movieListService: MovieListService) { }

  ngOnInit() {
    this.movieListService.fetchMovies();
    console.log(this.movieListService.movies)
  }

}
