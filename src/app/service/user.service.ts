import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { User } from '../interface/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  private apiURL = environment.apiURl;
  private readonly imageURL = `https://robohash.org/`;

  getUsers(): Observable<User[]> {
    // let myHeaders = new HttpHeaders({ myheaders: ['header1', 'header2'] });
    // myHeaders.set('id', '1234');
    // myHeaders.append('id', '09877');

    // let params = new HttpParams().set('1', 'Shubham').set('2', 'Kumbhare');
    // params.append('3', 'Prakash');

    // Map Operator used in the pipe

    return this.http.get<User[]>(`${this.apiURL}`).pipe(
      map((users) =>
        users.map((user) => ({
          ...user,
          isAdmin: user.id % 2 == 0 ? true : false,
          pic: `${this.imageURL}/${user.username.toLowerCase()}`,
        }))
      ),
      catchError(this.handleError)
    );
  }

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.apiURL}/1`);
  }

  createUser(post: User): Observable<User> {
    console.log(post);
    return this.http.post<User>(`${this.apiURL}`, post);
  }

  updateUser(post: User): Observable<User> {
    return this.http.put<User>(`${this.apiURL}/${post.id}`, post);
  }
  patchUser(post: any): Observable<User> {
    return this.http.patch<any>(`${this.apiURL}/${post.id}`, post);
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    if (err.status == 404)
      return throwError({ code: err.status, message: err.message });

    return throwError(err);
  }
}
