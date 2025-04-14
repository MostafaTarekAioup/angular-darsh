import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComSecComponent } from './test-com-sec/test-com-sec.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestComSecComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-darsh';
}
