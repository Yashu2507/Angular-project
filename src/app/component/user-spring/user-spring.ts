import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-user-spring',
  imports: [FormsModule, CommonModule],
  templateUrl: './user-spring.html',
  styleUrl: './user-spring.css',
})
export class UserSpring {
userData: any[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.httpClient
      .get<any[]>('http://localhost:8080/users')  
      .pipe(
        map((res: any[]) => {
          return res.map((user: any) => ({
            id: user.id,
            name: user.name,
            email: user.email,
            age: user.age
          }));
        })
      )
      .subscribe({
        next: (data) => {
          this.userData = data;
          console.log('Users fetched:', data);
        },
        error: (err) => {
          console.error('Error fetching users:', err);
        }
      });
  }
}
