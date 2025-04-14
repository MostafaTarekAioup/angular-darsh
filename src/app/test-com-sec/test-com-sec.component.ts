import { Component } from '@angular/core';
import { TestComComponent } from '../test-com/test-com.component';

@Component({
  selector: 'app-test-com-sec',
  standalone: true, // Add standalone: true
  imports: [TestComComponent], // This is now correct because component is standalone
  templateUrl: './test-com-sec.component.html',
  styleUrl: './test-com-sec.component.scss',
})
export class TestComSecComponent {}
