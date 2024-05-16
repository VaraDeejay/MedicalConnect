import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PacientesmenuPage } from './pacientesmenu.page';

describe('PacientesmenuPage', () => {
  let component: PacientesmenuPage;
  let fixture: ComponentFixture<PacientesmenuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientesmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
