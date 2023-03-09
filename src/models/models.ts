export interface User {
  email: string;
  password: string;
}

export interface UserContext {
  user: User,
  singnIn: (email: string, password: string) => Promise<any>
}
