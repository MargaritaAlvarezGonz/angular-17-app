import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserComponent,HomeComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username= 'Margarita';
  isLoggedIn = false;

  greet(){
    alert('Hola 😊')
  }

}
