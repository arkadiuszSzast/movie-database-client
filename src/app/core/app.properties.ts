export class AppProperties {
    public static AUTHORIZATION_TOKEN_KEY = 'Authorization';
    public static REFRESH_TOKEN_KEY = 'Refresh-token'
    public static API_ENDPOINT = 'http://localhost:8080/api/';
    public static LOGIN_ENDPOINT = AppProperties.API_ENDPOINT + 'auth/login';
    public static LOGOUT_ENDPOINT = AppProperties.API_ENDPOINT + 'auth/logout';
    public static REFRESH_ENDPOINT = AppProperties.API_ENDPOINT + 'auth/refresh';
    public static SIGN_UP_ENDPOINT = AppProperties.API_ENDPOINT + 'users/sign-up';
    public static USERS_ENDPOINT = AppProperties.API_ENDPOINT + 'users';
    public static ACTORS_ENDPOINT = AppProperties.API_ENDPOINT + 'actors';
    public static DELETE_ACTOR_ENDPOINT = AppProperties.API_ENDPOINT + 'actors/${actorId}';
    public static DIRECTORS_ENDPOINT = AppProperties.API_ENDPOINT + 'directors';
    public static DELETE_DIRECTOR_ENDPOINT = AppProperties.API_ENDPOINT + 'directors/${directorId}';
    public static UPDATE_USER_ROLES_ENDPOINT = AppProperties.API_ENDPOINT + 'users/${userId}/roles';
    public static DELETE_USER_ENDPOINT = AppProperties.API_ENDPOINT + 'users/${userId}';
    public static ROLES_ENDPOINT = AppProperties.API_ENDPOINT + 'roles';
    public static CATEGORIES_ENDPOINT = AppProperties.API_ENDPOINT + 'categories';
    public static DELETE_CATEGORY_ENDPOINT = AppProperties.API_ENDPOINT + 'categories/${categoryId}';
    public static RESET_PASSWORD_ENDPOINT = AppProperties.API_ENDPOINT + 'reset-password';
    public static RESET_PASSWORD_MAIL_REQUEST_ENDPOINT = AppProperties.API_ENDPOINT + 'reset-password/mail';
    public static MOVIES_ENDPOINT = AppProperties.API_ENDPOINT + 'movies';
    public static DELETE_MOVIE_ENDPOINT = AppProperties.API_ENDPOINT + 'movies/${movieId}'
}