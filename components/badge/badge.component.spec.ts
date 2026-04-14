import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HordeBadgeComponent } from './badge.component';

describe('HordeBadgeComponent', () => {
  let fixture: ComponentFixture<HordeBadgeComponent>;
  let component: HordeBadgeComponent;

  beforeEach(() => {
    fixture = TestBed.createComponent(HordeBadgeComponent);
    component = fixture.componentInstance;
  });

  it('computes default host class', () => {
    expect(component.hostClass()).toBe('badge badge-secondary');
  });

  it('uses the requested variant', () => {
    fixture.componentRef.setInput('variant', 'success');
    expect(component.hostClass()).toBe('badge badge-success');
  });
});
