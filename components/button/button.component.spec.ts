import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HordeButtonComponent } from './button.component';

describe('HordeButtonComponent', () => {
  let fixture: ComponentFixture<HordeButtonComponent>;
  let component: HordeButtonComponent;

  beforeEach(() => {
    fixture = TestBed.createComponent(HordeButtonComponent);
    component = fixture.componentInstance;
  });

  it('computes default button class', () => {
    expect(component.buttonClass()).toBe('btn btn-primary');
  });

  it('includes variant in class', () => {
    fixture.componentRef.setInput('variant', 'danger');
    expect(component.buttonClass()).toContain('btn-danger');
  });

  it('adds size class when not md', () => {
    fixture.componentRef.setInput('size', 'lg');
    expect(component.buttonClass()).toContain('btn-lg');
  });

  it('omits size class for default md', () => {
    expect(component.buttonClass()).not.toContain('btn-md');
  });

  it('adds loading class when loading', () => {
    fixture.componentRef.setInput('loading', true);
    expect(component.buttonClass()).toContain('btn-loading');
  });

  it('exposes disabled and type inputs', () => {
    expect(component.disabled()).toBe(false);
    expect(component.type()).toBe('button');
  });
});
