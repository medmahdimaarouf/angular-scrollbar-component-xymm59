import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NG_EVENT_PLUGINS } from '@tinkoff/ng-event-plugins';

import { AppComponent } from './app.component';
import { ScrollbarModule } from './scrollbar/scrollbar.module';

@NgModule({
  imports:      [ BrowserModule, ScrollbarModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:    NG_EVENT_PLUGINS,
})
export class AppModule { }
