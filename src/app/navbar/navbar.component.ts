import { Component, OnInit } from '@angular/core';
import {AuthService} from '../__servives/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  logout() {
    this.authService.logout();
    this.router.navigate(['/connexion']);
  }
}
