import { Component, ComponentRef, OnInit, ViewChild } from '@angular/core';
import { ContentHostDirective } from './content-host.directive';
import { ChildZeroComponent } from './components/child-zero/child-zero.component';
import { ChildOneComponent } from './components/child-one/child-one.component';
import { ChildTwoComponent } from './components/child-two/child-two.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  componentRef!:
    | ComponentRef<ChildZeroComponent>
    | ComponentRef<ChildOneComponent>
    | ComponentRef<ChildTwoComponent>;
  _type!: string;
  get type() {
    return this._type;
  }
  set type(value) {
    this._type = value;

    if (this.componentRef) {
      this.componentRef.instance.data = value;
    }
  }

  @ViewChild(ContentHostDirective, { static: true })
  contentHostDirective!: ContentHostDirective;

  ngOnInit(): void {
    this.updateValue();
  }

  onClick(value: 'child-zero' | 'child-one' | 'child-two'): void {
    const viewContainerRef = this.contentHostDirective.viewContainerRef;

    viewContainerRef.clear();

    switch (value) {
      case 'child-zero':
        this.componentRef =
          viewContainerRef.createComponent(ChildZeroComponent);
        this.componentRef.instance.data = this.type;
        break;
      case 'child-one':
        this.componentRef = viewContainerRef.createComponent(ChildOneComponent);
        this.componentRef.instance.data = this.type;
        break;
      case 'child-two':
        this.componentRef = viewContainerRef.createComponent(ChildTwoComponent);
        this.componentRef.instance.data = this.type;
        break;
    }
  }

  updateValue() {
    this.type = new Date().toISOString();
  }
}
