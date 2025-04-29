import { Component, inject, Input } from '@angular/core';
import { Calculator } from '../../services/calculator';

@Component({
  selector: 'app-test-com',
  standalone: true,
  // Make sure the Calculator service is provided here for standalone components
  providers: [Calculator],
  templateUrl: './test-com.component.html',
  styleUrl: './test-com.component.scss',
})
export class TestComComponent {
  // add prop to component with initial value
  @Input() startValue = '';
  private calc = inject(Calculator);
  totalCost = this.calc.add(50, 10);

  constructor() {}
}
