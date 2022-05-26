import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentHostDirective } from './content-host.directive';
import { ChildZeroComponent } from './components/child-zero/child-zero.component';
import { ChildOneComponent } from './components/child-one/child-one.component';
import { ChildTwoComponent } from './components/child-two/child-two.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentHostDirective,
    ChildZeroComponent,
    ChildOneComponent,
    ChildTwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
