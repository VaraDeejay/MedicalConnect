import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultasmenuPage } from './consultasmenu.page';

describe('ConsultasmenuPage', () => {
  let component: ConsultasmenuPage;
  let fixture: ComponentFixture<ConsultasmenuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
