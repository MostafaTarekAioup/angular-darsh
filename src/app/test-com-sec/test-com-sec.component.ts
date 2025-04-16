import { Component, computed, signal } from '@angular/core';
import { TestComComponent } from '../test-com/test-com.component';

@Component({
  selector: 'app-test-com-sec',
  standalone: true, // Add standalone: true
  imports: [TestComComponent], // This is now correct because component is standalone
  templateUrl: './test-com-sec.component.html',
  styleUrl: './test-com-sec.component.scss',
})
export class TestComSecComponent {
  firstName = signal('Morgan');
  isDisabled = signal(false);
  namesList = signal(['Morgan', 'Darsh', 'Raj', 'Rahul']);
  constructor() {
    console.log('wwwwwww', this.firstName());

    // computed used to produce values based on other signals
    const firstNameCapitalized = computed(() => this.firstName().toUpperCase());
    console.log(firstNameCapitalized());
    console.log(this.firstName());
    // whenever  signal changes the value of computed signal changes too
    this.firstName.set('Darsh co');
    console.log(firstNameCapitalized());
  }
  displayName = (name: string): void => {
    console.log('ssssssssssssss', this.firstName(), name, this.namesList());
  };

  disableButton = (): void => {
    this.isDisabled.set(!this.isDisabled());
  };
}
