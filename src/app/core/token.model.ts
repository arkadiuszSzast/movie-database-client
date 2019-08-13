export interface IToken {
    username: String,
    email: String,
    avatar: String,
    exp: bigint,
    sub: String,
    roles: String[]
}