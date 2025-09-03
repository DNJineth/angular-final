import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService, User } from '../../services/users';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, MatTableModule,MatCardModule],
  templateUrl: './list.html',
  styleUrls: ['./list.css']
})
export class ListComponent implements OnInit {
  private usersService = inject(UsersService);
  users: User[] = [];
  displayedColumns: string[] = ['id', 'name', 'username', 'email'];

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
