import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../../../category-list/category.service';
import { first } from 'rxjs/operators';
import { ICategory } from '../../../category-list/category.model';
import { IDirector } from '../../../director-list/director.model';
import { IActor } from '../../../actor-list/actor.model';
import { DirectorService } from '../../../director-list/director.service';
import { ActorService } from '../../../actor-list/actor.service';
import { IMovieRest } from '../../movie-rest.model';
import { MovieService } from '../../movie.service';
import { MatDialogRef } from '@angular/material';
import { MovieListService } from '../../movie-list.service';

@Component({
  selector: 'app-movie-add-modal',
  templateUrl: './movie-add-modal.component.html',
  styleUrls: ['./movie-add-modal.component.scss']
})
export class MovieAddModalComponent implements OnInit {

  movieAddForm: FormGroup;
  categories: ICategory[];
  directors: IDirector[];
  actors: IActor[];

  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<MovieAddModalComponent>,
    private movieListService: MovieListService,
    private categoryService: CategoryService,
    private directorService: DirectorService,
    private actorService: ActorService,
    private movieService: MovieService) { }

  ngOnInit() {
    this.categoryService.getCategories().pipe(first()).subscribe(categories => this.categories = categories);
    this.directorService.getDirectors().pipe(first()).subscribe(direcors => this.directors = direcors);
    this.actorService.getActors().pipe(first()).subscribe(actors => this.actors = actors);
    this.movieAddForm= this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      categories: ['', Validators.required],
      directors: ['', Validators.required],
      actors: ['', Validators.required],
    })
  }

  get f() { return this.movieAddForm.controls; }

  public hasError = (controlName: string, errorName: string) => {
    return this.movieAddForm.controls[controlName].hasError(errorName);
  }

  public create() {
    const movieRest = {
     title: this.f.title.value,
     description: this.f.description.value,
     categories: this.f.categories.value,
     directors: this.f.directors.value,
     actors: this.f.actors.value 
    } as IMovieRest
    this.movieService.addMovie(movieRest).pipe(first()).subscribe(res => {
        if (res.status == 200) {
          this.movieListService.fetchMovies();
        }
      });
    this.dialogRef.close();
  }

}
