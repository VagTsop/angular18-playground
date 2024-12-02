import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  //? string or undefined
  @Input({ required: true }) name?: string;

   //! --> name is required and you are assertingg that it
   // will be not null or undefined. ypu do not need to handle
   // undefined checks in you code because you are telling typescript
   // that name will always be defined.
   // ! -> does not enforce tha the value it actually provided at runtime
   // it is your responsibility to ensure that name is initiliazed before it is used
   // if name is not initilized, it will lead to runtime errors
   //@Input({ required: true }) name!: string;
  }

