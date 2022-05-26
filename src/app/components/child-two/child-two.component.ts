import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css'],
})
export class ChildTwoComponent implements OnInit {
  @Input() data!: string;

  constructor() {}

  ngOnInit(): void {}
}
