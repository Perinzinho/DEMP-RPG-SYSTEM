import {UserRole} from './enums';
import type { userResponse } from './userResponse';

export interface loginResponse {
    userId: string; 
    roleEnum: UserRole ;  
    token: string;
}

export interface AuthContextType {
  token: string | null;
  userId: string | null;
  user: userResponse | null;
  login: (email: string, password: string) => Promise<loginResponse>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}