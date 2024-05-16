import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevopacientePage } from './nuevopaciente.page';

describe('NuevopacientePage', () => {
  let component: NuevopacientePage;
  let fixture: ComponentFixture<NuevopacientePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevopacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
