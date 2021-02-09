import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  constructor(private getUser: UserService) { }

  users: User[] = [];

  ngOnInit(): void {

    this.getUser.getAll().subscribe(
      (data: any) => {
        this.users = data['hydra:member'];
      }
    );
  }

}
