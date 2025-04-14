import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComComponent } from './test-com.component';

describe('TestComComponent', () => {
  let component: TestComComponent;
  let fixture: ComponentFixture<TestComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
