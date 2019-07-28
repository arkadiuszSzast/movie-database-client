import { ICategory } from '../category-list/category.model';
import { IActor } from '../actor-list/actor.model';
import { IDirector } from '../director-list/director.model';

export interface IMovie {
    id: string,
    title: string,
    description: string,
    categories: ICategory[],
    actors: IActor[],
    directors: IDirector[]
}