import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ESLint-HTML-deprecation';

  /**
   * @deprecated Do not use this property
   */
  public depecatedProp = '';

  ngOnInit(): void {
    this.depecatedProp = 'Do not use this'
  }
}
