import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
@Input() occupation:string ='';
@Output() greet: EventEmitter<string> = new EventEmitter<string>();

username: string = 'Margarita';
isUserExists: boolean = true;
isEditable: boolean =true;

essentialOils = [
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

onMouseOver(oilName: string):void{
  console.log(oilName);
}
emitToParent(): void {
  this.greet.emit('Hi, I´m  a child component 😎🐼');
}

}
