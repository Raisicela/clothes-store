export interface User {
  _id: string;
  email: string;
  name: string;
  password: string;
  isActive: boolean;
  isAdmin: boolean;
  roles: string[];
  __v: number;
}
