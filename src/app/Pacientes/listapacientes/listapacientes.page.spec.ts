import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListapacientesPage } from './listapacientes.page';

describe('ListapacientesPage', () => {
  let component: ListapacientesPage;
  let fixture: ComponentFixture<ListapacientesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListapacientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
