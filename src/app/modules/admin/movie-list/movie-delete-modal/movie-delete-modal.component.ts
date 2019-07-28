import { Component, OnInit } from '@angular/core';
import { IMovie } from '../movie.model';
import { MovieUpdateService } from '../movie-update.service';
import { MovieService } from '../movie.service';
import { MovieListService } from '../movie-list.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { MatDialogRef } from '@angular/material';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-movie-delete-modal',
  templateUrl: './movie-delete-modal.component.html',
  styleUrls: ['./movie-delete-modal.component.scss']
})
export class MovieDeleteModalComponent implements OnInit {

  movie: IMovie;

    constructor(private movieUpdateService: MovieUpdateService,
    private dialogRef: MatDialogRef<MovieDeleteModalComponent>, 
    private movieService: MovieService,
    private notificationService: NotificationService,
    private movieListService: MovieListService
    ) { }

  ngOnInit() {
    this.movie = this.movieUpdateService.movie;
  }

  deleteMovie():void {
    this.movieService.deleteMovie(this.movie.id).pipe(first()).subscribe(res => {
      if(res.status == 200) {
        this.movieListService.deleteMovie(this.movie);
        this.notificationService.success('Category deleted');
      }
      this.dialogRef.close();
    });
  }

  onClose():void {
    this.dialogRef.close();
  }
}
