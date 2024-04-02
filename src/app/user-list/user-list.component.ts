import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.userService.getAllUsers().subscribe(
      (users) => {
        this.users = users;
        console.log('Employees fetched successfully', this.users);
      },
      (error) => {
        console.error('Error fetching employees', error);
      }
    );
  }

  deleteUser(employeeId: number | undefined): void {
    if (employeeId !== undefined) {
      if (confirm('Are you sure you want to delete this user?')) {
        this.userService.deleteUser(employeeId).subscribe(
          () => {
            console.log('User deleted successfully');
            this.fetchUsers(); // Refresh the user list after deletion
          },
          (error) => {
            console.error('Error deleting user', error);
            // Optionally, display an error message to the user
          }
        );
      }
    } else {
      console.error('User does not have a valid employee ID');
      // Optionally, display an error message to the user
    }
  }
}
