import { Component, OnInit } from '@angular/core';
import { MovieListService } from './movie-list.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { MovieAddModalComponent } from './movie-add-modal/movie-add-modal/movie-add-modal.component';
import { IMovie } from './movie.model';
import { MovieUpdateService } from './movie-update.service';
import { MovieDeleteModalComponent } from './movie-delete-modal/movie-delete-modal.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  constructor(private movieListService: MovieListService, private dialog: MatDialog, private movieUpdateService: MovieUpdateService) { }

  ngOnInit() {
    this.movieListService.fetchMovies();
  }
  
  addMovie(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.closeOnNavigation = true;
    dialogConfig.width = "30%";
    this.dialog.open(MovieAddModalComponent,dialogConfig);
  }

  showDeleteMovie(movie: IMovie):void {
    this.movieUpdateService.setMovie(movie);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.closeOnNavigation = true;
    dialogConfig.width = "30%";
    this.dialog.open(MovieDeleteModalComponent, dialogConfig)
  }
  
}
