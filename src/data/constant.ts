export const TOKEN_NAME = "token";

export interface IDefaultUserObject {
  email: string;
  role: string;
  name: string;
}

export interface IAuthResponse {
  success: boolean;
  token?: string;
  user: IDefaultUserObject;
}

export const defaultUserObject:IDefaultUserObject = {
  email: "admin@example.com",
  role: "admin",
  name: "Admin User",
};

export const mockedJWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwicm9sZSI6ImFkbWluIiwibmFtZSI6IkFkbWluIFVzZXIiLCJpYXQiOjE3MzQwMjg4MDAsImV4cCI6MTczNDAzMjQwMH0.W8_1oX7l8kkA2UBGOg4VuYdId5lj1xO1nZEmBOnNTaI"
