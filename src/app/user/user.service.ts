import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[]=[];

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]>
  {
    return this.http.get<User[]>(`https://127.0.0.1:8000/api/admin/users`)
    .pipe(
      retry(1)
    );

  }

  getUserByUsername(un: string): Observable<User>
  {
    const use = this.http.get<User>(`https://127.0.0.1:8000/api/users/${un}`);
    return use;
  }


  // tslint:disable-next-line:typedef
  addUser(data: any)
  {
    return this.http.post<any>(`https://127.0.0.1:8000/api/register`, data);
  }

  findUserById(id: number): User{
    const user = this.users.find(
      (u: User) => {
        // tslint:disable-next-line:triple-equals
        return u.id == id;
      }
    );
    return <User> user;
  }

  getUserByUsernameAndPass(username: string, password: string): User{
    const user = this.users.find(
      (u: User) => {
        return u.username === username && u.password === password;
      }
    );
    return user as User;
  }
}
