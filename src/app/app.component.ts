import { AfterViewChecked, Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewChecked  {
  ngAfterViewChecked() {
    console.log('Change detection cycle');
  }
}
