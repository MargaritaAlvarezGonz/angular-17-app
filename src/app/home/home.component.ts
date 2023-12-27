import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Input() username= '';

  games=[
    {
      id: 1,
      name: 'Elemento 1'
    },
    {
      id:2,
      name: 'Elemento2'
    },
    {
      id: 3,
      name: 'Elmenento3'
    }
  ]
}
