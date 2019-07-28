import { ICategory } from '../category-list/category.model';
import { IActor } from '../actor-list/actor.model';
import { IDirector } from '../director-list/director.model';

export interface IMovieRest {
    title: string,
    description: string,
    categories: string[],
    actors: string[],
    directors: string[]
}