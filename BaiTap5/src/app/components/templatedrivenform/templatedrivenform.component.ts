import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.css']
})
export class TemplatedrivenformComponent implements OnInit {
  title = 'Template Driven Form';
  name: string;
  email: string;
  age: number;
  recommed: string;
  improves: any[] = [
      'Front-end Projects',
      'Back-end Projects',
      'Data Visualization',
      'Challenges',
      'Open Source Community',
      'Gitter help rooms',
      'Videos',
      'City Meetups',
      'Wiki',
      'Forum',
      'Additional Courses'
  ];
  roles: any[] = [
    'Student',
    'Full Time Job',
    'Full Time Learner',
    'Prefer Not To Say',
    'Other',
  ];
  recomments: any[] = [
    'Definitely',
    'Maybe',
    'Not sure'
  ];
  fccs: any[] = [
    'Challenges',
    'Projects',
    'Community',
    'Open Source'
  ];
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.log('Submit success');
  }
}
