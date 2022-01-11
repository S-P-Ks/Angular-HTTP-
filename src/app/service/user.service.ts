import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  private apiURL = environment.apiURl;

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiURL}`);
  }

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.apiURL}/1`);
  }

  createUser(post: User): Observable<User> {
    console.log(post);
    return this.http.post<User>(`${this.apiURL}`, post);
  }
}
