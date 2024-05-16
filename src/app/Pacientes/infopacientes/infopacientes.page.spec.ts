import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfopacientesPage } from './infopacientes.page';

describe('InfopacientesPage', () => {
  let component: InfopacientesPage;
  let fixture: ComponentFixture<InfopacientesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InfopacientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
