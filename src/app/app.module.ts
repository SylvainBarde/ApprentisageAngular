import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TagHtmlComponent } from './composants/tag-html/tag-html.component';

@NgModule({
  declarations: [
    AppComponent,
    TagHtmlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
