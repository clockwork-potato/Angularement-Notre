import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../api-service.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnDestroy {

  users: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    console.log("Bonjour");
    this.apiService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  ngOnDestroy(): void {
    console.log("Bye Bye");
  }
}
