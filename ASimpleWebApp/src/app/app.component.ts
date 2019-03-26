import { Component } from '@angular/core';
import { PersonService } from './service/person.service';
import { Person } from './model/person.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A Simple Web App';
  public objects: any[] = [
    {
      id: 1,
      first: 'Mark',
      last: 'Otto',
      handle: '@mdo'
    },
    {
      id: 2,
      first: 'Jacob',
      last: 'Thornton',
      handle: '@fat'
    },
    {
      id: 3,
      first: 'Larry The Bird',
      last: '',
      handle: '@twitter'
    }
  ];
  constructor(public personService: PersonService){

  }
  public persons: Person[] = [];
  ngOnInit(): void {
    this.persons = this.personService.getAllData();
  }
  public check: string;
  sort(value){
    this.check = value;
  }
}
