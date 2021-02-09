import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../__servives/auth.service";


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService, private injector:Injector) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available

        let connectedUser = this.injector.get(AuthService);
       // let connectedUser = this.authService.conectedUserValue;
        //   console.log('aaaaaaaaaaa');
          console.log(localStorage.getItem('token'));
        // if (connectedUser && connectedUser.token) {
            console.log(connectedUser.getToken());
            let requestClone = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${connectedUser.getToken()}`
                }
            });
        // }

        return next.handle(requestClone);
    }
}
