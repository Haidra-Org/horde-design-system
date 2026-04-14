import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HordeAlertComponent } from './alert.component';

describe('HordeAlertComponent', () => {
  let fixture: ComponentFixture<HordeAlertComponent>;
  let component: HordeAlertComponent;

  beforeEach(() => {
    fixture = TestBed.createComponent(HordeAlertComponent);
    component = fixture.componentInstance;
  });

  it('computes default host class', () => {
    expect(component.hostClass()).toBe('alert alert--info alert-info');
  });

  it('includes variant in class', () => {
    fixture.componentRef.setInput('variant', 'danger');
    expect(component.hostClass()).toContain('alert--danger');
  });

  it('adds size class when not md', () => {
    fixture.componentRef.setInput('size', 'sm');
    expect(component.hostClass()).toContain('alert--sm');
  });

  it('omits size class for default md', () => {
    expect(component.hostClass()).not.toContain('alert--md');
  });

  it('adds inline class when enabled', () => {
    fixture.componentRef.setInput('inline', true);
    expect(component.hostClass()).toContain('alert--inline');
  });

  it('exposes role and ariaLive inputs', () => {
    expect(component.role()).toBe('alert');
    expect(component.ariaLive()).toBeNull();
  });
});
