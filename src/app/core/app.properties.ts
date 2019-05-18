export class AppProperties {
    public static AUTHORIZATION_TOKEN_KEY = 'Authorization';
    public static REFRESH_TOKEN_KEY = 'Refresh-token'
    public static API_ENDPOINT = 'http://localhost:8080/api/';
    public static LOGIN_ENDPOINT = AppProperties.API_ENDPOINT + 'auth/login';
    public static REFRESH_ENDPOINT = AppProperties.API_ENDPOINT + 'auth/refresh';
}