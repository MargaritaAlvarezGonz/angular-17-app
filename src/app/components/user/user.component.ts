import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
username: string = 'Margarita';
isUserExists: boolean = true;


userEssentialOils = [
  {
    id: 'herbal',
    name: 'Lavender'
  },
  {
    id: 'aromatic',
    name: 'Rosemary',
  },
  {
    id: 'medicinal',
    name: 'Mint',
  }
]


}
