import { Component, signal } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormsModule } from '@angular/forms';
import { User } from '../../Models/user';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-list-of-users',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './list-of-users.component.html',
  styleUrl: './list-of-users.component.css',
})
export class ListOfUsersComponent {
  listOfUsers = signal<User[]>([]);
  filterLetter = signal('');
  isLoading = signal(true);

  constructor(private usersService: UsersService) {}

  async ngOnInit() {
    try {
      const users: User[] = await lastValueFrom(this.usersService.getUsers());
      if (!users) throw new Error('No users found');
      this.listOfUsers.set(await this.filterUsersAsync(users));
    } catch (error) {
      console.error('Error fetching or processing users:', error);
    } finally {
      this.isLoading.set(false);
    }
  }

  async filterUsersAsync(users: User[]): Promise<User[]> {
    return new Promise((resolve, reject) => {
      try {
        const filteredUsers = users.filter((user: User) =>
          user.username.includes(this.filterLetter()),
        );
        resolve(filteredUsers);
      } catch (error) {
        reject(error);
      }
    });
  }

  async onFilterChange(event: KeyboardEvent) {
    const inputElement = event.target as HTMLInputElement;
    this.filterLetter.set(inputElement.value);
    if (!inputElement.value) {
      this.filterLetter.set('');
      this.listOfUsers.set(await lastValueFrom(this.usersService.getUsers()));
    }
    this.listOfUsers.set(await this.filterUsersAsync(this.listOfUsers()));
  }
}
