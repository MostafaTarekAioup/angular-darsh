import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComSecComponent } from './test-com-sec.component';

describe('TestComSecComponent', () => {
  let component: TestComSecComponent;
  let fixture: ComponentFixture<TestComSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComSecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestComSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
