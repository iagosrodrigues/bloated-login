declare interface TypedRequestBody<T> extends Express.Request {
  body: T;
}

declare interface RegisterForm {
  email: string;
  password: string;
}
