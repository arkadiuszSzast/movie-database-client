export interface IToken {
    username: String,
    email: String,
    exp: bigint,
    sub: String,
    roles: String[]
}