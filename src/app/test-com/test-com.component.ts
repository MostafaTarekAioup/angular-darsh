import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
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

  // When working with components it may be required to notify other components that something has happened. Perhaps a button has been clicked, an item has been added/removed from a list or some other important update has occurred. In this scenario components need to communicate with parent components.
  @Output() increaseCount = 10;
  private calc = inject(Calculator);
  totalCost = this.calc.add(50, 10);

  addEvent() {
    this.increaseCount += 1;
    console.log(this.increaseCount);
  }
}
