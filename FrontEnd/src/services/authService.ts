import { api } from './api';
import type { loginResponse } from '../types/authResponse';

export async function register(username: string, email: string, password: string){
   api.post('/auth/register', { username, email, password });
}

export async function login(email: string, password: string): Promise<loginResponse> {
  return api.post('/auth/login', { email, password });
}