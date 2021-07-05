import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data = [
    {
      name: 'Julie',
      age: 34,
      job: 'Designer',
      employed: true,
      company: 'Warner Bros'
    },
    {
      name: 'Anna',
      age: 24,
      job: 'Lawyer',
      employed: true,
      company: 'Sony'
    },
    {
      name: 'Mary',
      age: 18,
      job: 'Student',
      employed: false,
      company: '',
    }
  ];

  headers = [
    {
      key: 'name',
      label: 'Name'
    },
    {
      key: 'age',
      label: 'Age'
    },
    {
      key: 'job',
      label: 'Job'
    },
    {
      key: 'employed',
      label: 'Has a Job?!'
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
