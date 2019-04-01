import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  frmInfomation: FormGroup;
  title = 'Reactive Form';
  improves: Array<string> = [
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
  constructor(
    private _fromBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.frmInfomation = this._fromBuilder.group({
      name: ['', [
        Validators.required
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      age: ['', [
        Validators.required
      ]],
      recommend: ['', [
        Validators.required
      ]],
      role: ['', []
      ],
      fcc: ['', []
      ],
      comment: ['', []
      ]
    });
  }
  onSubmit() {
    console.log(this.frmInfomation);
  }
}
