import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userOccupation = 'Developer';
  title = 'angular-17-app';
  childsMessage: string = '';

  receiveEmision($event: string): void{
    this.childsMessage=$event;
  }
}
