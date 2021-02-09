import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { UserService } from '../user/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private connectedUserSubject: BehaviorSubject<User>;
  public connectedUser: Observable<User>;

  infoUser!: User;
  // tslint:disable-next-line:new-parens
  private helper = new JwtHelperService;

  // loggedIn: boolean = false;
  // connectedUser!: User;

  constructor(private http: HttpClient) {

    this.connectedUserSubject = new BehaviorSubject<User>({
      email: undefined,
      id: 0,
      nom: undefined,
      profil: '',
      password: undefined,
      photo: undefined,
      prenom: '',
      token: undefined,
      username: undefined
    });
    this.connectedUser = this.connectedUserSubject.asObservable();

    const userJson = localStorage.getItem('connectedUser');
    this.connectedUser = userJson !== null ? JSON.parse(userJson) : new User();
  }

  httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };

  public get connectedUserValue(): boolean
  {
      //return this.connectedUserSubject.value;
    return  true;
  }

  // isConnect(){
  //   const promise = new Promise(
  //     (resolve, rejects) => {
  //       setTimeout(()=>{
  //         resolve(this.loggedIn);
  //       }, 1000)
  //     }
  //   );

  //   return promise;
  // }

  // tslint:disable-next-line:typedef
  login(username: string, password: string){

    return this.http.post<User>(`https://127.0.0.1:8000/api/login_check`, {username, password});
      // .pipe(map(user => {
      //   localStorage.setItem('connectedUser', JSON.stringify(user));
      //   const tokenInfo = this.getInfoToken(user.token);
      //   //console.log(tokenInfo['token']);
      //   localStorage.setItem('connectedUserInfo', tokenInfo.token);
      //   this.connectedUserSubject.next(user);
      //   console.log(this.connectedUserValue.v);
      //   localStorage.setItem('token', this.connectedUserValue.token);
      //   localStorage.setItem('connectedUser', this.connectedUserValue.token);

      //   return tokenInfo.roles[0];

      // }));

  }

  getInfoToken(token: any): any{
    try{
      return this.helper.decodeToken(token);
    }
    catch (Error){
      return null;
    }
  }

  logout(): any {
    localStorage.removeItem('connectedUser');
    localStorage.removeItem('connectedUserInfo');
    // @ts-ignore
    this.connectedUserSubject.next(null);
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
