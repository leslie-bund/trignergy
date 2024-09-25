import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyStatementComponent } from './policy-statement.component';

describe('PolicyStatementComponent', () => {
  let component: PolicyStatementComponent;
  let fixture: ComponentFixture<PolicyStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicyStatementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PolicyStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
