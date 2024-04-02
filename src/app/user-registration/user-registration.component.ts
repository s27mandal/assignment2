import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
})
export class UserRegistrationComponent {
  user: User = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    role: '',
    currentGradeId: 1,
  };
  grades: number[] = Array.from({ length: 10 }, (_, i) => i + 1);

  successMessage: string = '';

  constructor(
    private userService: UserService,
    private router: Router // Inject Router
  ) {}

  createUser(): void {
    this.userService.registerUser(this.user).subscribe(() => {
      console.log('User created successfully');
      this.successMessage = 'User created successfully';
      // Optionally, you can navigate to another page or display a success message here
    });
  }

  displayUserList(): void {
    this.router.navigate(['/user-list']); // Navigate to UserList component
  }
}
