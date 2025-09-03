import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Definicion de interfaces
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface CreateUserDto {
  name: string;
  username: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  // Obtener todos los usuarios
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // Crear usuario (simulado)
  createUser(user: CreateUserDto): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
}


