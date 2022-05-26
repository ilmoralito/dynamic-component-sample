import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css'],
})
export class ChildOneComponent implements OnInit {
  @Input() data!: string;

  constructor() {}

  ngOnInit(): void {}
}
