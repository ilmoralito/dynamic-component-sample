import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-zero',
  templateUrl: './child-zero.component.html',
  styleUrls: ['./child-zero.component.css'],
})
export class ChildZeroComponent implements OnInit {
  @Input() data!: string;

  constructor() {}

  ngOnInit(): void {}
}
